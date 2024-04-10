import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SingleUser from './SingleUser';
import './UserList.css'


const UserList = () => {
    const [users, setUsers] = useState([])

    const fetchusers = async() => {
        const response = await axios.get("https://randomuser.me/api/0.8/?results=10")
        setUsers(response.data.results)
    }

useEffect(() => {
   fetchusers()
}, [])

    return (
        <div className='user-list'>
            <ul>
                {users.map((user, idx) => (
                    <li> <SingleUser 
                            user={user} 
                            key={idx}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default UserList;