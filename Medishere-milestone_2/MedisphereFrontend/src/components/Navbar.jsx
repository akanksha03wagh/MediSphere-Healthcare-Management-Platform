function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          Medisphere
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Doctors</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;