import { Link } from "react-router-dom"
import "./Header.css"

export default function Header () {
    return (
        <header className="header">
                <img src="/Images/logo.svg" alt="Logo de Kasa"/>
                <nav className="nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A Propos</Link>
                </nav>
            </header>
    )
}