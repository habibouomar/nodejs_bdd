import React from 'react';
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'

export default function Admin() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/admin')
            .then(response => response.json())
            .then(response => {
                console.log('Componentdidmount register', response)
                setUsers(response)
            })
    }, [])

    return (
        <div>
                { users.map( info => { 
                    return (
                        <div key=""> {info.email} </div>
                    )
                })}
                
        </div>


        
    )
}
