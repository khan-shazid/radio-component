import React, { useState } from 'react';

export default function useStateTutorial() {
    const [{ count, count2 }, setCount] = useState({count: 10, count2: 20});

    return (
      <div>
        <button onClick={() => setCount(currentState => ({
          ...currentState,
          count: currentState.count + 1
        }))}>+</button>
        <button onClick={() => setCount(currentState => ({
          ...currentState,
          count2: currentState.count2 + 1
        }))}>+</button>
        <div>Count {count}</div>
        <div>Count {count2}</div>
      </div>
    )
}
