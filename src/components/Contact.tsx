import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

// IMPORTANT: Define the email you want to receive contact form messages at.
// The very first time you submit this form, FormSubmit.co will send a confirmation email to this address.
// Once you click the confirmation link in that email, all subsequent messages will be forwarded to your inbox!
const CONTACT_EMAIL = "shiphirawamaitha@gmail.com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-base-200 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-full text-primary">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors">
                      {CONTACT_EMAIL}
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

            <div className="bg-base-200 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Availability</h3>
              <p className="text-gray-600 dark:text-neutral-400 mb-4">
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
          <div className="bg-base-200 p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Email</label>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Message</label>
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
                disabled={isSubmitting}
                className="btn btn-primary w-full text-purple-600 hover:bg-primary-focus transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {submitStatus === "success" && (
              <div className="mt-4 p-4 text-sm text-green-800 bg-green-100 rounded-lg dark:bg-green-900/30 dark:text-green-400">
                ✓ Message sent successfully! 
                <br />
                <span className="text-xs font-semibold">
                  Note: Check your inbox ({CONTACT_EMAIL}) for an activation email from FormSubmit.co to start receiving submissions if you haven't activated this form yet.
                </span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-4 text-sm text-red-800 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-400">
                ✗ Something went wrong. Please try again or email me directly at {CONTACT_EMAIL}.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;