// Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      console.log("Contact form submitted:", { name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card-wrapper">
        <div className="login-right-panel">
          <div className="form-container">
            <h2 className="form-title flex items-center gap-10px">
              <img
                height="25px"
                width="25px"
                src="ContactIcon.png"
                alt="Contact us"
              />
              Contact Us
            </h2>

            <div className="form-content">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="input-group">
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button onClick={handleSubmit} className="login-button">
                Send Message
              </button>

              {submitted && (
                <p className="text-green-500 text-sm mt-3">
                  Message sent successfully!
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="login-right-panel">
          <img
            height="350px"
            width="350px"
            src="ContactUs.svg"
            alt="Contact us"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
