import React, {useState} from 'react';
import styles from './style.module.css';

interface StationFooterProps {
    name?: string
}

const StationFooter = ({name}: StationFooterProps): JSX.Element => {
  return (
    <div className={styles.footer}>
        <label data-testid="footer-static">NOW PLAYING</label>
        <h2 data-testid="footer-props">{name}</h2>
    </div>
  )
}

export default StationFooter;
