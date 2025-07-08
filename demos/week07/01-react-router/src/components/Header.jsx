import { Link } from "react-router"

export const Header = () => {
    return (
        <nav>
            <a href="/">Home page</a>
            <Link to="/about">About page</Link>
            <Link to="contact">Contact Us</Link>
        </nav>
    )
}