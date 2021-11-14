import React, {useState} from 'react';

import styles from './style.module.css';

import { formatwithComma } from '../../utils';
import RADIO_DEFAULT_IMG from '../../assets/radio.png';
import { StationModel } from '../../models';

interface RadioProps {
    item: StationModel,
    isSelected: boolean,
    handleSelection: (id: any) => void
}

export const Radio = ({ item, isSelected, handleSelection }: RadioProps): JSX.Element => {
  return (
    <li onClick={() => {
        handleSelection(item)
    }}
    className={styles.listItem}>
        <h3 className={styles.listItemTitle}>
            <span>{item.name}</span>
            <strong>{formatwithComma(item.count)}</strong>
        </h3>

        {isSelected && <div className={styles.answer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.plus}></div>
            <img src={item.imageUrl ? item.imageUrl : RADIO_DEFAULT_IMG} alt=""/>
            <div className={styles.minus}></div>
        </div>}
    </li>
  )
}
