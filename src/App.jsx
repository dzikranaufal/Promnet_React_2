import "./App.css";

function App() {
  return (
    <>
      <div className="top-row">
        <span>Computer</span>
        <span>Science</span>
        <span>Education</span>
      </div>
      <div className="hero">
        <h1 className="headline" aria-label="Dzikra">
          <span>D</span>
          <span>Z</span>
          <span>I</span>
          <span>K</span>
          <span>R</span>
          <span>A</span>
        </h1>
        <p className="tagline">
          Passionate about creating secure, responsive, and intuitive digital
          experiences with a strong focus on performance, usability, and user
          needs.
        </p>
      </div>
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

          <a
            href="/"
            className="home-dot"
            aria-label="Go to homepage"
          ></a>
        </nav>

        <span className="meta">N°1/4</span>
      </div>
    </>
  );
}

export default App;