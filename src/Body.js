import React from 'react';
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";

// Iconos
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({spotify}) {
    //Recoger info de playlist
    const[{discover_weekly}, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            {/* Detalle de la playlist */}
            <div className="body__info">
                {/* Imagen */}
                <img src={discover_weekly?.images[0].url} alt=""/>
                {/* Texto */}
                <div className="body__infoText">
                    <p>{discover_weekly?.name}</p>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                {/* Iconos */}
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        //onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {/* Lista de canciones */}
                
            </div>
        </div>
    );
}

export default Body;
