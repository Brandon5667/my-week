import React from "react";
import ChoreBlock from '../components/ChoreBlock';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
// import { GET_ME } from '../utils/queries';

const Chorepage = () => {
    
    return (
        <div className="chore-page">
        <h2>Chore Page</h2>

        <ChoreBlock />
        </div>
    )
};

export default Chorepage;