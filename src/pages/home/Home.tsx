import styles from './home.module.scss';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import CardSection from '../../components/card/CardSection';

import { getDatasetsList } from '../../api/datasets/datasets';
import { getRagsList } from '../../api/rags/rags';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
	const { data:datasetsListData, isLoading:datasetsListIsLoading, error:datasetsListError } = useQuery({
    queryKey: ["datasets","list"],
    queryFn: getDatasetsList,
  });

	const {data:ragsListData, isLoading:ragsListIsLoading, error:ragsListError} = useQuery({
		queryKey: ["rags","list"],
		queryFn: getRagsList,
	});

  return (
    <div className={styles.home}>
      <Header />
			<Banner />
			<CardSection title='인기 데이터세트' data={datasetsListData}/>
			<CardSection title='인기 RAG' data={ragsListData}/>
    </div>
  );
}
