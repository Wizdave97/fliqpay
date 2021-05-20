import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommonInput from '../CommonInput'


describe('<CommonInput/>', () => {
    it('should render correctly', async () => {

        render(<CommonInput label='email' onChange={jest.fn()} value=''/>)

        const input =  await screen.findByText('email')

        expect(input).toBeInTheDocument()
    })

    it('should change values correctly', async () => {
        const onChange = jest.fn()
        render(<CommonInput label='email' onChange={onChange} value=''/>)
        const label =  await screen.findByText('email')
        const input = label.parentElement!.querySelector('input')

        fireEvent.change(input!, { target: { value: 'example@email.com'}})

        expect(onChange).toBeCalled()
    })

    it('should render error when defined', async () => {
        render(<CommonInput label='email' onChange={jest.fn()} value='' error='invalid'/>)

        const error = await screen.findByText('invalid')

        expect(error).toBeInTheDocument()
    })
})
