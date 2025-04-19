import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-green-500 mb-3">Contact us</h2>
            <p className="text-gray-600 mb-12">
              Do not hesitate to drop us a message, we<br />
              would be delighted to make your acquaintance.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="text-green-500" size={18} />
                <span className="text-gray-700">+971 45 682 874</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-green-500" size={18} />
                <a href="mailto:contact@aryatrading.com" className="text-gray-700">
                  contact@aryatrading.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-green-500" size={18} />
                <span className="text-gray-700">Platinum Tower, 30th floor, JLT, Dubai, UAE</span>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-4">Follow Us</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-gray-600">X</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">In</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">Tg</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">Fb</a>
                <a href="#" className="text-gray-400 hover:text-gray-600">Yt</a>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex gap-8">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Discover our app</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Discover our products</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Login</a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Forms */}
          <div className="space-y-8">
            {/* First Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs text-gray-500 mb-1">
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs text-gray-500 mb-1">
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-gray-500 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-gray-500 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-coral-500 text-white px-6 py-2 rounded hover:bg-coral-600 transition-colors"
                style={{ backgroundColor: '#ff7f5c' }}
              >
                Send
              </button>
            </form>

            {/* Second Form */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Sprocket.png" alt="HubSpot" className="w-4 h-4" />
                <span className="text-sm text-gray-600">Create your own free forms to generate leads from your website.</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName2" className="block text-xs text-gray-500 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName2"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="lastName2" className="block text-xs text-gray-500 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName2"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="email2" className="block text-xs text-gray-500 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email2"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="message2" className="block text-xs text-gray-500 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message2"
                    rows={4}
                    placeholder="Example text"
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-600 transition-colors w-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;