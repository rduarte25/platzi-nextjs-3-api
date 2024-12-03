import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import layout from './layout.module.css';

const Layout: React.FC = ({children}) => {
    return (
        <div className={layout.container}>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    );
};

export default Layout;