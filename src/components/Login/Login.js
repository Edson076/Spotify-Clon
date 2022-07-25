import React from 'react'
import "./Login.css"

const endpoint = "https://accounts.spotify.com/authorize" //redirije a la API de Spotify para conceder permisos
const clientID = "8b4c1ebe77614907b87ae70faabe8e76" //ID dado en la app creada en el dashboard de Spotify for developers
const redirectURI ="http://localhost:3000" // Direccion a la que sera dirigido luego de dar acceso a la cuenta o no
const scopes = [ //los scopes son lo que permisos que concedera el usarios que se puedan realizar en su cuenta.
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-top-read",
    "user-read-recently-played"
]
const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&show_dialog=true`

const Login = () => {
    return (
        <div className='Container'>
            <img src ="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt = "logo Spotify" className='logoSpotyfi'/>
            <a href={loginURL} className='btnLogin'>Login with Spotify</a>
        </div>
    )
}

export default Login;