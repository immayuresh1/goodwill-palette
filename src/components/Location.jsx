import { HiAcademicCap, HiHeart, HiShoppingBag, HiLibrary } from "react-icons/hi";

const categories = [
  {
    icon: <HiAcademicCap size={24} />,
    title: "Schools & Colleges",
    items: [
      { name: "City Pride CBSE School", dist: "500 m" },
      { name: "KIDZEE School", dist: "1.9 km" },
      { name: "SB Patil Public School", dist: "2.3 km" },
      { name: "DY Patil College of Engineering", dist: "3.2 km" },
      { name: "Mercedes Benz International School", dist: "10.6 km" },
    ],
  },
  {
    icon: <HiHeart size={24} />,
    title: "Hospitals",
    items: [
      { name: "Dhanwantaris Chrysalis", dist: "2.5 km" },
      { name: "Sterling Multispeciality Hospital", dist: "5.2 km" },
      { name: "Aditya Birla Hospital", dist: "8 km" },
      { name: "Jupiter Hospital", dist: "13.7 km" },
    ],
  },
  {
    icon: <HiShoppingBag size={24} />,
    title: "Malls & Shopping",
    items: [
      { name: "Akash Raj One Mall", dist: "1.9 km" },
      { name: "Reliance Mart", dist: "2.0 km" },
      { name: "D-Mart", dist: "3.2 km" },
      { name: "Phoenix Market City", dist: "8.4 km" },
    ],
  },
  {
    icon: <HiLibrary size={24} />,
    title: "Banks & ATMs",
    items: [
      { name: "BOM", dist: "1.4 km" },
      { name: "ICICI", dist: "1.8 km" },
      { name: "HDFC", dist: "2.2 km" },
      { name: "SBI", dist: "2.9 km" },
    ],
  },
];

export default function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Location</span>
          <h2>A Seamless Connectivity</h2>
          <div className="section-line" />
        </div>

        <div className="location__grid">
          <div className="location__map">
            <iframe
              title="Goodwill Palette Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2!2d73.7357!3d18.6547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzE3LjAiTiA3M8KwNDQnMDguNSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location__distances">
            {categories.map((cat) => (
              <div key={cat.title} className="location__category">
                <h3>
                  {cat.icon} {cat.title}
                </h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span className="location__dist">{item.dist}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="location__address">
          <strong>Site Address:</strong> Sr.No.81/2, Goodwill Palette, Near City Pride School
          (Mukai Chowk), Ravet, Pune - 412101
        </div>
      </div>
    </section>
  );
}
