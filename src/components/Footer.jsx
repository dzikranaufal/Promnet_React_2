function Footer() {
    return (
        <div className="bottom-bar">
            <span className="meta">©2026</span>

            <nav className="pill">
                <div className="logo">
                    <span className="d">D</span>
                    <span className="z">z</span>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="/who.html">Who</a>
                    </li>

                    <li>
                        <a href="/what.html">What</a>
                    </li>

                    <li>
                        <a href="/where.html">Where</a>
                    </li>
                </ul>

                <a href="/" cl  assName="home-dot" aria-label="Go to homepage"></a>
            </nav>

            <span className="meta">N°1/4</span>
        </div>
    );
}

export default Footer;