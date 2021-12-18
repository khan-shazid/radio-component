import React from 'react';
import Station from './components/Station/station';
import { SAMPLE_DATA } from './constants';

import UseStateTutorial from './usestate-tutorial';

// function App() {
//   return (
//     <div className="App">
//         <Station stations={SAMPLE_DATA}/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
        <UseStateTutorial/>
    </div>
  );
}

export default App;
