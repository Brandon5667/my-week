import React from 'react';
import React, { useState, useEffect } from 'react';


const Profile = () =>{

    return(
        <div>
            <h2>Profile</h2>
            <p>Username:{}</p>
            <p>Email:{}</p>
            <h3>Assigned Chores:</h3>
            <ul>
                {chores.map((chore) => (
                  <li key={chore.id}>{chore.name}</li>
                ))}
            </ul>
            {/* <button onClick={deleteAccount}>Delete Account</button> */}
        </div>
    )
}

export default Profile
