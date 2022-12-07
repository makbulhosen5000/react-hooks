import React, { useEffect, useReducer } from 'react'

function ReducerMain() {
    const initialState = {
        loading:true,
        post:{},
        error:'',
    }
    const reducer = (state,action) =>{
         switch(action.type){
            case 'SUCCESS':
                return{
                    loading:false,
                    post:action.result,
                    error:'',
                }
            case 'ERROR': 
                return{
                    loading:false,
                    post:{},
                    error: "Data is not Fetching",
                }
            default:
                return{
                    state
                }
            
         }
    }

    const [state,dispatch] = useReducer(reducer,initialState);
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>res.json())
        .then((data)=>{
            dispatch({type:'SUCCESS',result:data})   
        })
        .catch((err)=>{
            dispatch({type:'ERROR'})
        })
    },)

  return (
    <div>
        {state.loading ? 'loading....': state.post.title}
        {state.error || null}
    </div>
  )
}

export default ReducerMain