import React, { useReducer } from 'react'

const initialState = {
   counter : 0,
   counter2 : 0
};
const reducer=(state,action)=>{
    
  switch(action.type){
    case 'increment':
      return {...state, counter:state.counter + action.value};
    case 'decrement':
      return {...state, counter:state.counter = action.value};
    case 'reset':
      return {...state, counter:state.counter = action.value};

    case 'increment2':
      return {...state, counter2:state.counter2 + action.value};
    case 'decrement2':
      return {...state, counter2:state.counter2 - action.value};
    case 'reset2':
      return {...state, counter:state.counter2 = action.value};
    default:
      return state;
  }

}
function ComplexCounter() {

  const [count,dispatch] = useReducer(reducer,initialState);
  const [count2,dispatch] =useReducer(reducer,initialState);
  
  return (
      <div>
        <div>
        <h1>Count = {count.counter}</h1>
        <button type="button" onClick={()=>dispatch({ type:'increment', value:1 })} disabled={count.counter === 100 ? true:false}>Increment</button>
        <button type="button" onClick={()=>dispatch({ type:'decrement', value:1 })} disabled={count.counter === 0 ? true:false}>Decrement</button>
        <button type="button" onClick={()=>dispatch({ type:'reset', value:0 })}>Reset</button>
        </div>
        <div>
        <h1>Count2 = {count.counter2}</h1>
        <button type="button" onClick={()=>dispatch({ type:'increment2', value:5 })} disabled={count.counter2 === 100 ? true:false}>increment2</button>
        <button type="button" onClick={()=>dispatch({ type:'decrement2', value:5 })} disabled={count.counter2 === 0 ? true:false}>Decrement2</button>
        <button type="button" onClick={()=>dispatch({ type:'reset2', value:0 })}>Reset</button>
        </div>
      </div>
  )
}

export default ComplexCounter;