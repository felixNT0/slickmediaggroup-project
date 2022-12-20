import { Card, Image } from "antd";
import { useRouter } from "next/router";
import styles from "./MovieCard.module.css";

const { Meta } = Card;

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
}

function MovieCard({ title, description, imageUrl, id }: Props) {
  const router = useRouter();
  return (
    <Card
      hoverable
      onClick={() => router.push(`/${id}`)}
      className={styles.card_container}
      cover={
        <Image
          alt={title}
          src={imageUrl}
          preview={false}
          className={styles.movie_card_image}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
}

export default MovieCard;
