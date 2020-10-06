import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Event = () => {
    const [events, setEvents] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/event?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <h1>length {events.length}</h1>
            {
                events.map(ev => <li ev={ev}>{ev.name} {ev.email}</li>)
            }
        </div>
    );
};

export default Event;