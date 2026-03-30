import { HiShieldCheck, HiStar, HiLocationMarker, HiHome } from "react-icons/hi";

const stats = [
  { icon: <HiStar />, value: "28+", label: "Years Experience" },
  { icon: <HiHome />, value: "5+", label: "Projects Delivered" },
  { icon: <HiLocationMarker />, value: "Ravet", label: "Prime Location" },
  { icon: <HiShieldCheck />, value: "RERA", label: "Registered" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About the Project</span>
          <h2>Crafted with Utmost Love &amp; Care</h2>
          <div className="section-line" />
        </div>
        <div className="about__grid">
          <div className="about__text">
            <p>
              With a rich experience of 28 years in the field of Residential and Industrial
              construction, <strong>Ira Venture Nx</strong> presents <strong>Goodwill Palette</strong> —
              a signature residential project with a towering facade, curated landscapes, richly
              detailed interiors, and rooftop amenities.
            </p>
            <p>
              True to our innovative ethos, this space is driven by bold vision, elite craftsmanship,
              future-forward design, and a commitment to the highest global standards. Situated at
              Ravet in proximity to schools, hospitals, colleges, entertainment &amp; shopping malls,
              the locality offers unmatched peace &amp; tranquillity.
            </p>
            <div className="about__legacy">
              <h3>Our Matchless Legacy</h3>
              <div className="about__projects">
                {["Primero Casa", "Skylar", "Premia", "Prospera", "Primero Casa Ph-2"].map((p) => (
                  <span key={p} className="about__project-tag">{p}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-icon">{s.icon}</span>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
