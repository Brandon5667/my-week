import React from 'react';
import React, { useState, useEffect } from 'react';
// import ChoreBlock from '../components/ChoreBlock';
import {GET_ME} from '../utils/queries'

const Profile = () =>{
  const { loading, error, data } = useQuery(GET_ME);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (data && data.me) {
      setUsername(data.me.username);
      setEmail(data.me.email);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
    return(
        <div>
            <h2>Profile</h2>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
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
