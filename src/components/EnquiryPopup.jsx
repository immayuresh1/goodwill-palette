import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { submitEnquiry } from "../firebase/config";

export default function EnquiryPopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", bhk: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup_dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("popup_dismissed", "true");
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus("sending");
    try {
      await submitEnquiry({ ...form, source: "popup" });
      setStatus("success");
      setTimeout(handleClose, 2500);
    } catch {
      setStatus("error");
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={handleClose} aria-label="Close">
          <HiX size={24} />
        </button>
        <div className="popup__header">
          <span className="popup__badge">Limited Period Offer</span>
          <h2>Get Exclusive Pricing</h2>
          <p>1 & 2 BHK Homes starting from Ravet, Pune</p>
        </div>
        {status === "success" ? (
          <div className="popup__success">
            <span className="popup__check">&#10003;</span>
            <h3>Thank You!</h3>
            <p>Our team will call you shortly.</p>
          </div>
        ) : (
          <form className="popup__form" onSubmit={handleSubmit}>
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
              <option value="">Select Configuration</option>
              <option value="1 BHK">1 BHK (427-502 sq.ft)</option>
              <option value="2 BHK">2 BHK (627-737 sq.ft)</option>
              <option value="Both">Both / Not Sure</option>
            </select>
            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Submitting..." : "Get Callback Now"}
            </button>
            {status === "error" && (
              <p className="popup__error">Error submitting. Call +91 96979 63142 directly.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
