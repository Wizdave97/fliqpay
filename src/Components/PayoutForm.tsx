import React from 'react'
import Button, { Variant } from '../common/Button'
import ExchangeCaveats from '../common/ExchangeCaveats'

interface PayoutFormProps {
    onCompleted: () => void;
    onCompare: () => void;
}
const PayoutForm: React.FC<PayoutFormProps> = ({onCompleted, onCompare}) => {
    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>One-time Payout</h1>
            <h2 className='w-full text-subheader-gray text-sm mb-6'>Send money internationally</h2>
            <div className='w-full px-3'><ExchangeCaveats/></div>
            <div className='w-full grid grid-cols-2 gap-3'>
                <Button variant={Variant.outline} label='Compare Rates' onClick={onCompare} />
                <Button variant={Variant.fill} label='Continue' onClick={onCompleted}/>
            </div>
        </div>
    )
}

export default PayoutForm