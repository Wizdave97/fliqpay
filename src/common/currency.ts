import GBP from '../assets/gbp.png'
import EUR from '../assets/eu.png'
import USD from '../assets/usa.png'
import AUD from '../assets/aud.png'
export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    AUD = 'AUD'
}

export const currencyOptions = [
    {image: USD, text: Currency.USD, value: Currency.USD},
    {image: EUR, text: Currency.EUR, value: Currency.EUR},
    {image: GBP, text: Currency.GBP, value: Currency.GBP},
    {image: AUD, text: Currency.AUD, value: Currency.AUD}
]