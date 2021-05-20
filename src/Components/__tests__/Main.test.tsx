import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../Main'

jest.mock('../../hooks/useFixer', () => ({
    useFixer: () => ({
        data: {USD: '1.23', AUD: '0.856', GBP: '0.783'}
    })
}))

describe('<Main/>', () => {
    it('should flow correctly', async () => {
        render(<Main/>)

        const dropdownInputs = await screen.findAllByTestId('dropdown-input')

        fireEvent.change(dropdownInputs[0], { target: { value: '1000'}})

        const dropdownHandles = await screen.findAllByTestId('dropdown-handle')

        fireEvent.click(dropdownHandles[1])

        const usd = await screen.findByText('USD')

        fireEvent.click(usd)

        const conttinueToForm = await screen.findByText('Continue')

        fireEvent.click(conttinueToForm)

        const inputs = await screen.findAllByTestId('common-input')

        expect(inputs).toHaveLength(3)

        fireEvent.change(inputs[0], { target: { value: 'example@gmail.com'}})

        fireEvent.change(inputs[1], { target: { value: 'Elon Musk'}})

        fireEvent.change(inputs[2], { target: { value: '4404403'}})

        const continueReview = await screen.findByText('Continue')

        fireEvent.click(continueReview)

        await waitFor(async () => expect(await screen.findByText('Review details of your transfer')).toBeInTheDocument())

        const continueToCheckout = await screen.findByText('Continue')

        fireEvent.click(continueToCheckout)

        await waitFor(async () => expect(await screen.findByText('Your Card Details')).toBeInTheDocument())

        const cardInputs = await screen.findAllByTestId('common-input')

        fireEvent.change(cardInputs[0], { target: { value: '4578985634567898'}})

        fireEvent.change(cardInputs[1], { target: {value: '01/23'}})

        fireEvent.change(cardInputs[2], { target: { value: '2024'}})

        fireEvent.change(cardInputs[3], { target: { value: '343'}})

        const complete = await screen.findByText('Complete transaction')

        fireEvent.click(complete)

        await waitFor(async () => expect(await screen.findByText('Congratulations, the transaction was successful')).toBeInTheDocument())

    })
})