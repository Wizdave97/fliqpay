import React from 'react'
import Button, { Variant } from '../common/Button'
import { PayOutDataProps } from './PayoutForm'
import { RecipientFormData, Region } from './RecipientForm'

interface ReviewFormProps {
    payoutData: PayOutDataProps;
    recipientData: RecipientFormData & {region: Region};
    onCompleted: () => void;
}
const ReviewRow = ({ bold = false, leftText, rightText }: { bold?: boolean, leftText: string, rightText: string }) => {
    return (
        <div className='w-full flex justify-between my-1 items-center'>
            <span className='text-left max-w-1/2 text-xs truncate text-sharp-gray pr-2'>{leftText}</span>
            <span className={`text-right max-w-1/2 text-xs truncate text-contrasty-gray pl-2 ${bold ? 'text-lg font-medium' : ''}`}>{rightText}</span>
        </div>
    )
}
const ReviewForm: React.FC<ReviewFormProps> = ({ payoutData: { inputAmount, currencyInput, currencyOutput, convertedAmount, fees, rate}, recipientData, onCompleted }) => {
    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>Review details of your transfer</h1>
            <span className='w-full h-0.5 bg-ceramic-gray  my-4' />
            <div className='w-full flex flex-col'>
                <ReviewRow leftText='You send' bold rightText={`${inputAmount} ${currencyInput}`}/>
                <ReviewRow leftText='Total fees (included)' rightText={`${fees} ${currencyInput}`}/>
                <ReviewRow leftText={'Amount we\'ll convert'} rightText={`${new Intl.NumberFormat().format(+(+inputAmount - +fees).toFixed(2))} ${currencyInput}`}/>
                <ReviewRow leftText='Guaranteed rate' rightText={rate}/>
                <ReviewRow leftText={`${recipientData.fullName.split(' ')[0]} gets`} bold rightText={`${convertedAmount} ${currencyOutput}`}/>
            </div>
            <span className='w-full h-0.5 bg-ceramic-gray  my-4' />
            <div className='w-full flex flex-col'>
                <ReviewRow leftText='Name' rightText={recipientData.fullName}/>
                {recipientData.email && <ReviewRow leftText='Email' rightText={recipientData.email}/>}
                <ReviewRow leftText='IBAN / Account Number' rightText={recipientData.iban}/>
                {recipientData.region === Region.OTHER && <ReviewRow leftText='SWIFT / BIC code' rightText={recipientData.swift}/>}
            </div>
            <div className='w-full h-4' />
            <Button variant={Variant.fill} fillColor='bg-bright-green' label='Continue' onClick={onCompleted} />
        </div>
    )
}

export default ReviewForm