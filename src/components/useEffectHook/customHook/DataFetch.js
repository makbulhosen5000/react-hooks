import React from 'react'
import useFetch from './useFetch'

function DataFetch() {
    const {data, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    const loadingMessage = "Data Is Loading...."
    const errorMessage = <p>{isError}</p>
    const todoList = 
    data && data.map((data)=>{
        return <p key={data.id}>{data.title}</p>
    })
  return (
    <div>
        <h1>Todos List</h1>
        {data && todoList}
        {isLoading && loadingMessage}
        {isError && errorMessage}

    </div>
  )
}

export default DataFetch