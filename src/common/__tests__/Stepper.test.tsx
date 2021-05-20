import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Stepper from '../Stepper'

describe('<Stepper/>', () => {

    it('should render correctly', async () => {
        render(<Stepper steps={['Amount', 'Recipient', 'Review', 'Pay']} activeIndex={1}/>)

        const dot = await screen.findByTestId('dot')

        expect(dot.style.left).toContain('calc(33.3333')
    })
})