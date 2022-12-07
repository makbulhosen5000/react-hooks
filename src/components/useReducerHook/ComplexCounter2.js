import React, { useReducer } from 'react';

const initialState1 = 0 ;
const initialState2 = 5 ;
const reducer=(state,action)=>{
    
  switch(action){
    case 'increment':
      return state + 1;  
    case 'decrement':
      return state - 1;
    case 'reset':
      return state = 0 ;
    default:
      return state;
  }

}
function ComplexCounter2() {

  const [count1,dispatch1] = useReducer(reducer,initialState1);
  const [count2,dispatch2] = useReducer(reducer,initialState2);
  
  return (
      <div>
        <div>
        <h1>Count1 = {count1}</h1>
        <button type="button" onClick={()=>dispatch1('increment')} disabled={count1 === 100 ? true:false}>Increment</button>
        <button type="button" onClick={()=>dispatch1('decrement')} disabled={count1 === 0 ? true:false}>Decrement</button>
        <button type="button" onClick={()=>dispatch1('reset')}>Reset</button>
        </div>
        <div>
        <h1>Count2 = {count2}</h1>
        <button type="button" onClick={()=>dispatch2('increment')} disabled={count2 === 100 ? true:false}>increment2</button>
        <button type="button" onClick={()=>dispatch2('decrement')} disabled={count2 === 0 ? true:false}>Decrement2</button>
        <button type="button" onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
      </div>
  )
}

export default ComplexCounter2;

