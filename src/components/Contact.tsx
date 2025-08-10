import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You could connect this to EmailJS or a backend later
    alert("Message sent (simulated)!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-full text-primary">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a href="mailto:shiphirawamaitha@example.com" className="text-gray-600 hover:text-primary transition-colors">
                      shiphirawamaitha@example.com
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium text-lg mb-4">Connect with me</h4>
                    <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/Shiphira-Ndirangu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-gradient-to-br from-blue-500 to-blue-700 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="https://github.com/Shiphira2003" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-gradient-to-br from-gray-800 to-gray-900 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Availability</h3>
              <p className="text-gray-600 mb-4">
                I'm currently open to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Full-time positions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Mentorship opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-full text-purple-600 hover:bg-primary-focus transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;