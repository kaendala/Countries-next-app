
import Link from 'next/link';
import s from './Header.module.scss';
import ButtonChange from './components/ButtonChangeTheme';

const Header = () => {
  return (
    <header className={`${s.header}`}>
      <Link as={`/`} rel="prefetch" href="/">
        <p> ¿Where in the word?</p>
      </Link>
      <div className={s.button}>
        <ButtonChange/>
      </div>
    </header>
  );
};
export default Header;
