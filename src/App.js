import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

//Objeto que con el que usaremos con la api de spotify
const spotify = new SpotifyWebApi();

function App() {
  //Almacenar variable temporal, solo en memoria
  const [token, setToken] = useState(null);

  //Recuperar el token de la URL del metodo
  useEffect(() => {
    const hash = getTokenFromUrl();
    //No mostrar el token  de seguridad en la URL -> Lo limpiamos
    window.location.hash = "";

    //NO ENTIENDO DE DONDE SALE ACCESS TOKEN
    //_token es un token temporal
    const _token = hash.access_token;

    //Si hay token lo seteamos
    if (_token) {
      setToken(_token);
      //Le damos el token de seguridad a Spotify
      spotify.setAccessToken(_token);
    }

    console.log("Token: ", _token);
  }, []);

  return (
    <div className="App">
      {
        //Si hay token vamos a la siguiente pagina
        token ? (
          <h1>Logged</h1>
        ) : (
          //Si no hay token volvemos al -> codigo de .Login
          <Login />
        )
      }
    </div>
  );
}

export default App;
