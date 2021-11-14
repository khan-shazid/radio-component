import React from 'react';
import Station from './components/Station/station';

const DATA = [
    {
      id: 1,
      name: 'Putin FM',
      count: '666',
      imageUrl: ''
    },
    {
      id: 2,
      name: 'Dribble FM',
      count: '1012',
      imageUrl: ''
    },
    {
      id: 3,
      name: 'Doge FM',
      count: '994',
      imageUrl: ''
    },
    {
      id: 4,
      name: 'Ballads FM',
      count: '871',
      imageUrl: ''
    },
    {
      id: 5,
      name: 'Maximum FM',
      count: '1722',
      imageUrl: ''
    }
];

function App() {
  return (
    <div className="App">
        <Station stations={DATA}/>
    </div>
  );
}

export default App;
