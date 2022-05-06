import React from 'react';
import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/router';
import { NavLink } from "react-router-dom";

export default function App() {

    return (
        <>
            <body className="d-flex h-100vh text-center text-white bg-dark">
                <div className="cover-container d-flex w-100 h-100vh p-3 mx-auto flex-column">
                    <header className="mb-auto">
                        <div>
                            <h3 className="float-md-start mb-0">Express Login</h3>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </nav>
                        </div>
                    </header>

                    <Router />

                    <footer className="mt-auto text-white-50">
                        <p>The World Is Mine : <a href="https://habibouomar.github.io" target="_blank" className="text-white">Portfolio</a> - Accés Github <a href="https://urlz.fr/iba3" target="_blank" className="text-white">@habibouomar</a>.</p>
                    </footer>
                </div>
            </body>
        </>
    )
}

