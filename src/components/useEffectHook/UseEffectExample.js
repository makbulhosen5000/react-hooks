import React, { useEffect, useState } from 'react'

function UseEffectExample() {
        const [todos,setTodos] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(null);
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/todos")
     .then((res)=>{
      if(!res.ok){
        throw Error("Something Is Wrong");
      }
      return res.json();
     })
     .then((data)=>{
      setTodos(data);
      setIsLoading(false);
     })
     .catch((error)=>{
      setIsError(error.message);
      setIsLoading(false);
     })
  },[])

   const loadingMessage = "Todos Is Loading";
   const errorMessage = <p>{isError}</p>
   const todoList = 
   todos && todos.map((todo)=>{
    return(
      <p todo={todo.id}>{todo.title}</p>
    )
   })
  return (
    <div>
        <h1>Todos</h1>
       {todoList}
        { isLoading && loadingMessage}
        {errorMessage}
    </div>
  )
}

export default UseEffectExample;