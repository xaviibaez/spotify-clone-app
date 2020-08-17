import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'

function App() {
  //Recuperar el token de la URL del metodo
  useEffect(() => {
    const hash = getTokenFromUrl();
    //No mostrar el token  de seguridad en la URL -> Lo limpiamos
    window.location.hash = "";

    //NO ENTIENDO DE DONDE SALE ACCESS TOKEN
    const token = hash.access_token;

    console.log("Token: ", token);
  }, []);

  return (
    <div className="App">
      {/* Lee el codigo de .Login */}
      <Login />
    </div>
  );
}

export default App;
