import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Dashboard = () => {
    let { dashboard } = useParams();
    
    return (
        <div className="dashboard">
            <Sidebar />
        </div>
    )
}

export default Dashboard;