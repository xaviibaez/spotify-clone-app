import React from 'react';
import './Header.css';
import { useDataLayerValue } from "./DataLayer";

/* Iconos */
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';

function Header() {
    //Recoger info de usuario
    const[{user}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* Barra de busqueda */}
                <SearchIcon />
                <input 
                    placeholder="Hola Placeholder"
                    type="text"
                />
            </div>
            <div className="header__right">
                {/* Icono de usuario */}
                <Avatar src={user?.images[0].url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
