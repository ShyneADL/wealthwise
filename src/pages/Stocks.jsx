import React from 'react';
import { Navbar } from '../components'
import StocksTable from '../components/StocksTable';
import styles from '../style';

const Stocks = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg__main ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <StocksTable />
      </div>
    </div>
    </div>
  );
}

export default Stocks;
