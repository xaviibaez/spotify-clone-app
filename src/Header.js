import React from 'react';
import './Header.css';

/* Iconos */
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input 
                    placeholder="Hola Placeholder"
                    type="text"
                />
            </div>
            <div className="header__right">
                {/* Icono de usuario */}
                <Avatar src="" alt="RQ" />
                <h4>Xavi</h4>
            </div>
        </div>
    );
}

export default Header;
