import CountriesList from '@/components/CountriesList/CountriesList';
import Header from '@/components/Header/Header';
import s from './page.module.scss';


export default async function Home() {

  const list = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3'
  ).then((res) => res.json());

  return (
    <main className={`${s.main} light`}>
      <Header></Header>
      <div className={s.content}>
        {list?.length>0 &&<CountriesList list={list}></CountriesList>}
      </div>
    </main>
  )
}
