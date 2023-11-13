'use client'
import { useCountriesContext } from '@/context/CountriesContext/CountriesContext';
import { Country } from '@/models/countrie.interface';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import DropDown from '../DropDown/DropDown';
import Search from '../Search/Search';
import s from './CountriesList.module.scss';

type CountriesListProps = {
    list: Country[];
};
 const CountriesList=({list}:CountriesListProps)=> {
     const [listFilter, setListFilter] = useState<Country[]>([...list]);
     const { updateList } = useCountriesContext()
    
    useEffect(()=>{
            updateList(list)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
        <div className={s.search}>
            <Search
                list={list}
                submit={(e) => {
                    setListFilter(e);
                }}
            />
                <DropDown list={list} submit={(e) => {
                    setListFilter(e);
                }}></DropDown>
        </div>
        <div className={s.containerCountries}>
            
            {listFilter && listFilter.length && listFilter.map((country: Country) =>
                <Card key={country.cca3} info={country}></Card>)}
        </div>
        </>
    )
}
export default CountriesList
