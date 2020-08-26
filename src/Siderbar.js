import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Siderbar() {
    return (
        <div className="sidebar">
        <h1>SIDEBAR</h1>
        <img className="sidebar_logo" alt=""/>

        <SidebarOption title="Home"/>
        <SidebarOption title="Search"/>
        <SidebarOption title="Your Library"/>
    </div>
    )
}

export default Siderbar
