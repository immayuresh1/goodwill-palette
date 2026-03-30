import { useState } from "react";
import { Link } from "react-scroll";

const plans = [
  {
    type: "1 BHK",
    label: "1 BHK · Typical",
    building: "Building I",
    floors: "1st – 6th Floor",
    units: "4 flats per floor · 24 units",
    floorPlanImg: "/images/brochure/floorplan-bldg-i-typical.png",
    viewImg: "/images/brochure/floorplan-1bhk-3d.jpg",
    configs: [
      { flat: "101/201/…/601", carpet: "459", encBal: "9.53", balcony: "1.53", total: "42.60" },
      { flat: "102/202/…/602", carpet: "471", encBal: "9.43", balcony: "1.53", total: "43.76" },
      { flat: "103/203/…/603", carpet: "502", encBal: "9.43", balcony: "4.40", total: "46.63" },
      { flat: "104/204/…/604", carpet: "488", encBal: "9.53", balcony: "4.40", total: "45.31" },
    ],
  },
  {
    type: "1 BHK",
    label: "1 BHK · 7th Floor",
    building: "Building I",
    floors: "7th Floor",
    units: "4 flats on 7th floor",
    floorPlanImg: "/images/brochure/floorplan-bldg-i-7th.png",
    viewImg: "/images/brochure/floorplan-1bhk-3d.jpg",
    configs: [
      { flat: "I-701", carpet: "427", encBal: "10.44", balcony: "1.53", total: "59.45" },
      { flat: "I-702", carpet: "438", encBal: "10.37", balcony: "1.53", total: "40.65" },
      { flat: "I-703", carpet: "459", encBal: "10.35", balcony: "4.31", total: "43.58" },
      { flat: "I-704", carpet: "452", encBal: "10.44", balcony: "4.31", total: "42.10" },
    ],
  },
  {
    type: "2 BHK",
    label: "2 BHK · Typical",
    building: "Building J",
    floors: "1st – 6th Floor",
    units: "4 flats per floor · 24 units",
    floorPlanImg: "/images/brochure/floorplan-bldg-j-typical.png",
    viewImg: "/images/brochure/floorplan-2bhk-3d.jpg",
    configs: [
      { flat: "101/201/…/601", carpet: "691", encBal: "13.58", balcony: "1.59", total: "64.79" },
      { flat: "102/202/…/602", carpet: "708", encBal: "13.68", balcony: "1.59", total: "65.78" },
      { flat: "103/203/…/603", carpet: "737", encBal: "13.68", balcony: "4.46", total: "68.51" },
      { flat: "104/204/…/604", carpet: "722", encBal: "13.58", balcony: "4.46", total: "67.08" },
    ],
  },
  {
    type: "2 BHK",
    label: "2 BHK · 7th Floor",
    building: "Building J",
    floors: "7th Floor",
    units: "4 flats on 7th floor",
    floorPlanImg: "/images/brochure/floorplan-bldg-j-7th.png",
    viewImg: "/images/brochure/floorplan-2bhk-3d.jpg",
    configs: [
      { flat: "J-701", carpet: "627", encBal: "13.34", balcony: "1.59", total: "58.21" },
      { flat: "J-702", carpet: "663", encBal: "44.71", balcony: "1.09", total: "60.91" },
      { flat: "J-703", carpet: "672", encBal: "13.41", balcony: "4.37", total: "62.40" },
      { flat: "J-704", carpet: "656", encBal: "13.26", balcony: "4.37", total: "60.91" },
    ],
  },
];

export default function FloorPlans() {
  const [active, setActive] = useState(0);
  const plan = plans[active];

  return (
    <section id="floorplans" className="floorplans">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Floor Plans</span>
          <h2>Choose Your Perfect Home</h2>
          <div className="section-line" />
        </div>

        <div className="floorplans__tabs">
          {plans.map((p, i) => (
            <button
              key={p.label}
              className={`floorplans__tab ${active === i ? "floorplans__tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="floorplans__content">
          <div className="floorplans__plan-image-wrap">
            <img
              src={plan.floorPlanImg}
              alt={`${plan.label} Floor Plan`}
              className="floorplans__plan-image"
            />
          </div>

          <div className="floorplans__info">
            <div className="floorplans__meta">
              <span className="floorplans__type">{plan.label}</span>
              <span className="floorplans__building">{plan.building} &middot; {plan.floors}</span>
              <span className="floorplans__units">{plan.units}</span>
            </div>

            <div className="floorplans__table-wrap">
              <table className="floorplans__table">
                <thead>
                  <tr>
                    <th>Flat No.</th>
                    <th>Carpet (sq.ft)</th>
                    <th>Enc. Bal.</th>
                    <th>Balcony</th>
                    <th>Total (sq.mt)</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.configs.map((c) => (
                    <tr key={c.flat}>
                      <td>{c.flat}</td>
                      <td><strong>{c.carpet}</strong></td>
                      <td>{c.encBal}</td>
                      <td>{c.balcony}</td>
                      <td><strong>{c.total}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="floorplans__3d-preview">
              <h4>3D View</h4>
              <img src={plan.viewImg} alt={`${plan.type} 3D Floor View`} className="floorplans__3d-img" />
            </div>

            <div className="floorplans__cta-card">
              <p>Interested in this unit? Get pricing &amp; payment plans.</p>
              <Link to="contact" smooth offset={-80} duration={500} className="btn btn--primary btn--full">
                Get Price Details
              </Link>
              <a href="tel:+919697963142" className="btn btn--outline-dark btn--full">
                Call +91 96979 63142
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
