import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DropdownInputGroup from '../DropdownInputGroup'
import { Currency, currencyOptions } from '../currency'


describe('<DropdownInputGroup/>', () => {

    it('should render correctly', async () => {
        render(<DropdownInputGroup inputValue='1000' label='You send' onChange={jest.fn()} onChangeInput={jest.fn()} dropdownValue={Currency.EUR}  options={currencyOptions} disableDropdown={false}/>)

        const label = await screen.findByText('You send')
        const input = await screen.findByDisplayValue('1000')
        const dropdown = await screen.findByText(Currency.EUR)

        expect(label).toBeInTheDocument()
        expect(input).toBeInTheDocument()
        expect(dropdown).toBeInTheDocument()
    })

    it('should change values correctly', async () => {

        const onChange = jest.fn()
        const onChangeInput = jest.fn()
        render(<DropdownInputGroup inputValue='1000' label='You send' onChange={onChange} onChangeInput={onChangeInput} dropdownValue={Currency.EUR}  options={currencyOptions} disableDropdown={false}/>)
        const input = await screen.findByDisplayValue('1000')
        const dropdown = await screen.findByTestId('dropdown-handle')

        fireEvent.change(input, { target: { value: '200'}})

        expect(onChangeInput).toHaveBeenCalled()

        fireEvent.click(dropdown)

        const usd = await screen.findByText(Currency.USD)

        fireEvent.click(usd)

        expect(onChange).toHaveBeenCalled()

    })
})