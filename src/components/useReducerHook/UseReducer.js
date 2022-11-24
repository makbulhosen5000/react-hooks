import React, { useState } from 'react';


const bookList =[
{id:1, name:"You can win"},
{id:2, name:"You can loss Your money"},
];

function UseReducer() {
  const [isModelOpen,setIsModelOpen] = useState(false);
  const [isModelText,setIsModelText] = useState("");
  const [books,setBook] = useState(bookList);
  const [addBook,setAddBook] = useState("");

  const formHandler = (e) =>{
    e.preventDefault();
    setBook((prevState)=>{
        const newBook = {id:new Date().getTime().toString(),name:addBook}
        return [...prevState,newBook];
    })
    setIsModelOpen(true);
    setIsModelText("Book is Added")

   
  }

  const Model = ({modelText}) =>{
     return(
      <p>{modelText}</p>
     )
  }

  
  return (
    <div>
        <form onSubmit={formHandler}>
           <input type="text" value={addBook} onChange={(e)=>{
            setAddBook(e.target.value);
           }} />
           <button type="submit">Submit</button>
        </form>

        {isModelOpen && <Model modelText ={isModelText} />}
        {books.map((book)=>{
            const {id, name} = book;
            return(
                <li key={id}>{name}</li>
            )
        })}
    </div>
  )
}

export default UseReducer