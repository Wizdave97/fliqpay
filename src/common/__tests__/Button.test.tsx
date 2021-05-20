import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button, { Variant } from '../Button'
import '@testing-library/jest-dom/extend-expect'


describe('<Button/>', () => {
    it('should render correctly', async () => {
        render(<Button onClick={jest.fn()} label='save' variant={Variant.fill}/>)

        const button = await screen.findByText('save')

        expect(button).toBeInTheDocument()
    })

    it('should click when disabled is false', async () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick} label='save' variant={Variant.fill}/>)

        const button = await screen.findByText('save')

        fireEvent.click(button)

        expect(onClick).toBeCalled()
    })

    it('should have opacity class when diabled', async () => {
        render(<Button onClick={jest.fn()} label='save' variant={Variant.fill} disabled/>)

        const button = await screen.findByRole('button')

        expect(button).toHaveClass('opacity-60')
    })
})