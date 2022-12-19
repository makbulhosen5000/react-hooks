import React, { useState } from 'react'
import Message from './Message';
function UseMemo() {
    const [count,setCount] = useState(0);
    const [toggle,setToggle] = useState(false);
    console.log("app rendering");
  return (
    <div>
        {toggle ? 'ON':'OFF'}
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
        <Message countMessage="0"/>
    </div>
  )
}

export default UseMemo