import React from "react"
import { Link } from "react-router-dom"
import "./Error.css"

export default function Error () {

    return (
        <main className="error">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oups! La page que 
            vous demandez n'existe pas.</p>
            <h2><Link to="/">Retourner sur la page d'accueil</Link></h2>
        </main>
    )
}