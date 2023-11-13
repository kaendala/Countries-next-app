'use client'
import { Country } from '@/models/countrie.interface';
import { FC, ReactNode, createContext, useContext, useState } from 'react';

type ValueContext = {
    list: Country[],
    updateList: (list: Country[]) => void
}
export const CountriesContext = createContext<ValueContext>({ list: [], updateList: () => { } })
export const useCountriesContext = () => useContext(CountriesContext)
export const CountriesProvider:FC<{ children: ReactNode }> = ({ children }) => {
    const [list, setList] = useState<Country[]>([])
    const updateList = (list:Country[]) => {
        setList(list)
    }
    return <CountriesContext.Provider value={{ list, updateList }}>{children}</CountriesContext.Provider>
}

