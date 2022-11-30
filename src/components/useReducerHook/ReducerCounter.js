import React, { useReducer } from 'react'

const initialState = 0;
const reducer=(state,action)=>{
    
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return  0;
    default:
      return state;
  }

}
function ReducerCounter() {

  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h1>Count = {count}</h1>
        <button type="button" onClick={()=>dispatch('increment')} disabled={count === 10 ? true:false}>Increment</button>
        <button type="button" onClick={()=>dispatch('decrement')} disabled={count === 0 ? true:false}>Decrement</button>
        <button type="button" onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounter