import React, {useState} from 'react';
import RADIO_DEFAULT_IMG from '../../assets/radio.png';
import styles from './style.module.css';
import { StationModel } from '../../models';

interface RadioProps {
    item: StationModel,
    isSelected: boolean,
    handleSelection: (id: any) => void
}

export const Radio = ({ item, isSelected, handleSelection }: RadioProps): JSX.Element => {
  // const {}
  return (
    <li onClick={() => {
        handleSelection(item)
    }}
    className={styles.listItem}>
        <h3 className={styles.listItemTitle}>
            <span>{item.name}</span>
            <strong>{item.count}</strong>
        </h3>

        {isSelected && <div className={styles.answer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.plus}></div>
            <img src={item.imageUrl ? item.imageUrl : RADIO_DEFAULT_IMG} alt=""/>
            <div className={styles.minus}></div>
        </div>}
    </li>
  )
}
