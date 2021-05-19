import React from 'react'
import Minus from '../assets/minus.svg'
import Eq from '../assets/eq.svg'
import Mul from '../assets/mul.svg'

interface ExchangeCaveatsProps {
    rate: number;
    fee: number;
    amount: number;
    currency: string;
}

const ExchangeCaveats = () => {
    return (
        <div className='w-full flex flex-col relative py-4'>
            <div className='w-0.5 bg-light-gray h-full absolute left-9mm top-0'></div>
            <div className='flex flex-row text-sharp-gray hover:text-header-blue cursor-pointer'>
                <div className='w-20p h-20p z-10'>
                    <img src={Minus} className='w-full h-full' alt=''/>
                </div>
                <span className='mx-4 font-medium capitalize'>3.69 USD</span>
                <span className=''>Transfer fee</span>
            </div>
            <div className='flex flex-row text-sharp-gray my-6 hover:text-header-blue cursor-pointer'>
                <div className='w-20p h-20p z-10'>
                    <img src={Eq} className='w-full h-full' alt=''/>
                </div>
                <span className='mx-4 font-medium capitalize'>996.12 USD</span>
                <span className=''>Amount we'll convert</span>
            </div>
            <div className='flex flex-row text-sharp-gray hover:text-header-blue cursor-pointer'>
                <div className='w-20p h-20p z-10'>
                    <img src={Mul} className='w-full h-full' alt=''/>
                </div>
                <span className='mx-4 font-medium'>1.149</span>
                <span className=''>Guaranteed rate (1hr)</span>
            </div>
        </div> 
    )
}

export default ExchangeCaveats