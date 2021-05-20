import React, { useState } from 'react'
import Button, { Variant } from '../common/Button'
import CommonInput from '../common/CommonInput'

enum Region {
    EUROPE = 'EUROPE',
    OTHER = 'OTHER'
}
const RecipientForm = () => {
    const [region, setRegion] = useState<Region>(Region.EUROPE)
    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>Your Recipient</h1>
            <h2 className='w-full text-subheader-gray text-sm'>Who are you sending money to?</h2>
            <span className='w-full h-0.5 bg-ceramic-gray  my-2' />
            <CommonInput label='Their email (optional)' value='' onChange={() => { }} />
            <div className='w-full h-4' />
            <CommonInput label='Full name of the account holder' value='' onChange={() => { }} />
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
                        <CommonInput placeholder='DE98370440018929829032' label='IBAN' value='' onChange={() => { }} />
                    </>
                ) :
                    (
                        <>
                            <CommonInput label='SWIFT / BIC code' placeholder='BUKBGB22' value='' onChange={() => { }} />
                            <div className='w-full h-4' />
                            <CommonInput label='IBAN / Account Number' placeholder='01234567891' value='' onChange={() => { }} />
                        </>
                    )
            }
            <div className='w-full h-4' />
            <Button variant={Variant.fill} label='Continue' onClick={() => {}} />
        </div>
    )
}

export default RecipientForm