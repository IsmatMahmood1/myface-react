import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styles/UsersList.scss";

export function UsersList() {
    const [usersData, setUsersData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(response => response.json())
            .then(data => setUsersData(data));
    }

    useEffect(() => {
        fetchData('/users')
    }, []);

    if (!usersData) {
        return <div>Waiting for data!</div>
    }

    console.log(usersData)
    return (
        <div>
            <div className='users-list'>
                {usersData.results.map(user =>
                    <Link className='user' to={`/users/${user.id}`}>
                        <img className='profile-image' alt='' src={user.profileImageUrl} />
                        <p className='user-name'>{user.name}</p>
                    </Link>
                )}
            </div>

            {usersData.previous
                ? <button onClick={() => fetchData(usersData.previous)}>Previous</button>
                : null}

            {usersData.next
                ? <button onClick={() => fetchData(usersData.next)}>Next</button>
                : null}
        </div>
    )
}