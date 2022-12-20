import { Bars } from "react-loader-spinner";
import styles from "./LoadingScreen.module.css";
function LoadingScreen() {
  return (
    <div className={styles.loading_screen}>
      <Bars
        height="100"
        width="100"
        color="#4096ff"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
}

export default LoadingScreen;
