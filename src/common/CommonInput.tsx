import React from 'react'

interface CommonInputProps {
    placeholder?:string;
    label: string;
    onChange: (value: string) => void;
    value: string;
    type?: string;
    error?: string;
}
const CommonInput: React.FC<CommonInputProps> = ({ label, placeholder, onChange, value, type = 'text', error }) => {

    return (
        <div className='w-full p-0 m-0'>
            <label className='w-full h-full flex flex-col p-0 m-0'>
                <span className='text-sm text-sleek-gray mb-1'>{label}</span>
                <input type={type} value={value} className='text-header-blue w-full py-2 px-3 border border-ceramic-gray rounded-sm outline-hidden placeholder-washed-gray' 
                placeholder={placeholder}
                onChange={(e) => {
                    e.persist()
                    onChange(e.target.value)
                }}
                 />
                 {error && <span className='w-full mt-2 text-xs text-red-700 italic font-bold'>{error}</span>}
            </label>
        </div>
    )
}

export default CommonInput