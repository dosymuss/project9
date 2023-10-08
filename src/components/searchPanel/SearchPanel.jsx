import { Link } from "react-router-dom";
import artExitImg from "../../img/artExit.svg";

import styles from "./SearchPanel.module.css";
import SearchInp from "../../ui/searchInp/SearchInp";
import FilterBtn from "../../ui/filterBtn/FilterBtn";

const SearchPanel = () => {
  return (
    <div className={styles.main}>
      <Link to={"/"} className={styles.exit}>
        <img src={artExitImg} alt="" />
        <p>Все статьи</p>
      </Link>
      <div className={styles.searchAndFilter}>
        <SearchInp/>
        <FilterBtn/>
      </div>
    </div>
  );
};

export default SearchPanel;
