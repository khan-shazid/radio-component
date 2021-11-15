import React from 'react';
import Station from './components/Station/station';
import { SAMPLE_DATA } from './constants';

function App() {
  return (
    <div className="App">
        <Station stations={SAMPLE_DATA}/>
    </div>
  );
}

export default App;
