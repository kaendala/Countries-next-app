'use client'
import { Country } from '@/models/countrie.interface';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useState } from 'react';
import s from './DropDown.module.scss';

type DropDownProps = {
  submit: (e: Country[]) => void;
  list: Country[];
};
const DropDown = ({ list, submit }: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const [regionSelected, setRegionSelected] = useState('');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const change = (value: string) => {
    const copyList = [...list];
    let _filter = copyList.filter((element: Country) =>
      element.region.toUpperCase().includes(value.toUpperCase())
    );
    submit(_filter);
  };

  return (
    <div className={s.dropDown}>
      <div
        id="opener"
        className={s.opener} 
        onClick={() => setOpen(!open)}>
        <p>{regionSelected ? regionSelected : 'Filter by Region'}</p>
        {open ? <KeyboardArrowUp className={s.icon} /> : <KeyboardArrowDown className={s.icon} />}
      </div>
      <div className={`${s.list} ${open && s.visible} `}>
        <div
          onClick={() => {
            setOpen(false);
            setRegionSelected('');
            submit(list);
          }}>
          All
        </div>
        {regions.map((region) => (
          <div
            key={region}
            onClick={() => {
              setOpen(false);
              change(region);
              setRegionSelected(region);
            }}>
            <p>{region}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDown;
