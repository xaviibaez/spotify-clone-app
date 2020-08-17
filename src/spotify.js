//Spotify API hara el login por nosotros, 
//una vez validado nos devolvera la info

//Punto donde ira al clickar login
export const authEndpoint =
"https://accounts.spotify.com/authorize"

//Hara un redirect a localhost
const redirectUri = "http://localhost:3000/"

//Constante que nos da Spotify para identificarnos
const clientId = "64498449f65c43c3a2168907dea9e5ae"

//Scopes -> Saber lo que hace el usuario es capaz de hacer
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//Recuperar el token de la URL y la tratamos
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
}

//accessURL -> URL que recoje Login.js para hacer el acceso
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
