import React, { useRef } from 'react'


function UserForm() {
const userNameRef = useRef();
const userPasswordRef = useRef();

const formSubmit = (e) =>{
   e.preventDefault();
const userName = userNameRef.current.value;
const userPass = userPasswordRef.current.value;
userNameRef.current.style.color="red";
   console.log({userName, userPass});
}

  return (
    <form onClick={formSubmit}>
        <div>
            <label>User Name</label>
            <input type="text" id="username"  ref={userNameRef} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" id="password" ref={userPasswordRef} />            
        </div>
        <button type="submit">Submit</button>
    </form>

  )
}

export default UserForm