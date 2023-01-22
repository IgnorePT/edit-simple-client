import { Link } from "react-router-dom"
import "./styles.scss"

const Header = () => {
    return (
        <header className="main-header container">
            <Link className="logo" to="/">
                <img src="/logo.svg" alt="Edit Logo" />
            </Link>

            <nav className="nav-links">
                <Link to="/" >Home</Link>
                <Link to="/users" >Users</Link>
                <Link to="/login" >Login</Link>
            </nav>
        </header>)
}

export default Header