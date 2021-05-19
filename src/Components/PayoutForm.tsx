import React, { useEffect, useState } from 'react'
import Button, { Variant } from '../common/Button'
import { currencyOptions, fees } from '../common/currency'
import DropdownInputGroup from '../common/DropdownInputGroup'
import ExchangeCaveats from '../common/ExchangeCaveats'
import { useFixer } from '../hooks/useFixer'

interface PayoutFormProps {
    onCompleted: () => void;
    onCompare: () => void;
}
const PayoutForm: React.FC<PayoutFormProps> = ({onCompleted, onCompare}) => {
    const [inputAmount, setInputAmount] = useState('')
    const [convertedAmount, setConvertedAmount] = useState('')
    const [currencyInput, setCurrencyInput] = useState('')
    const [currencyOutput, setCurrencyOutput] = useState('')
    const { data } = useFixer(currencyInput)
    useEffect(() => {
        if(!data) return
        if(currencyOutput === currencyInput) {
            
        }
    }, [inputAmount, currencyInput, currencyOutput, data])
    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>One-time Payout</h1>
            <h2 className='w-full text-subheader-gray text-sm mb-6'>Send money internationally</h2>
            <DropdownInputGroup options={[currencyOptions[1]]} label='You send' onChangeInput={setInputAmount} inputValue={inputAmount} onChange={setCurrencyInput} dropdownValue={currencyInput}/>
            {(!data || !currencyOutput) && <div className='h-8 w-full'/>}
            {(data && currencyOutput) && <div className='w-full px-3'><ExchangeCaveats amount={+convertedAmount} currency={currencyOutput} rate={data?.[currencyOutput]} fee={fees[currencyOutput as keyof typeof fees]}/></div>}
            <DropdownInputGroup options={currencyOptions} disabled label='Recipient gets' dropdownValue={currencyOutput} inputValue={convertedAmount} onChangeInput={setConvertedAmount} onChange={setCurrencyOutput}/>
            <div className='w-full grid grid-cols-2 gap-3 mt-6'>
                <Button variant={Variant.outline} label='Compare Rates' onClick={onCompare} />
                <Button disabled={!inputAmount || !convertedAmount || !currencyOutput || !currencyOutput} variant={Variant.fill} label='Continue' onClick={onCompleted}/>
            </div>
        </div>
    )
}

export default PayoutForm