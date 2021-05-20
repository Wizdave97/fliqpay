import React from 'react'

export enum Variant {
    fill = 'fill',
    outline = 'outline'
}
interface ButtonProps {
    variant: Variant;
    label: string;
    onClick: () => void;
    disabled?: boolean;
    fillColor?: string;
}
const Button: React.FC<ButtonProps> = ({ variant, label, onClick, disabled = false, fillColor = 'bg-sharp-indigo' }) => {
    const color = variant === Variant.fill ? `${fillColor}  text-white` : 'bg-white text-sharp-indigo border border-sharp-indigo'
    const disabledStyle = disabled ? 'opacity-60' : ''
    return (
        <span
            role='button'
            aria-disabled={disabled}
            className={`rounded-md hover:opacity-70 text-sm py-4 px-4 w-full cursor-pointer flex items-center justify-center ${color} ${disabledStyle}`} 
            onClick={() => {
                if(disabled) return
                onClick()
            }}>
            <span>{label}</span>
        </span>
    )
}

export default Button