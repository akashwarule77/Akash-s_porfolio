import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg Navbar">
      <div className="container-fluid">
        <div className="navbar-brand"><img src="akashlogo.png" alt="Logo"></img></div>
        <button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/">About</a>
            <a className="nav-link" href="/">Skills</a>
            <a className="nav-link" href="/">Projects</a>
            <a className="nav-link" href="/">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
