import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Pages/Shared/Menu/Menu';

const LoginLayout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};

export default LoginLayout;