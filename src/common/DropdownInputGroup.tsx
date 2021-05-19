import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Caret from '../assets/caret.svg'
import { currencyOptions } from './currency'
import { find } from 'lodash'
import { useOnClickOutside } from '../hooks/useOnClickOutside'


interface DropdownProps {
    options: { text: string, image: string, value: string }[];
    value?: string;
    onChange: (value: string) => void;
}

interface DropdownInputGroupProps {
    inputValue: string;
    dropdownValue: string;
    label: string;
    onChangeInput: (value: string) => void;
    onChange: (value: string) => void;
    disabled?: boolean;
    options: { text: string, image: string, value: string }[];


}

interface PortalProps {
    open: boolean;
    mountNode?: HTMLElement;
    childRef: RefObject<HTMLDivElement | null>;
}

const Portal: React.FC<PortalProps> = ({open, mountNode = document.body, children }) => {
    
    if (!open) return null
    return ReactDOM.createPortal(children, mountNode)
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
    const selected = useMemo(() => find(options, (o) => o.value === value), [value, options] )
    const handleRef = useRef<HTMLDivElement | null>(null)
    const listRef = useRef<HTMLDivElement | null>(null)
    const [open, setOpen] = useState(false)
    useOnClickOutside(handleRef, () => setOpen(false))
    useEffect(() => {
        if(!listRef.current || !handleRef.current) return
        if(open) {
            const handleRefBounds = handleRef.current.getBoundingClientRect()
            listRef.current.style.top = `${handleRefBounds.height}px`
            listRef.current.style.width = `${handleRefBounds.width}px`
            listRef.current.classList.remove('hidden')
            listRef.current.classList.add('flex')
        }
    }, [open])
    return (
        <div ref={handleRef} onClick={(e) => {
            e.stopPropagation()
            !open && setOpen(true)
            }} className={`bg-blueish-gray w-full h-full py-2 px-4 flex flex-row items-center cursor-pointer relative ${selected ? 'justify-center' : 'justify-end'}`}>
            {selected &&
                <>
                    <img src={selected?.image} className='w-20p h-20p rounded-full overflow-hidden' alt='' />
                    <span className='capitalize text-header-blue font-medium ml-2 mr-4'>{selected?.text}</span>
                </>}
            <img src={Caret} alt='' className='w-3' />
            <Portal open={open} childRef={listRef} mountNode={handleRef.current!}>
                <div ref={listRef} className='max-h-80 overflow-y-auto bg-white shadow-md z-20 left-0 flex-col absolute hidden'>
                    {
                        options.map(({ value, text, image }) => {
                            return (
                            <div key={value} className={`flex flex-row px-3 py-2 text-header-blue hover:bg-ceramic-gray cursor-pointer ${value === selected?.value ? 'bg-ceramic-gray text-white hover:opacity-70' : '' }`} 
                            onClick={(e) => {
                                e.stopPropagation()
                                setOpen(false)
                                onChange(value)
                            }}>
                                <img src={image} className='w-20p h-20p rounded-full overflow-hidden' alt='' />
                                <span className='capitalize  font-medium mx-2'>{text}</span>
                            </div>)
                        })
                    }
                </div>
            </Portal>
        </div>
    )
}

const DropdownInputGroup: React.FC<DropdownInputGroupProps> = ({ label, dropdownValue, inputValue, onChange, onChangeInput, disabled, options }) => {
    return (
        <div className='w-full border border-ceramic-gray rounded-md p-0 m-0 flex flex-row'>
            <label className='w-3/5 flex flex-col py-2 px-4'>
                <span className='text-sharp-gray mb-1'>{label}</span>
                <input disabled={disabled} className='outline-hidden bg-transparent text-header-blue text-lg' value={inputValue} onChange={(e) => {
                    e.persist()
                    onChangeInput(e.target.value)
                }} />
            </label>
            <div className='w-2/5 h-full'><Dropdown options={options} value={dropdownValue} onChange={onChange} /></div>
        </div>
    )
}

export default DropdownInputGroup