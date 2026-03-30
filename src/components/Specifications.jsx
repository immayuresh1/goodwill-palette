import {
  HiHome,
  HiLightningBolt,
  HiColorSwatch,
} from "react-icons/hi";
import {
  MdFoundation,
  MdKitchen,
  MdBathtub,
  MdElevator,
  MdDoorFront,
} from "react-icons/md";

const specs = [
  {
    icon: <MdFoundation size={28} />,
    title: "Structure",
    items: [
      "Earthquake resistant RCC framed structure",
      "Designed for enhanced ventilation & natural light",
    ],
  },
  {
    icon: <HiHome size={28} />,
    title: "Flooring",
    items: [
      "1200x600 mm Glazed Vitrified Premium tiles",
      "600x600 mm Anti-skid tiles in toilets & balconies",
    ],
  },
  {
    icon: <MdKitchen size={28} />,
    title: "Kitchen",
    items: [
      "Quartz/Granite top platform with SS Sink",
      "Provision for Water Purifier, Microwave, Fridge",
    ],
  },
  {
    icon: <MdBathtub size={28} />,
    title: "Toilets",
    items: [
      "CERA/Jaquar sanitary ware & CP fittings",
      "Solar water heater connection in all baths",
    ],
  },
  {
    icon: <MdDoorFront size={28} />,
    title: "Doors & Windows",
    items: [
      "Laminated doors with premium safety locks",
      "3-Track Aluminum sliding windows with mosquito mesh",
    ],
  },
  {
    icon: <HiLightningBolt size={28} />,
    title: "Electricals",
    items: [
      "Polycab concealed copper wiring",
      "Legrand/Schneider modular switches",
    ],
  },
  {
    icon: <MdElevator size={28} />,
    title: "Elevator",
    items: [
      "OTIS/Schindler/Kone with DG backup",
    ],
  },
  {
    icon: <HiColorSwatch size={28} />,
    title: "Smart Home",
    items: [
      "Digital Biometric lock & Video Door Phone",
      "Provision for AC, DTH & Inverter backup",
    ],
  },
];

export default function Specifications() {
  return (
    <section className="specifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Specifications</span>
          <h2>Premium Quality in Every Detail</h2>
          <div className="section-line" />
        </div>
        <div className="specs__grid">
          {specs.map((s) => (
            <div key={s.title} className="spec-card">
              <span className="spec-card__icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
