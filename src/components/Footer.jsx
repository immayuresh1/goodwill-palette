export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="navbar__logo">
              <img src="/images/goodwill-logo.svg" alt="Goodwill Palette" className="navbar__logo-img" />
              <div>
                <span className="logo-text">GOODWILL</span>
                <span className="logo-sub">PALETTE</span>
              </div>
            </div>
            <p>A home of many hues...</p>
            <p className="footer__rera">RERA No: P52100078584</p>
            <img src="/images/ira-venture-logo.svg" alt="Ira Venture Nx" className="footer__ira-logo" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#floorplans">Floor Plans</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a href="tel:+919697963142">+91 96979 63142</a></p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Goodwill Palette by Ira Venture Nx. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Disclaimer: This website is for information purposes only. It is not a legal offering.
          </p>
        </div>
      </div>
    </footer>
  );
}
