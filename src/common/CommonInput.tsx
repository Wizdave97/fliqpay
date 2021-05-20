import React from 'react'

interface CommonInputProps {
    placeholder?:string;
    label: string;
    onChange: (value: string) => void;
    value: string;
    type?: string

}
const CommonInput: React.FC<CommonInputProps> = ({ label, placeholder, onChange, value, type = 'text' }) => {

    return (
        <div className='w-full p-0 m-0'>
            <label className='w-full h-full flex flex-col p-0 m-0'>
                <span className='text-sm text-sleek-gray mb-1'>{label}</span>
                <input type={type} value={value} className='text-sleek-gray w-full py-2 px-3 border border-ceramic-gray rounded-sm outline-hidden placeholder-washed-gray' 
                placeholder={placeholder}
                onChange={(e) => {
                    e.persist()
                    onChange(e.target.value)
                }}
                 />
            </label>
        </div>
    )
}

export default CommonInput