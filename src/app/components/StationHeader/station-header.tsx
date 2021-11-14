import React, {useState} from 'react';
import styles from './style.module.css';

const StationHeader = ({}): JSX.Element => {
  return (
      <header data-testid="header" className={styles.stationHeader}>
          <div className={styles.back}></div>
          <div className={styles.title}>STATIONS</div>
          <div className={styles.signOut}></div>
      </header>
  )
}

export default StationHeader;
