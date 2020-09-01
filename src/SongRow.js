import React from 'react';
import "./SongRow.css";

function SongRow({ track }) {
    // track es el objeto iterado de la cancion -> viene del body
    return (
        <div className="songRow">
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {/* Iteramos por cada unos de los artistas de la cancion */}
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
