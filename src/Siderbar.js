import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';

function Siderbar() {
    return (
        <div className="sidebar">
        <h1>SIDEBAR</h1>
        <img className="sidebar_logo" alt=""/>

        <SidebarOption option="Home"/>
        <SidebarOption option="Search"/>
        <SidebarOption option="Your Library"/>
    </div>
    )
}

export default Siderbar
