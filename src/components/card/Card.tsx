import Group from '../../assets/icon/Group.svg';
import styles from './card.module.scss';

interface CardProps {
  title: string;
  description: string;
  // thumbnail: string;
  username: string;
  // nowUsing: number;
}

export default function Card({
  title,
  description,
  username,
}: CardProps) {
  return (
    <div className={styles.card} >
      <img className={styles.thumbnail} src="https://picsum.photos/260/140" />
      <div className={styles.article}>

        <a className={styles.content} href="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            {description}
          </p>
        </a>

        <div className={styles.metadata_container}>
          <div className={styles.user_conitainer}>
            <img className={styles.profile_image} src="card_thumb.jpg" />
            <span className={styles.username}>{username}</span>
          </div>
          <div className={styles.now_using_container}>
            <Group />
            <span className={styles.now_using}>1,000+</span>
          </div>

        </div>

        

      </div>
    </div>
  );
}