import React from 'react';
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

    return (
        <>
            <main className="px-3">

                <h1>Authentification - Upload</h1>

                <p className="lead"> Le projet était de créer une application web opérationnel. <br />
                    Dans un premier temps j'ai réalisé le back-end en utilisant Express.js, Passport et Multer.<br />
                    À l’aide d’une stratégie dite «locale» l’utilisateur peux s’identifier, accéder à la page admin et ainsi uploader un fichier. <br />
                    Pour conclure j’ai mis en place Le front-end via le framwork React et la librairie Bootstrap. </p>

                <p className="lead">
                    <a href="https://www.linkedin.com/in/omarhabibou/" target="_blank" className="btn btn-lg fw-bold border-white bg-white">About Me</a>
                </p>

            </main>
        </>
    )
}

