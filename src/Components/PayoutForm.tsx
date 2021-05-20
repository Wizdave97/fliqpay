import React, { useEffect, useState } from 'react'
import Button, { Variant } from '../common/Button'
import { currencyOptions, fees } from '../common/currency'
import DropdownInputGroup from '../common/DropdownInputGroup'
import ExchangeCaveats from '../common/ExchangeCaveats'
import { useFixer } from '../hooks/useFixer'

export type PayOutDataProps = {
    currencyInput: string;
    currencyOutput: string;
    inputAmount: string;
    convertedAmount: string;
}

interface PayoutFormProps {
    onCompleted: (data: PayOutDataProps) => void;
    onCompare: () => void;
    initData: PayOutDataProps;
}
const PayoutForm: React.FC<PayoutFormProps> = ({onCompleted, onCompare, initData}) => {
    const [inputAmount, setInputAmount] = useState(initData.inputAmount)
    const [convertedAmount, setConvertedAmount] = useState(initData.convertedAmount)
    const [currencyInput, setCurrencyInput] = useState(initData.currencyInput)
    const [currencyOutput, setCurrencyOutput] = useState(initData.currencyOutput)
    const { data } = useFixer(currencyInput)
    useEffect(() => {
        if(!data || !currencyInput || !currencyOutput || !(+inputAmount)) {
            setConvertedAmount('')
            return
        }
        if (+inputAmount <= fees[currencyInput as keyof typeof fees]) {
            setConvertedAmount('')
            return
        }
        else {
            const amountToBeConverted = (+inputAmount - fees[currencyInput as keyof typeof fees]) * +data[currencyOutput as keyof typeof data]
            setConvertedAmount(`${new Intl.NumberFormat().format(+amountToBeConverted.toFixed(2))}`)
        }
    }, [inputAmount, currencyInput, currencyOutput, data])
    
    return (
        <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
            <h1 className='w-full text-header-blue text-lg mb-1'>One-time Payout</h1>
            <h2 className='w-full text-subheader-gray text-sm mb-6'>Send money internationally</h2>
            <DropdownInputGroup disableDropdown={false} options={[currencyOptions[1]]} label='You send' onChangeInput={setInputAmount} inputValue={inputAmount} onChange={setCurrencyInput} dropdownValue={currencyInput}/>
            {(!data || !currencyOutput) && <div className='h-8 w-full'/>}
            {(data && currencyOutput) && <div className='w-full px-3'><ExchangeCaveats amount={+inputAmount > fees[currencyInput as keyof typeof fees]  ? +inputAmount - fees[currencyInput as keyof typeof fees] : 0} currency={currencyInput} rate={data?.[currencyOutput]} fee={fees[currencyInput as keyof typeof fees]}/></div>}
            <DropdownInputGroup inputType='string' disableDropdown={!currencyInput || !inputAmount} options={currencyOptions.filter((option) => option.value !== currencyInput)} disabled label='Recipient gets' dropdownValue={currencyOutput} inputValue={convertedAmount} onChangeInput={setConvertedAmount} onChange={setCurrencyOutput}/>
            <div className='w-full grid grid-cols-2 gap-3 mt-6'>
                <Button variant={Variant.outline} label='Compare Rates' onClick={onCompare} />
                <Button disabled={!inputAmount || !convertedAmount || !currencyOutput || !currencyOutput} variant={Variant.fill} label='Continue' 
                onClick={() => onCompleted({currencyInput, currencyOutput, inputAmount, convertedAmount})}/>
            </div>
        </div>
    )
}

export default PayoutForm