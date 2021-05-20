import React, { useCallback, useState } from 'react'
import Button, { Variant } from '../common/Button'
import CommonInput from '../common/CommonInput'

type CheckoutFormData = {
    cardNumber: string;
    cvv: string;
    expDate: string;
    expYear: string;
}

interface CheckoutProps {
    onCompleted: (data: CheckoutFormData) => void;
}
const Checkout: React.FC<CheckoutProps> = ({ onCompleted }) => {
    const [state, setState] = useState<CheckoutFormData>({ cardNumber: '', cvv: '', expDate: '', expYear: '' })
    const [errors, setErrors] = useState<CheckoutFormData>({ cardNumber: '', cvv: '', expDate: '', expYear: '' })
    const { cardNumber, cvv, expDate, expYear } = state


    const handleValidation = useCallback((name: keyof CheckoutFormData, value: string, errors: { [key: string]: boolean } = {}) => {
        switch (name) {
            case 'cardNumber':
                if (value.trim().length !== 16) {
                    setErrors((prevState) => ({ ...prevState, cardNumber: 'Invalid card number' }))
                    errors.cardNumber = true
                }
                else setErrors((prevState) => ({ ...prevState, cardNumber: '' }))
                break;
            case 'cvv':
                if (value.trim().length !== 3) {
                    setErrors((prevState) => ({ ...prevState, cvv: 'Invalid cvv' }))
                    errors.cvv = true
                }
                else setErrors((prevState) => ({ ...prevState, cvv: '' }))
                break;
            case 'expDate':
                const splitDate = value.trim().split('/')
                if (value.trim().length !== 5 || value.trim().indexOf('/') !== 2 || !(+splitDate[0].trim() > 0 && +splitDate[0].trim() <= 12) || !(+splitDate[1].trim() > 0 && +splitDate[1].trim() <= 31)) {
                    setErrors((prevState) => ({ ...prevState, expDate: 'Invalid date supplied' }))
                    errors.expDate = true
                }
                else setErrors((prevState) => ({ ...prevState, expDate: '' }))
                break;
            case 'expYear':
                if (+value.trim() < new Date().getFullYear()) {
                    setErrors((prevState) => ({ ...prevState, expYear: 'Invalid year' }))
                    errors.expYear = true
                }
                else setErrors((prevState) => ({ ...prevState, expYear: '' }))
        }
    }, [])
    const handleChange = useCallback((name: keyof CheckoutFormData) => (value: string) => {
        setState((prevState) => ({ ...prevState, [name]: value }))
        handleValidation(name, value)
    }, [handleValidation])

    const handleFormCompletion = useCallback(() => {
        const errors: { [key: string]: boolean } = {}
        Object.entries(state).forEach(([field, value]) => {
            handleValidation(field as keyof CheckoutFormData, value, errors)
        })
        if(Object.values(errors).length) return
        onCompleted(state)
    }, [state, handleValidation, onCompleted])
    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>Your Card Details</h1>
            <h2 className='w-full text-subheader-gray text-sm'>Only mastercards are accepted</h2>
            <span className='w-full h-0.5 bg-ceramic-gray  my-2' />
            <CommonInput label='Card number' value={cardNumber} onChange={handleChange('cardNumber')} error={errors.cardNumber} />
            <div className='w-full h-4' />
            <div className='w-full grid grid-cols-2 gap-4'>
                <CommonInput label='Expiry Date' placeholder='01/21' value={expDate} onChange={handleChange('expDate')} error={errors.expDate} />
                <CommonInput label='Expiry year' placeholder='2021' value={expYear} onChange={handleChange('expYear')} error={errors.expYear} />
            </div>
            <div className='w-full h-4' />
            <CommonInput label='CVV' value={cvv} placeholder='342' onChange={handleChange('cvv')} error={errors.cvv} />
            <div className='w-full h-4' />

            <Button variant={Variant.fill} fillColor='bg-bright-green' label='Complete transaction' onClick={handleFormCompletion} />
        </div>
    )
}

export default Checkout