'use client';
import { useCountriesContext } from '@/context/CountriesContext/CountriesContext';
import { Country } from '@/models/countrie.interface';
import s from './Borders.module.scss';

type Bordersprops = {
    codeList: string[];
};
const Borders = ({ codeList }: Bordersprops) => {
    const { list } = useCountriesContext()
    const names= codeList.map((code)=>list.find((country: Country)=> country.cca3===code)?.name.common || code)
    return (
        <div className={s.borders}>{names.map((name, index)=>(
            <div key={`${name}-${index}`} className={s.name}>{name}</div>
        ))}
        </div>
    );
};

export default Borders;
