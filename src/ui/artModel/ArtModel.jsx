import styles from "./ArtModel.module.css";
import tochka from "../../img/tochka.svg";
import example from "../../img/example.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArtModel = () => {
  const navigate = useNavigate();
  const artClick = () => {
    navigate("/artdetal");
  };

  const randomColor = () => {
    let hash = "#";
    for (let i = 0; i < 3; i++) {
      let randomNum = Math.random() * 10;
      const round = Math.round(randomNum);
      console.log(round);
      hash = hash + round;
    }
    return hash;
  };
  const [color, setColor] = useState(randomColor());

  randomColor();
  return (
    <button
      onClick={artClick}
      className={styles.main}
      style={{ background: color }}
    >
      <div className={styles.textDiv}>
        <p className={styles.name}>Жизнь и правление Наполеона Бонапарта </p>
        <p className={styles.category}>
          #История <img src={tochka} alt="" /> 15 минут
        </p>
      </div>
      <img className={styles.image} src={example} alt="" />
    </button>
  );
};

export default ArtModel;
