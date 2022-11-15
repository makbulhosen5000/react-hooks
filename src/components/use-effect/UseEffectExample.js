import React, { useEffect, useState } from 'react'

function UseEffectExample() {
  const [users,setUsers] = useState(null);
  useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          setUsers(data);
        })
  }, []);
  return (
    <div>
      <h1>Users</h1>
        {users && users.map((user)=>{
          return <p key={user.id}>{user.name}</p>
        })}
    </div>
  )
}

export default UseEffectExample