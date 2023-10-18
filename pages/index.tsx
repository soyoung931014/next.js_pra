import React, { Fragment, useEffect } from 'react';
import Header from '@/components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { VscFeedback } from 'react-icons/vsc';
import { AiOutlineShareAlt } from 'react-icons/ai';
import MapSection from '@/components/Home/MapSection';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import useStores from '@/hooks/useStores';
import Markers from '@/components/Home/Markers';
import DetailSection from '@/components/Home/DetailSection';

interface Props {
  stores: Store[];
}
// 페이지 컴포넌트의 타입이 NextPage이다.
const Home: NextPage<Props> = ({ stores }: Props) => {
  console.log(stores);
  const { initializeStores } = useStores();
  console.log(initializeStores);

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
