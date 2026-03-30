import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-img" style={{ backgroundImage: "url('/images/brochure/building-exterior.jpg')" }} />
      <div className="hero__overlay" />
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__badge">RERA: P52100078584</p>
          <h1 className="hero__title">
            <span className="hero__brand">Goodwill Palette</span>
            <span className="hero__tagline">A home of many hues...</span>
          </h1>
          <p className="hero__subtitle">
            Premium 1 &amp; 2 BHK Upscale Homes at Ravet, Pune
          </p>
          <div className="hero__highlights">
            <div className="hero__highlight-item">
              <span className="hero__highlight-num">1 &amp; 2 BHK</span>
              <span>Spacious Homes</span>
            </div>
            <div className="hero__highlight-item">
              <span className="hero__highlight-num">427–737</span>
              <span>Sq.Ft. Carpet</span>
            </div>
            <div className="hero__highlight-item">
              <span className="hero__highlight-num">28+</span>
              <span>Years Legacy</span>
            </div>
          </div>
          <div className="hero__actions">
            <Link to="contact" smooth offset={-80} duration={500} className="btn btn--primary">
              Book a Site Visit
            </Link>
            <Link to="floorplans" smooth offset={-80} duration={500} className="btn btn--outline">
              View Floor Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
