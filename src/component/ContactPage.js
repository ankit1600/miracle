import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
        Contact Us
      </h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mt-1 p-2 w-full md:w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="mt-1 p-2 w-full md:w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 p-2 w-full md:w-full border rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write message for Us."
            className="mt-1 p-2 w-full md:w-full border rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#128F8B] text-white p-2 rounded-md hover:bg-[#026b68] w-full md:w-auto"
        >
          Submit
        </button>
      </form>

      {/* Google Map */}
      <div className="mb-8">
        {/* Replace the map embed code with your own */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzA2LjAiTiAwwrAwNycwMC40Ilc!5e0!3m2!1sen!2sus!4v1620214925162!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Details */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Get in touch</h2>

        <p className="mb-2">Phone: +1 123 456 7890</p>
        <p>Email: info@example.com</p>
      </div>

      {/* WhatsApp Button */}
      <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-50% flex alin items-center">
        Contact via WhatsApp{" "}
        <span className="m-2">
          <FaWhatsapp />{" "}
        </span>
      </button>
    </div>
  );
};

export default ContactPage;
