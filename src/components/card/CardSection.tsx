import TrendingIcon from '../../assets/icon/Trending.svg';
import RightArrowIcon from '../../assets/icon/RightArrow.svg';
import styles from './cardSection.module.scss';
import Card from './Card';

interface CardSectionProps {
  title: string;
  data ?: any[];
}


export default function CardSection({
  title,
  data
}: CardSectionProps) {



  return (
    <div className={styles.cardSection}>

      <div className={styles.header_container}>
        <div className={styles.title_container}>
          <TrendingIcon width={32} height={32}/>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <a className={styles.more_container} href=''>
          <span className={styles.more}>더 찾아보기</span>
          <RightArrowIcon width={18} height={18} />
        </a>
      </div>
      
      <div className={styles.grid_container}>
        {data?.slice(0, 5).map((dataset) => (
          <Card
            key={dataset.id}
            title={dataset.name}
            description={dataset.description}
            username={dataset.username}
          />
        ))}
      </div>

    </div>
  );
}