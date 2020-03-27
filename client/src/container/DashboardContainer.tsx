import React, {useState} from 'react';
import{ Link } from 'react-router-dom';

export const DashboardContainer: React.FC = (props) => {
    return (
        <>
        <div>Dashboard Kochbuchmanager</div>
        <Link to="/users">Users</Link>
        <Link to="/kochbuch">Kochbuch</Link>
        
        </>
    )
}
