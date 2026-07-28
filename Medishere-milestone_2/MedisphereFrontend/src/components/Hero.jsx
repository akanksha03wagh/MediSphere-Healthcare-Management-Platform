import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">
            <h1>
              Smart Healthcare <br />
              <span>Management Platform</span>
            </h1>

            <p>
              Medisphere helps hospitals, doctors and patients manage
              appointments, medical records, billing and healthcare
              services efficiently with a modern digital platform.
            </p>

            <Link to="/role">
              <button className="hero-btn">
                 Get Started
              </button>
            </Link>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">
            <img
              src={heroImage}
              alt="Doctor"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;