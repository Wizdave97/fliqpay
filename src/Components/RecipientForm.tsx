import React, { useCallback, useState } from 'react'
import Button, { Variant } from '../common/Button'
import CommonInput from '../common/CommonInput'

export enum Region {
    EUROPE = 'EUROPE',
    OTHER = 'OTHER'
}
export type RecipientFormData = {
    email: string;
    fullName: string;
    iban: string;
    swift: string;
    region: Region;
}

interface RecipientFormProps {
    onCompleted: (data: RecipientFormData) => void;
    data: RecipientFormData
}
const RecipientForm: React.FC<RecipientFormProps> = ({ onCompleted, data }) => {
    const [region, setRegion] = useState<Region>(data.region)
    const [state, setState] = useState<RecipientFormData>(data)
    const [errors, setErrors] = useState<Omit<RecipientFormData, 'region'>>({swift: '', fullName: '', email: '', iban: '' })
    const  { email, fullName, swift, iban } = state

    
    const handleValidation = useCallback((name: keyof RecipientFormData, value: string, errors: {[key: string]: boolean} = {}) => {
        switch(name) {
            case 'email':
                if (!value.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    setErrors((prevState) => ({...prevState, email: 'Please use a valid email'}))
                    errors.email = true
                }
                else setErrors((prevState) => ({...prevState, email: ''}))
                break;
            case 'fullName':
                if (value.trim().length < 3 || value.trim().length > 255) {
                    setErrors((prevState) => ({...prevState, fullName: 'Name supplied is not valid, minimum length is 3 and maximum is 255'}))
                    errors.fullName = true
                }
                else setErrors((prevState) => ({...prevState, fullName: ''}))
                break;
            case 'iban':
                if (value.trim().length < 5 || value.trim().length > 34) {
                    setErrors((prevState) => ({...prevState, iban: 'IBAN supplied is not valid, minimum length is 5 and maximum is 34'}))
                    errors.iban = true
                }
                else setErrors((prevState) => ({...prevState, iban: ''}))
                break;
            case 'swift':
                if (value.trim().length < 5 || value.trim().length > 11) {
                    setErrors((prevState) => ({...prevState, swift: 'Swift code supplied is not valid, minimum length is 8 and maximum is 11'}))
                    errors.swift = true
                }
                else setErrors((prevState) => ({...prevState, swift: ''}))
                break;
        }
    },  [])
    const handleChange =useCallback((name: keyof RecipientFormData) => (value: string) => {
        setState((prevState) => ({...prevState, [name]: value}))
        handleValidation(name, value)
    }, [handleValidation])

    const handleFormCompletion = useCallback(() => {
        const errors: {[key: string]: boolean} = {}
        Object.entries(state).forEach(([field, value]) => {
            if (field === 'email' && !value.trim()) return
            handleValidation(field as keyof RecipientFormData, value, errors)
        }) 
        switch(region) {
            case Region.EUROPE:
                if(errors.fullName || errors.iban || errors.email) return
                break;
            case Region.OTHER:
                if(errors.fullName || errors.iban || errors.swift || errors.email) return
                break;
        }
        onCompleted({...state, region})
    }, [state, handleValidation, onCompleted, region])

    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>Your Recipient</h1>
            <h2 className='w-full text-subheader-gray text-sm'>Who are you sending money to?</h2>
            <span className='w-full h-0.5 bg-ceramic-gray  my-2' />
            <CommonInput label='Their email (optional)' value={email} onChange={handleChange('email') }  error={errors.email}/>
            <div className='w-full h-4' />
            <CommonInput label='Full name of the account holder' value={fullName} onChange={handleChange('fullName') } error={errors.fullName} />
            <div className='w-full h-4' />
            <h1 className='w-full text-header-blue text-lg mb-1'>Bank Details</h1>
            <span className='w-full h-0.5 bg-ceramic-gray  my-2' />
            <div className='w-full flex flex-row relative h-10'>
                <div role='tab' onClick={() => setRegion(Region.EUROPE)} className={`w-36 py-1 mr-2 z-10 h-full flex items-center cursor-pointer justify-center  ${region === Region.EUROPE ? 'text-sharp-indigo border-b-2 border-sharp-indigo' : 'text-sleek-gray'}`}>
                    Inside Europe
                </div>
                <div role='tab' onClick={() => setRegion(Region.OTHER)} className={`w-36 py-1 z-10 flex items-center justify-center cursor-pointer  ${region === Region.OTHER ? 'text-sharp-indigo border-b-2 border-sharp-indigo' : 'text-sleek-gray'}`}>
                    Outside Europe
                </div>
                <div className='w-full bg-ceramic-gray h-0.5 absolute bottom-0 left-0' />
            </div>
            <div className='w-full h-4' />
            {
                region === Region.EUROPE ? (
                    <>
                        <CommonInput placeholder='DE98370440018929829032' label='IBAN' value={iban} onChange={handleChange('iban') } error={errors.iban} />
                    </>
                ) :
                    (
                        <>
                            <CommonInput label='SWIFT / BIC code' placeholder='BUKBGB22' value={swift} onChange={handleChange('swift')} error={errors.swift} />
                            <div className='w-full h-4' />
                            <CommonInput label='IBAN / Account Number' placeholder='01234567891' value={iban} onChange={handleChange('iban')} error={errors.iban}/>
                        </>
                    )
            }
            <div className='w-full h-4' />
            <Button variant={Variant.fill} label='Continue' onClick={handleFormCompletion} />
        </div>
    )
}

export default RecipientForm