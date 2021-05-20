import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Close from '../assets/close.svg'
import Stepper from '../common/Stepper'
import PayoutForm, { PayOutDataProps } from './PayoutForm'
import RecipientForm, { RecipientFormData, Region } from './RecipientForm'
import ReviewForm from './ReviewForm'
import Checkout from './Checkout'
import { Currency } from '../common/currency'


const steps = ['Amount', 'Recipient', 'Review', 'Pay']

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [completed, setCompleted] = useState(false)
    const [payoutData, setPayoutData] = useState<PayOutDataProps>({ currencyInput: Currency.EUR, currencyOutput: '', inputAmount: '', convertedAmount: '', fees: '', rate: '' })
    const [recipientData, setRecipientData] = useState<RecipientFormData & { region: Region}>({ swift: '', fullName: '', email: '', iban: '', region: Region.EUROPE })

    return (
        <div className='w-full h-full bg-white m-0 p-0'>
            <div role='navigation' className='bg-white shadow-md h-24 w-full px-2 py-3 md:px-16 lg:px-48 xl:px-64 flex flex-row items-center justify-between'>
                <div className='w-20 h-full mr-4 flex items-center'>
                    <img src={Logo} alt='Fliq pay' className='w-full' />
                </div>
                <Stepper activeIndex={activeIndex} steps={steps} completed={completed} />
                <div className='w-4 h-full ml-4 flex items-center' role='button' onClick={() => {
                    if (activeIndex === 0) return
                    setActiveIndex(activeIndex - 1)
                }
                }>
                    <img src={Close} alt='' className='w-full' />
                </div>
            </div>
            <div className='my-6 w-full px-2 py-3 md:px-16 lg:px-48 xl:px-64 flex justify-center'>
                {activeIndex === 0 && <PayoutForm initData={payoutData} onCompleted={(data: PayOutDataProps) => {
                    setPayoutData(data)
                    setActiveIndex(activeIndex + 1)
                }} />}
                {activeIndex === 1 && <RecipientForm data={recipientData} onCompleted={(data) => {
                    setRecipientData(data)
                    setActiveIndex(activeIndex + 1)
                }} />}
                {
                    activeIndex === 2 && <ReviewForm payoutData={payoutData} recipientData={recipientData} onCompleted={() => setActiveIndex(activeIndex + 1)} />
                }
                {
                    activeIndex === 3 && <Checkout onCompleted={(data) => {
                        setCompleted(true)
                    }}/> 
                }
            </div>
        </div>
    )
}

export default Main