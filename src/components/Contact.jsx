import { useState } from "react";
import { submitEnquiry } from "../firebase/config";
import { HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", bhk: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus("sending");
    try {
      await submitEnquiry({ ...form, source: "contact_form" });
      setStatus("success");
      setForm({ name: "", phone: "", bhk: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2>Start Your Journey Home</h2>
          <div className="section-line" />
        </div>
        <div className="contact__grid">
          <div className="contact__info">
            <h3>Goodwill Palette</h3>
            <p>1 & 2 BHK Upscale Homes at Ravet, Pune</p>
            <p className="contact__by">A Project by Ira Venture Nx</p>
            <div className="contact__details">
              <div className="contact__detail">
                <HiPhone size={20} />
                <a href="tel:+919697963142">+91 96979 63142</a>
              </div>
              <div className="contact__detail">
                <HiLocationMarker size={20} />
                <span>Sr.No.81/2, Near City Pride School, Mukai Chowk, Ravet, Pune-412101</span>
              </div>
            </div>
            <div className="contact__logos">
              <img src="/images/goodwill-logo.svg" alt="Goodwill Palette" className="contact__logo" />
              <img src="/images/ira-venture-logo.svg" alt="Ira Venture Nx" className="contact__logo" />
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Enquire Now</h3>
            <input
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <select name="bhk" value={form.bhk} onChange={handleChange}>
              <option value="">Interested In</option>
              <option value="1 BHK">1 BHK (427-502 sq.ft)</option>
              <option value="2 BHK">2 BHK (627-737 sq.ft)</option>
              <option value="Both">Both / Not Sure</option>
            </select>
            <textarea
              name="message"
              placeholder="Any specific requirements?"
              rows={3}
              value={form.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn--primary btn--full" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Submit Enquiry"}
            </button>
            {status === "success" && (
              <p className="contact__success">Thank you! We'll contact you shortly.</p>
            )}
            {status === "error" && (
              <p className="contact__error">Something went wrong. Please call us directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
