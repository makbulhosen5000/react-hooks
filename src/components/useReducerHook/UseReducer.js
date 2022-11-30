import React, { useReducer, useState } from 'react'


const booksData = [
    {id:1, name:"You Can Win"},
    {id:2, name:"Change Attitude Change Your Life"},
    {id:3, name:"JavaScript"},
]

const reducer=(state,action)=>{
  //action.type action.payload
  if(action.type==="ADD"){
     const allBooks = [...state.books,action.payload]
     return{
      ...state,
      books:allBooks,
      isModalOpen:true,
      modalText:"book is added"
     }
  }
  if(action.type==="REMOVE"){
    const filteredBooks = [...state.books].filter(book=>book.id!==action.payload);
    return{
      ...state,
      books:filteredBooks,
      isModalOpen:true,
      modalText:"book is remove"
    }
  }
   return state;
}

//initialState function
const initialState = {
      books:booksData,
      isModalOpen:false,
       modalText:"",
}

//UseReducer function (main)
function UseReducer() {
    const [bookName,setBookName] = useState("");
    
    const [bookState,dispatch] = useReducer(reducer,initialState)
    
    const Modal = ({modalText}) =>{
         return <p>{modalText}</p>
    }

    const formHandler = (e) =>{
      e.preventDefault();
        const newBook = {id:new Date().getTime().toString(),name:bookName}
        dispatch({type:"ADD",payload:newBook});
        //after book added setBookName will empty
        setBookName("");
    }

    const removeBook=(id)=>{
     dispatch({type:"REMOVE",payload:id})
    };
  return (
    
    <div style={{ textAlign:"center", }}>
            <form  onSubmit={formHandler}>
              <label></label>
               <input type="text" name="name" value={bookName} onChange={(e)=>{setBookName(e.target.value)}} />
               <button type='submit'>Add Book</button>
            </form>
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        <h1>Use Reducer Book List</h1>
        {bookState.books.map((book)=>{
             const {id,name} = book;
            return(
               
                <li key={id}>{name} <button onClick={()=>removeBook(id)}>REMOVE</button></li>
            )
        })}
  
       
        
         

    </div>
  )
}

export default UseReducer