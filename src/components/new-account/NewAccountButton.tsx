import { Colors } from "../../common/Colors";
import Paths from "../../routing/Paths";
import { Link } from "react-router-dom";
import styles from "./NewAccountButton.module.css";

const NewAccountButton = () => {
  return (
    <div className="flex justify-center">
      <Link to={Paths.ADD_ACCOUNT} className="text-center">
        <button
          className="relative flex items-center justify-center w-[175px] h-[42px] rounded-[39px]"
          style={{ background: Colors.primary, color: Colors.secondary }}
        >
          <div className={styles.plusSign}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.verticalLine}></div>
          </div>
          <p className="text-sm ml-2 font-medium">Yeni Hesap Ekle</p>
        </button>
      </Link>
    </div>
  );
};

export default NewAccountButton;
