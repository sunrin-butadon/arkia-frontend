
import UseerBadge from '../user/UserBadge';

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
      <a style={{width:260}} href=''><img className={styles.thumbnail} src="card_thumb.jpg" /></a>
      <div className={styles.article}>

        <a className={styles.content} href="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            {description}
          </p>
        </a>

        <div className={styles.metadata_container}>

          <UseerBadge username={username} />

          
          <div className={styles.now_using_container}>
            <Group style={{color:"#949494"}} />
            <span className={styles.now_using}>1,000+</span>
          </div>

        </div>

        

      </div>
    </div>
  );
}