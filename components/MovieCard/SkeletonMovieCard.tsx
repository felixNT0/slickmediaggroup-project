import { Skeleton } from "antd";
import styles from "./MovieCard.module.css";

function SkeletonMovieCard() {
  return (
    <div className={styles.card_container}>
      <Skeleton.Image active className={styles.movie_card_image} />
      <Skeleton active />
    </div>
  );
}

export default SkeletonMovieCard;
