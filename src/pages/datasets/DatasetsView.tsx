import UserBadge from '../../components/user/UserBadge';
import Header from '../../components/header/Header';
import Chip from '../../components/chip/Chip';
import GroupIcon from '../../assets/icon/Group.svg';
import BookmakIcon from '../../assets/icon/Bookmark.svg';

import styles from './datasetsView.module.scss';


import { useParams } from 'react-router-dom';


export default function Datasets() {
  const { datasetId } = useParams<{ datasetId: string }>();

  return (
    <div className={styles.datasetsView}>
      <Header />
      <div className={styles.article}>
        <UserBadge username='asdf'/>
        <div className={styles.title_container}>
          <div className={styles.chip_group}>
            <Chip label='1,000' isColorful={true} iconComponent={<GroupIcon style={{ color: '#FF477E' }}/>} />
            <Chip label='3,000' isColorful={true} iconComponent={<BookmakIcon style={{ color: '#FF477E' }}/>} />
            <Chip label='3,000' isColorful={false} />
          </div>
          <h1 className={styles.title}>Title, Lorem ipsum dolor sit amet consectetur. Risus mauris pharetra enim sit sed vel amet potenti. Nunc mauris elit ut diam. Risus fames volutpat dui est odio sed est. Sagittis mauris diam viverra non bibendum sit est euismod amet.</h1>
        </div>
        <p className={styles.description}>Description, Lorem ipsum dolor sit amet consectetur. Vestibulum urna consectetur a suspendisse non tempus velit neque accumsan. Leo dignissim eu tempor pellentesque. Pulvinar ac pellentesque vitae bibendum mi quam dignissim velit. Diam mauris adipiscing dignissim mauris congue.</p>

      </div>

    </div>
  );
}