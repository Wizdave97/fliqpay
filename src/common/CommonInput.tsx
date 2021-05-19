import React from 'react'

interface CommonInputProps {
    placeholder?:string;
    label: string;
    onChange: (value: string) => void;
    value: string;

}
const CommonInput: React.FC<CommonInputProps> = ({ label, placeholder, onChange, value }) => {

    return (
        <div className='w-full p-0 m-0'>
            <label className='w-full flex flex-col p-0 m-0'>
                <span className='text-sm text-sleek-gray mb-1'>{label}</span>
                <input value={value} className='text-sleek-gray w-full py-1 px-3 border border-ceramic-gray rounded-sm outline-hidden' 
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