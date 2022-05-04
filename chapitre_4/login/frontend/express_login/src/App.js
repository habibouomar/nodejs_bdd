import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

    return (
        <>
        
            <body className="d-flex h-100 text-center text-white bg-dark">

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    
                    <header className="mb-auto">
                        <div>
                            <h3 className="float-md-start mb-0">Express Login</h3>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">SignUp</a>
                                <a className="nav-link" href="#">Login</a>
                                <a className="nav-link" href="#">Admin</a>
                            </nav>
                        </div>
                    </header>

                    <main className="px-3">
                        <h1>Welcome</h1>
                        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p className="lead">
                            <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                        </p>
                    </main>

                    <footer className="mt-auto text-white-50">
                        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
                    </footer>

                </div>

            </body>
        </>
    )
}

