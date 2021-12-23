import React from 'react';
import Station from './components/Station/station';
import { SAMPLE_DATA } from './constants';

import UseStateTutorial from './usestate-tutorial';
import UseEffectTutorial from './useeffect-tutorial';

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
        <UseEffectTutorial/>
    </div>
  );
}

export default App;
