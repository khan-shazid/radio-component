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
    <li
      data-testid="radio"
      onClick={() => {
          handleSelection(item)
      }}
      className={styles.listItem}>
        <h3 className={styles.listItemTitle}>
            <span data-testid="radio-title-name">{item.name}</span>
            <strong data-testid="radio-title-count">{formatwithComma(item.count)}</strong>
        </h3>

        {isSelected && <div data-testid="radio-selected" className={styles.answer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.plus} onClick={() => console.log("plus clicked")}></div>
            <img src={item.imageUrl ? item.imageUrl : RADIO_DEFAULT_IMG} alt=""/>
            <div className={styles.minus} onClick={() => console.log("minus clicked")}></div>
        </div>}
    </li>
  )
}
