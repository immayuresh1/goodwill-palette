import {
  HiShieldCheck,
  HiLightningBolt,
  HiSun,
  HiFire,
  HiVideoCamera,
  HiPhone,
} from "react-icons/hi";
import {
  MdFitnessCenter,
  MdPool,
  MdChildCare,
  MdPark,
  MdSecurity,
  MdCelebration,
  MdDirectionsRun,
  MdElderly,
  MdOutdoorGrill,
} from "react-icons/md";

const groundFloor = [
  { icon: <MdSecurity size={32} />, title: "Security Cabin", desc: "with Entrance Gate" },
  { icon: <MdCelebration size={32} />, title: "Party Lawn", desc: "Spacious gathering area" },
  { icon: <HiShieldCheck size={32} />, title: "Club House", desc: "with Multipurpose Hall" },
  { icon: <MdFitnessCenter size={32} />, title: "AC Gym", desc: "Fully equipped" },
];

const terrace = [
  { icon: <MdPark size={32} />, title: "Landscaped Terrace", desc: "Fully landscaped top terrace" },
  { icon: <MdDirectionsRun size={32} />, title: "Jogging Track", desc: "Rooftop jogging track" },
  { icon: <MdOutdoorGrill size={32} />, title: "Gazebo Sitting", desc: "Relaxation spots" },
  { icon: <MdChildCare size={32} />, title: "Children's Play Area", desc: "Safe play zone" },
  { icon: <MdElderly size={32} />, title: "Senior Citizen Sit-out", desc: "Peaceful seating" },
  { icon: <MdFitnessCenter size={32} />, title: "Outdoor Exercise", desc: "Open air station" },
];

const utility = [
  { icon: <MdSecurity size={20} />, label: "24x7 Security" },
  { icon: <HiLightningBolt size={20} />, label: "Power Backup" },
  { icon: <HiSun size={20} />, label: "Solar Water Heater" },
  { icon: <HiFire size={20} />, label: "Fire Fighting System" },
  { icon: <MdPool size={20} />, label: "Rain Water Harvesting" },
  { icon: <HiVideoCamera size={20} />, label: "CCTV Camera" },
  { icon: <HiPhone size={20} />, label: "Video Door Phone" },
];

const galleryPhotos = [
  { src: "/images/brochure/amenity-lightwall.jpg", label: "Rooftop Feature Wall" },
  { src: "/images/brochure/amenity-rooftop.jpg", label: "Landscaped Rooftop" },
  { src: "/images/brochure/amenity-pergola.jpg", label: "Pergola Seating" },
  { src: "/images/brochure/amenity-outdoor-theater.jpg", label: "Outdoor Theater" },
  { src: "/images/brochure/amenity-kids-play.jpg", label: "Children's Play Area" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="amenities">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Lifestyle Amenities</span>
          <h2>Live the Life You Deserve</h2>
          <div className="section-line" />
        </div>

        <div className="amenities__gallery">
          {galleryPhotos.map((photo) => (
            <div key={photo.label} className="amenities__gallery-item">
              <img src={photo.src} alt={photo.label} className="amenities__gallery-img" />
              <div className="amenities__gallery-label">{photo.label}</div>
            </div>
          ))}
        </div>

        <h3 className="amenities__subtitle">Ground Floor Amenities</h3>
        <div className="amenities__grid amenities__grid--4">
          {groundFloor.map((a) => (
            <div key={a.title} className="amenity-card">
              <span className="amenity-card__icon">{a.icon}</span>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="amenities__subtitle">Rooftop Terrace Amenities</h3>
        <div className="amenities__grid amenities__grid--3">
          {terrace.map((a) => (
            <div key={a.title} className="amenity-card">
              <span className="amenity-card__icon">{a.icon}</span>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="amenities__subtitle">Utility Amenities</h3>
        <div className="amenities__utility">
          {utility.map((u) => (
            <span key={u.label} className="utility-chip">
              {u.icon} {u.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
