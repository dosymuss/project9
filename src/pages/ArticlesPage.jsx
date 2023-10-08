import SearchPanel from "../components/searchPanel/SearchPanel";
import styles from "../styles/ArtPage.module.css";
import ArtModel from "../ui/artModel/ArtModel";
import TitleText from "../ui/layout/titleText/TitleText";

const ArticlePage = () => {
  return (
    <div className={styles.main}>
      <div>
        <TitleText />
        <div className={styles.searchAndContent}>
          <SearchPanel />
        <div className={styles.contentDiv}>
          <ArtModel />
          <ArtModel />
          <ArtModel />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
