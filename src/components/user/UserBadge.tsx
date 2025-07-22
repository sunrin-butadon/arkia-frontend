import styles from './userBadge.module.scss';

interface UserBadgeProps {
  username: string;
}

export default function UseerBadge({username}: UserBadgeProps) {

  return (
    <div className={styles.user_conitainer}>
      <img className={styles.profile_image} src="card_thumb.jpg" />
      <span className={styles.username}>{username}</span>
    </div>
  );
}