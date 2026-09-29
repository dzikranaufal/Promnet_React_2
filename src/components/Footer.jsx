import { Link, NavLink } from "react-router-dom";
import { pages } from "../data/pages";

const navPages = pages.filter((p) => p.path !== "/");

function Footer({ current, total }) {
    return (
        <div className="bottom-bar">
            <span className="meta">©2026</span>

            <nav className="pill">
                <div className="logo">
                    <span className="d">D</span>
                    <span className="z">z</span>
                </div>

                <ul className="nav-links">
                    {navPages.map((p) => (
                        <li key={p.id}>
                            <NavLink to={p.path}>
                                {p.id[0].toUpperCase() + p.id.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <Link to="/" className="home-dot" aria-label="Go to homepage" />
            </nav>

            <span className="meta">N°{current}/{total}</span>
        </div>
    );
}

export default Footer;