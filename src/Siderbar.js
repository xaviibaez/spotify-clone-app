import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from "./DataLayer";

/* 
Iconos material UI
https://material-ui.com/es/components/material-icons/
*/
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Siderbar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
        <h1>SIDEBAR</h1>
        <img className="sidebar__logo" alt=""/>

        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

        <br />
        <strong className="sidebar__title">PLAYLIST</strong>
        <hr />

        {/* 
            Steamos las playlist del DataLayer 
            Es un map asi que se itera
        */}
        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
        ))}

    </div>
    )
}

export default Siderbar
