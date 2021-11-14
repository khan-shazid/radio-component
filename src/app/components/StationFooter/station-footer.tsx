import React, {useState} from 'react';
import styles from './style.module.css';

interface StationFooterProps {
    name?: string
}

const StationFooter = ({name}: StationFooterProps): JSX.Element => {
  return (
    <div className={styles.footer}>
        <label>NOW PLAYING</label>
        <h2>{name}</h2>
    </div>
  )
}

export default StationFooter;
