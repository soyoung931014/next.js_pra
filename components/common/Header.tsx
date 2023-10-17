import Image from 'next/image';
import React from 'react';
import logo from '@/public/google.png';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';

interface Props {
  rightElements?: React.ReactElement[];
}
const Header = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image
            src={logo}
            alt="img"
            width={110}
            height={50}
            placeholder="blur"
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default Header;
