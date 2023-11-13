
import Borders from '@/components/Borders/Borders';
import { DetailContrie } from '@/models/countrie.interface';
import { ArrowRightAlt } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.scss';

type DetailPageProps = {
  params: {
    id: string;
  };
};

const DetailPage =  async ({ params: { id } }: DetailPageProps) => {

  if (!id) {
    return null;
  }
  const detail: DetailContrie = await fetch(`https://restcountries.com/v3.1/alpha/${id}` )
  .then((res) =>res.json())
  .then((res) =>  res[0])

  return (
    <>
    {detail &&
    <div className={s.detail}>
      <Link as={`/`} rel="prefetch" href="/">
        <button className={s.button}>
          <ArrowRightAlt className={s.arrow} /> Back 
        </button>
      </Link>
      {detail && (
        <div className={s.container}>
          <div className={s.containerImage}>
            <Image
              width="100"
              height="100"
              src={detail.flags?.svg}
              alt={detail.flags?.alt}
              className={s.image}
            />
          </div>
          <div className={s.infoContainer}>
            <p className={s.name}>{detail.name?.common}</p>
            <div className={s.description}>
              <div className={s.column}>
                <p>
                  <b>Native Name: </b>
                  {Object.values(detail.name?.nativeName)[0].official}
                </p>
                <p>
                  <b>Population: </b>
                      {detail.population?.toLocaleString('en-US')}
                </p>
                <p>
                  <b>Region: </b>
                  {detail.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {detail.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {detail.capital}
                </p>
              </div>
              <div className={s.column}>
                <p>
                  <b>Top Level Domain: </b>
                  {detail.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {Object.entries(detail.currencies).map(([key, value]) => (
                    <span key={key}>{value.name}</span>
                  ))}
                </p>
                <p>
                  <b>Languges: </b>
                  {Object.entries(detail.languages).map(([key, value]) => (
                    <span key={key}>{value + ' '}</span>
                  ))}
                </p>
              </div>
            </div>
              {detail.borders?.length > 0 &&
              <div className={s.borders}>
                <b>Border Countries:</b>
                 <Borders codeList={detail.borders} />  
              </div>}
          </div>
        </div>
      )}
    </div>}
    </>
  );
};

export default DetailPage;
