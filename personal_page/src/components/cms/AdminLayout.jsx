import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../../shared/Footer';
// import Sidebar from "../cms/Sidebar";

const AdminLayout = () => {
    return (
        <div className="admin">
            <Outlet />
            <Footer />
        </div>  
    )
}

export default AdminLayout