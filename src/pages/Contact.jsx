import React, { useState } from "react";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaPaperPlane, FaUser, FaComment, FaCheckCircle,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaArrowRight, FaChevronDown, FaChevronUp
} from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "How to book a car?",
      answer: "Visit Cars page, select your preferred vehicle, choose dates, and click 'Book Now'. Complete the payment to confirm your booking."
    },
    {
      id: 2,
      question: "Documents needed?",
      answer: "You'll need a valid driver's license, Aadhar card for verification, and a security deposit (refundable) at the time of pickup."
    },
    {
      id: 3,
      question: "Cancellation policy?",
      answer: "Free cancellation up to 24 hours before pickup. Cancellations within 24 hours may incur a fee. Check our terms for details."
    },
    {
      id: 4,
      question: "One-way rentals?",
      answer: "Yes, we offer flexible one-way rentals. You can pick up at one location and drop off at another. Additional charges may apply."
    },
    {
      id: 5,
      question: "Fuel policy?",
      answer: "Cars are provided with full fuel tank. Please return with the same fuel level, or refueling charges will apply."
    },
    {
      id: 6,
      question: "Age requirement?",
      answer: "Minimum age for rental is 21 years with a valid driver's license held for at least 1 year."
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    messages.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-4 sm:py-6 md:py-8 px-3 sm:px-4">
      
      {/* Decorative Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 sm:w-60 h-40 sm:h-60 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 sm:w-60 h-40 sm:h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Header Section - Responsive */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center p-1.5 sm:p-2 bg-orange-100 rounded-full mb-1 sm:mb-2">
            <GiSteeringWheel className="text-orange-500 text-base sm:text-lg md:text-xl" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto px-2">
            Have questions about our self-drive rental service? We're here to help 24/7.
          </p>
        </div>

        {/* Main Content Grid - Responsive */}
        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Left Side - Contact Info Cards - Compact */}
          <div className="lg:col-span-1 space-y-2 sm:space-y-3">
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-sm sm:shadow-md p-3 sm:p-4 border border-gray-100 hover:shadow-md transition-all group">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-100 rounded-lg p-1.5 sm:p-2 group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <FaPhone className="text-orange-500 text-xs sm:text-sm group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-0.5">Phone Support</h3>
                  <p className="text-gray-500 text-[8px] sm:text-[10px] mb-0.5 sm:mb-1">Available 24/7 for emergencies</p>
                  <a href="tel:+917868943703" className="text-orange-500 text-[10px] sm:text-xs font-medium hover:underline block truncate">
                    +91 78689 43703
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-sm sm:shadow-md p-3 sm:p-4 border border-gray-100 hover:shadow-md transition-all group">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-100 rounded-lg p-1.5 sm:p-2 group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <FaEnvelope className="text-orange-500 text-xs sm:text-sm group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-0.5">Email Us</h3>
                  <p className="text-gray-500 text-[8px] sm:text-[10px] mb-0.5 sm:mb-1">Response within 24 hours</p>
                  <a href="mailto:surya@rentride.com" className="text-orange-500 text-[10px] sm:text-xs font-medium hover:underline block truncate">
                    surya@rentride.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-sm sm:shadow-md p-3 sm:p-4 border border-gray-100 hover:shadow-md transition-all group">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-100 rounded-lg p-1.5 sm:p-2 group-hover:bg-orange-500 transition-colors flex-shrink-0">
                  <FaMapMarkerAlt className="text-orange-500 text-xs sm:text-sm group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-0.5">Visit Us</h3>
                  <p className="text-gray-500 text-[8px] sm:text-[10px] mb-0.5 sm:mb-1">Main office</p>
                  <p className="text-gray-700 text-[10px] sm:text-xs font-medium truncate">Chennai, Tamil Nadu 600001</p>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-xl shadow-sm sm:shadow-md p-3 sm:p-4 border border-gray-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <FaClock className="text-orange-500 text-xs sm:text-sm" />
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800">Office Hours</h3>
              </div>
              <div className="space-y-1 text-[8px] sm:text-[10px]">
                <div className="flex justify-between">
                  <span className="text-gray-500">Mon - Fri</span>
                  <span className="font-medium text-gray-700">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Saturday</span>
                  <span className="font-medium text-gray-700">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="font-medium text-orange-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-sm sm:shadow-md p-3 sm:p-4 border border-gray-100">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 sm:mb-3">Follow Us</h3>
              <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                {[
                  { icon: FaFacebookF, label: "Facebook" },
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaLinkedinIn, label: "LinkedIn" }
                ].map((Social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-gray-100 hover:bg-orange-500 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors group"
                    aria-label={Social.label}
                  >
                    <Social.icon className="text-gray-600 group-hover:text-white text-[10px] sm:text-xs" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm sm:shadow-md p-4 sm:p-5 border border-gray-100">
              
              {/* Form Header */}
              <div className="mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-0.5 sm:mb-1">Send us a Message</h2>
                <p className="text-[10px] sm:text-xs text-gray-500">We'll get back to you as soon as possible</p>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-3 sm:mb-4 bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
                  <FaCheckCircle className="text-green-500 text-xs sm:text-sm flex-shrink-0" />
                  <p className="text-green-700 text-[10px] sm:text-xs font-medium">Message sent successfully! We'll respond within 24 hours.</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                
                {/* Name Input */}
                <div className="relative group">
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-600 mb-0.5 sm:mb-1 ml-1">
                    Your Name <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition text-[8px] sm:text-[10px]" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full pl-7 sm:pl-8 pr-3 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition bg-gray-50 focus:bg-white"
                      style={{ minHeight: '38px' }}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-600 mb-0.5 sm:mb-1 ml-1">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition text-[8px] sm:text-[10px]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full pl-7 sm:pl-8 pr-3 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition bg-gray-50 focus:bg-white"
                      style={{ minHeight: '38px' }}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-600 mb-0.5 sm:mb-1 ml-1">
                    Your Message <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-2.5 sm:top-3 text-gray-400 group-focus-within:text-orange-500 transition text-[8px] sm:text-[10px]" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="3"
                      required
                      className="w-full pl-7 sm:pl-8 pr-3 py-2 text-[10px] sm:text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition bg-gray-50 focus:bg-white resize-none"
                      style={{ minHeight: '70px' }}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 group shadow-md shadow-orange-500/20"
                  style={{ minHeight: '44px' }}
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="text-[10px] sm:text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {/* Privacy Note */}
                <p className="text-[6px] sm:text-[8px] text-gray-400 text-center mt-2 sm:mt-3">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-orange-500 hover:underline">Terms of Service</a>
                </p>
              </form>
            </div>

            {/* Map Preview - Mobile optimized */}
            <div className="mt-2 sm:mt-3 bg-white rounded-xl shadow-sm sm:shadow-md p-2 sm:p-3 border border-gray-100">
              <div className="h-16 sm:h-20 bg-gradient-to-r from-orange-50 to-gray-50 rounded-lg flex items-center justify-center text-gray-500 text-[8px] sm:text-[10px]">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-orange-500 text-base sm:text-lg mx-auto mb-0.5 sm:mb-1" />
                  <p className="font-medium text-gray-700 text-[10px] sm:text-xs">📍 Chennai, Tamil Nadu</p>
                  <p className="text-[6px] sm:text-[8px] text-gray-400">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Mobile optimized with expand/collapse */}
        <div className="mt-4 sm:mt-5 bg-white rounded-xl shadow-sm sm:shadow-md p-3 sm:p-4 border border-gray-100">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2 sm:mb-3 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-2">
            {displayedFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="border border-gray-100 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="text-[10px] sm:text-xs font-medium text-gray-800 pr-2">
                    {faq.question}
                  </span>
                  {expandedFaq === faq.id ? (
                    <FaChevronUp className="text-orange-500 text-[8px] sm:text-[10px] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-[8px] sm:text-[10px] flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="px-3 py-2 sm:px-4 sm:py-3 bg-white border-t border-gray-100">
                    <p className="text-[8px] sm:text-[10px] text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View More/Less Button */}
          {faqs.length > 4 && (
            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="w-full mt-2 sm:mt-3 py-2 text-[10px] sm:text-xs text-orange-500 font-medium hover:text-orange-600 transition flex items-center justify-center gap-1"
            >
              <span>{showAllFaqs ? 'Show Less' : 'View More FAQs'}</span>
              <FaArrowRight className={`text-[8px] sm:text-[10px] transition-transform ${showAllFaqs ? 'rotate-90' : ''}`} />
            </button>
          )}
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-3 sm:mt-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-md p-3 sm:p-4 text-center">
          <p className="text-white text-xs sm:text-sm font-medium mb-1">
            Need immediate assistance?
          </p>
          <a 
            href="tel:+917868943703" 
            className="inline-flex items-center gap-1 bg-white text-orange-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-orange-50 transition"
          >
            <FaPhone className="text-[8px] sm:text-[10px]" />
            Call Emergency Support
          </a>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Contact;