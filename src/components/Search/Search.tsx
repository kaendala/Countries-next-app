import { Country } from '@/models/countrie.interface';
import { Search as SearchIcon } from '@mui/icons-material';
import s from './Search.module.scss';

type SearchProps = {
  submit: (e: Country[]) => void;
  list: Country[];
};
const Search = ({ list, submit }: SearchProps) => {
  const change = (value: string) => {
    const copyList = [...list];
    let _filter = copyList.filter((element: Country) =>
      element.name.common.toUpperCase().includes(value.toUpperCase())
    );
    submit(_filter);
  };

  return (
    <div className={s.search}>
      <SearchIcon className={s.icon}/>
      <input
        className={s.input}
        placeholder="Search for a country..."
        id="inputSearch"
        onChange={(e) => change(e.currentTarget.value)}
      />
    </div>
  );
};
export default Search;
