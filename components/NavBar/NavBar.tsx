import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.header_logo} onClick={() => router.push("/")}>
        MyMovieApp
      </div>
    </div>
  );
}

export default NavBar;
