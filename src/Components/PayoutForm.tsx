import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
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
    rate: string;
    fees: string;
}

interface PayoutFormProps {
    onCompleted: (data: PayOutDataProps) => void;
    initData: PayOutDataProps;
}
const PayoutForm: React.FC<PayoutFormProps> = ({ onCompleted, initData }) => {
    const [inputAmount, setInputAmount] = useState(initData.inputAmount)
    const [convertedAmount, setConvertedAmount] = useState(initData.convertedAmount)
    const [currencyInput, setCurrencyInput] = useState(initData.currencyInput)
    const [currencyOutput, setCurrencyOutput] = useState(initData.currencyOutput)
    const [compare, setCompare] = useState(false)
    const { data } = useFixer(currencyInput)
    useEffect(() => {
        if (!data || !currencyInput || !currencyOutput || !(+inputAmount)) {
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
        <>
            <div className='rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col'>
                <h1 className='w-full text-header-blue text-lg mb-1'>One-time Payout</h1>
                <h2 className='w-full text-subheader-gray text-sm mb-6'>Send money internationally</h2>
                <DropdownInputGroup disableDropdown={false} options={[currencyOptions[1]]} label='You send' onChangeInput={setInputAmount} inputValue={inputAmount} onChange={setCurrencyInput} dropdownValue={currencyInput} />
                {(!data || !currencyOutput) && <div className='h-8 w-full' />}
                {(data && currencyOutput) && <div className='w-full px-3'><ExchangeCaveats amount={+inputAmount > fees[currencyInput as keyof typeof fees] ? +inputAmount - fees[currencyInput as keyof typeof fees] : 0} currency={currencyInput} rate={data?.[currencyOutput]} fee={fees[currencyInput as keyof typeof fees]} /></div>}
                <DropdownInputGroup inputType='string' disableDropdown={!currencyInput || !inputAmount} options={currencyOptions.filter((option) => option.value !== currencyInput)} disabled label='Recipient gets' dropdownValue={currencyOutput} inputValue={convertedAmount} onChangeInput={setConvertedAmount} onChange={setCurrencyOutput} />
                <div className='w-full grid grid-cols-2 gap-3 mt-6'>
                    <Button variant={Variant.outline} label='Compare Rates' onClick={() => setCompare(true)} />
                    <Button disabled={!inputAmount || !convertedAmount || !currencyOutput || !currencyOutput} variant={Variant.fill} label='Continue'
                        onClick={() => onCompleted({ currencyInput, currencyOutput, inputAmount, convertedAmount, fees: fees[currencyInput as keyof typeof fees].toString(), rate: data?.[currencyOutput as keyof typeof data]! })} />
                </div>
            </div>
            <ReactModal ariaHideApp={false} isOpen={compare}  onRequestClose={() => setCompare(false)} className='w-full absolute top-1/4 left-1/4 z-20 md:w-1/2 py-12 px-8 outline-hidden bg-white border-0 shadow-md'>
                <div className='w-full flex flex-col bg-white'>
                    <h1 className='w-full text-header-blue text-lg mb-1 text-center'>Compare rates of top merchants</h1>
                    <div className='w-full p-4 grid grid-cols-4 my-2 gap-4 place-content-center'>
                        <div className='text-lg text-contrasty-gray'>Merchant</div>
                        <div className='text-lg text-contrasty-gray mx-2'>USD</div>
                        <div className='text-lg text-contrasty-gray mx-2'>GBP</div>
                        <div className='text-lg text-contrasty-gray mx-2'>AUD</div>
                    </div>
                    <div className='w-full p-4 grid grid-cols-4 my-2 gap-4 place-content-center'>
                        <div className='text-lg font-medium text-header-blue'>Fliqpay</div>
                        <div className='text-sm text-sharp-gray mx-2 align-middle'>{data?.['USD']}</div>
                        <div className='text-sm text-sharp-gray mx-2 align-middle'>{data?.['GBP']}</div>
                        <div className='text-sm text-sharp-gray mx-2 align-middle'>{data?.['AUD']}</div>
                    </div>
                    <div className='w-full p-4 grid grid-cols-4 my-2 gap-4 place-content-center'>
                        <div className='text-lg font-medium text-header-blue'>Wise</div>
                        <div className='text-sm text-sharp-gray mx-2 align-middle'>1.243</div>
                        <div className='text-sm text-sharp-gray mx-2 align-middle'>2.442</div>
                        <div className='text-sm text-sharp-gray mx-2 align-middle'>2.567</div>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default PayoutForm