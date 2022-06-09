import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

const App = () =>{
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');

  const Answer = useSelector((state: any) => state.Answer);

  const {answers} = Answer;

  return (
    <div className="App">
      <div className="App-header">
        <div className='App-title'>
          Calulator
        </div>
        <div>
          <input
            style={{padding: 12, marginRight: 5, border: '1px solid #61dafb'}}
            placeholder='type first value' type="text" onChange={(e) => setFirst(parseInt(e.target.value))}
            />
            <input
            style={{padding: 12, marginRight: 5, border: '1px solid #61dafb'}}
            placeholder='type second value' type="text" 
            onChange={(e) => setSecond(parseInt(e.target.value))}
            />
            <input
            style={{padding: 12, marginRight: 5, border: '1px solid #61dafb'}}
            placeholder='type operator' type="text" 
            onChange={(e) => setOperator(e.target.value)}
            />
          <button style={{color: 'white', padding:10, backgroundColor: '#61dafb', fontSize: 20, cursor: 'pointer'}}>
            Calculate
          </button>
        </div>
        {first}
        {second}
        {operator}
        <ul>
          <li>
            = 10
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
