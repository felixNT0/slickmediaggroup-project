import { Image, Typography } from "antd";
import styles from "./BodyImage.module.css";

function BodyImage() {
  return (
    <div className={styles.bg_image_container} data-aos="fade-up">
      <Image
        alt="bg"
        src="./bg.jpg"
        preview={false}
        width={"100%"}
        height={"auto"}
      />
      <Typography.Title className={styles.image_text}>
        Watch something incredible.
      </Typography.Title>
    </div>
  );
}

export default BodyImage;
