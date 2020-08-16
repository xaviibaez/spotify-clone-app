import React from 'react'
import './Login.css'
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
            {/* Spotify Logo */}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXzHLWLB33jSJ_0aUXcNbRIC_dhM4jKcGN6A&usqp=CAU"
                alt=""
            />

            {/* Login with spotify*/}
            <a href={loginUrl}>Login with Spotify</a>

        </div>
    )
}

export default Login
