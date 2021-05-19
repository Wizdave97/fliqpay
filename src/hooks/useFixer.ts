import { useEffect, useMemo, useState } from "react"
import { Currency } from "../common/currency"
const API_KEY = '1c0b8b07e56db22c656666e2c174ea54'
const baseURL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`
const currencies = Object.values(Currency)

export const useFixer = (baseCurrency: string) => {
    const [data, setData] = useState<null | {[key: string]: string}>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        if(!currencies.includes(baseCurrency as Currency)) return
        const symbols = currencies.filter((currency) => currency !== baseCurrency).join(',')
        setLoading(true)
        fetch(`${baseURL}&base=${baseCurrency}&symbols=${symbols}`)
        .then(res => res.json())
        .then(data => {
            setData(data.rates)
            setLoading(false)
            setError(false)
        })
        .catch(() => {
            setLoading(false)
            setError(true)
        })
    }, [baseCurrency])

    return useMemo(() => ({
        loading,
        data,
        error
    }), [loading, error, data])
}