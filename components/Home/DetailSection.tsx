import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from '../../styles/detail.module.scss';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import useSWR from 'swr';
import { Store } from '@/types/store';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);

  console.log(currentStore);
  return (
    <div className={styles.detailSection}>
      <div className={styles.header}>
        <button className={styles.arrowButton} disabled>
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore ? (
          <p className={styles.title}>매장을 선택해주세요</p>
        ) : (
          '매장임ㅆ음'
        )}
      </div>
    </div>
  );
};

export default DetailSection;

// p : 문단(paragraph) 텍스트 절을 기재할때 사용된다.

//  : div랑 거의 같다고 보면 된다. div는 세션 나누기가 목적이고, p는 글자 표현이 목적이다.
