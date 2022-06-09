import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DivisionActionAnswer, IncrementActionAnswer, MultiplyActionAnswer, SubstractActionAnswer } from './actions/AnswerActions';
import './App.css';

const App = () =>{
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');

  const dispatch = useDispatch();

  const Answer = useSelector((state: any) => state.Answer);

  const {answers} = Answer;

  const handleClick = (t: any) => {
    dispatch(IncrementActionAnswer(first, second, operator) as any);
    dispatch(SubstractActionAnswer(first, second, operator) as any);
    dispatch(MultiplyActionAnswer(first, second, operator) as any);
    dispatch(DivisionActionAnswer(first, second, operator) as any);
  }

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
          <button style={{color: 'white', padding:10, backgroundColor: '#61dafb', fontSize: 20, cursor: 'pointer'}} 
            onClick={handleClick}>
            Calculate
          </button>
        </div>
        <ul>
          {
            answers && answers.map((t: any) => (
              <li key={t.answer}>
                = {t.answer}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
