import React from 'react';
import "./Player.css";
import Sidebar from "./Siderbar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
    //DATA LAYER -> Para solucionar el problem del PROP DRILLING
    //La DATA del DATA LAYER es recuperada usando REACT CONTEXT API
    //Configurado en Index.js
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
