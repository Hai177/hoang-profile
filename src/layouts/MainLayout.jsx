import Nvarbar from './NavBar.jsx';

import React from 'react';

import { Outlet } from 'react-router-dom';

export const Common = () => {
    return (
        <div className="profile-body d-flex">
            <Nvarbar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Common;
