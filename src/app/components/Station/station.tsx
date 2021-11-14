import React, {useState} from 'react';
import './style.css';

import RADIO from '../../assets/radio.png';
// import { TodoActions } from 'app/actions/todos';
import { Radio } from '../Radio/radio';
// import { TodoModel } from 'app/models/TodoModel';

// export namespace RadioContainer {
  // export interface Props {
    // todos: TodoModel[];
    // actions: TodoActions;
//   }
// }

const handlePlusClick = (e: any) => {
  // e.stopPropagation();
  console.log("handlePlusClick called")
}

export const Station = (): JSX.Element => {
  const [flag, setFlag] = useState(false);

  return (
      <div className="station-container">

          <header className="station-header">
              <div className="back"></div>
              <div className="title">STATIONS</div>
              <div className="sign-out"></div>
          </header>

          <ul className="accordion-list">

              <Radio />

          </ul>

          <div className="footer">
              <img src={require('../../assets/dribble-logo.png')} alt=""/>
          </div>

      </div>
  );
};
