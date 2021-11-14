import React, {useState} from 'react';
import RADIO from '../../assets/radio.png';

export const Radio = ({}): JSX.Element => {
  return (
    <li onClick={() => {
      // setFlag(!flag);
      // console.log("flag", flag)
    }}>
        <h3>
            <span>Putin FM</span>
            <strong>66,6</strong>
        </h3>

        {<div className="answer active" onClick={(e) => e.stopPropagation()}>
            <div className="plus"></div>
            <img src={RADIO} alt=""/>
            <div className="minus"></div>
        </div>}
    </li>
  )
}
