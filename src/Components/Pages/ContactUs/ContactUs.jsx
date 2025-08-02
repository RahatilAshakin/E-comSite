import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to backend or API
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have questions or want to say hello? We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">
                Contact Information
              </h2>
              <p className="flex items-center text-gray-700 mb-3">
                <FaMapMarkerAlt className="mr-3 text-purple-500" />
                123 E-Commerce St, Suite 100, Dhaka, Bangladesh
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <FaPhoneAlt className="mr-3 text-purple-500" />
                +880 1234 567 890
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <FaEnvelope className="mr-3 text-purple-500" />
                support@yourecommercesite.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">
                Follow Us
              </h2>
              <div className="flex space-x-6 text-purple-700">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-purple-900 transition"
                >
                  <FaFacebookF size={28} />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-purple-900 transition"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-purple-900 transition"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-purple-900 transition"
                >
                  <FaLinkedinIn size={28} />
                </a>
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-purple-900 transition"
                >
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-purple-50 rounded-2xl p-8 shadow-lg"
          >
            {submitted && (
              <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center font-semibold">
                Thank you for contacting us! We will get back to you soon.
              </p>
            )}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
