import React from 'react'
import Caret from '../assets/caret.svg'
import { currencyOptions } from './currency'


interface DropdownProps {
    options: { text: string, image: string, value: string }[];
    value?: string;
    selected?: { text: string, image: string }
}

interface DropdownInputGroupProps {
    value: string;
}
const Dropdown: React.FC<DropdownProps> = ({ selected }) => {
    return (
        <div className={`bg-blueish-gray w-full py-2 px-4 flex flex-row items-center ${selected ? 'justify-center' : 'justify-end'}`}>
            {selected &&
                <>
                    <img src={selected?.image} className='w-20p h-20p rounded-full overflow-hidden' alt='' />
                    <span className='capitalize text-header-blue font-medium mx-2'>{selected?.text}</span>
                </>}
            <img src={Caret} alt='' className='w-2' />
        </div>
    )
}

const DropdownInputGroup = () => {
    return (
        <div className='w-full border border-ceramic-gray rounded-md p-0 m-0'>
            <label className='w-3/5 flex flex-col py-2 px-4'>
                <span className='text-sharp-gray mb-1'>You send</span>
                <input className='outline-hidden' />
            </label>
            <div className='w-2/5'><Dropdown options={currencyOptions} /></div>
        </div>
    )
}

export default DropdownInputGroup