import React from 'react';
import "./Footer.css";
/* Iconos material UI */
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer() {
    return (
        <div className="footer">
            {/* FOOTER LEFT */}
            <div className="footer__left">
                <p>Footer left</p>
            </div>
            {/* FOOTER CENTER - SONG CONTROLLERS*/}
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
            </div>
            {/* FOOTER RIGHT - VOLUME CONTROLS*/}
            <div className="footer__right">
                <p>Footer right</p>
            </div>
        </div>
    )
}

export default Footer
