'use client';
import { Countrie } from '@/models/countrie.interface';
import Image from 'next/image';
import Link from 'next/link';
import s from './Card.module.scss';

type Cardprops = {
  info: Countrie;
};
const Card = ({ info }: Cardprops) => {
  return (
    <Link as={`/detail/${info.cca3}`} rel="prefetch" href="/detail/[id]">
      <div className={s.card}>
        <Image
          width="100"
          height="100"
          src={info.flags?.svg}
          alt={info.flags?.alt}
          className={s.image}
        />
        <div className={s.description}>
          <p className={s.name}>{info.name?.common}</p>
          <div className={s.info}>
            <p>
              <span>Population:</span> {info.population?.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {info.region}
            </p>
            <p>
              <span>Capital:</span> {info.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
