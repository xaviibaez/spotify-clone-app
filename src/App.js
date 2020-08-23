import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import { useDataLayerValue } from "./DataLayer"

//Objeto general con el que usaremos con la api de spotify
const spotify = new SpotifyWebApi();

function App() {
  //Almacenar variable temporal, solo en memoria
  const [token, setToken] = useState(null);
  //Objeto del DataLayer -> Context API
  const [{}, dispatch] = useDataLayerValue();

  //Recuperar el token de la URL del metodo
  useEffect(() => {
    //Objeto donde esta almacenado el token
    const hash = getTokenFromUrl();
    //No mostrar el token  de seguridad en la URL -> Lo limpiamos
    window.location.hash = "";

    //_token es un token temporal
    const _token = hash.access_token;

    //Si hay token lo seteamos
    if (_token) {
      setToken(_token);
      //Le damos el token de seguridad a Spotify
      spotify.setAccessToken(_token);
      //Recoger el objeto cuenta del usuario
      spotify.getMe().then(user => {
        console.log("User: ", user);
      })
    }

    console.log("Token: ", _token);
  }, []);

  //El return es lo que se muestra en la web!
  return (
    <div className="App">
      {
        token ?
          //Si hay token vamos a la siguiente pagina
          <Player />
        : 
          //Si no hay token volvemos al -> codigo de .Login
          <Login />
      }
    </div>
  );
}

export default App;
