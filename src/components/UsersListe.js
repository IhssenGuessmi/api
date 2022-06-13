import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'

export default function UsersListe() {

    const [users,setUsers]=useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(response=>setUsers(response))
    .catch(err=>console.log(err))
},[])

  return (
    <div>
        {users.map(user=> (<UserCard  user={user} key={user.id} />))}
    </div>
  )
}
