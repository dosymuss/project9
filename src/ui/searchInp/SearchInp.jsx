import searchIcon from "../../img/searchIcon.svg";
import styles from './SearchInp.module.css';

const SearchInp = () => {
  return (
    <div className={styles.main}>
      <img src={searchIcon} alt="" />
      <input className={styles.input} type="text" placeholder="Поиск статей"/>
    </div>
  );
};

export default SearchInp
