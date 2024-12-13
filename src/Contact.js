import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {MapContainer, TileLayer, Marker, Popup}from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Contact() {
  const MySwal = withReactContent(Swal);
  const [SubMessage, setSubMessage] = useState(false);
  const [Error, setError] = useState({});
  const [Message, setMessage] = useState({
    mail: "",
    email: "",
    Commentx: "",
  });

  function Dont(e) {
    e.preventDefault();
    let NewError = {};
    if (!/^[a-zA-Z\s]{3,}$/.test(Message.mail)) {
      NewError.mail = "Enter a valid full name with at least 3 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Message.email)) {
      NewError.email = "Enter a valid email (e.g., yourname@domain.com).";
    }
    if (!Message.Commentx.trim()) {
      NewError.Commentx = "Message cannot be empty.";
    }
    if (Object.keys(NewError).length > 0) {
      setError(NewError);
      return;
    }
    setError({});

    setSubMessage(true);
    setTimeout(() => {
      setSubMessage(false);
      setMessage({ mail: "", email: "", Commentx: "" });
      MySwal.fire({
        title: "Message",
        text: "Thank you for contacting us, we will get back to you shortly.",
        icon: "success",
      });
    }, 3000);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center p-5">
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg mt-16">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Have any questions? We'd love to hear from you! Please fill out the form below.
          </p>

          <form onSubmit={Dont} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                value={Message.mail}
                onChange={(e) => setMessage({ ...Message, mail: e.target.value })}
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your name"
              />
              {Error.mail && <p className="text-red-500">{Error.mail}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                value={Message.email}
                onChange={(e) => setMessage({ ...Message, email: e.target.value })}
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your email"
              />
              {Error.email && <p className="text-red-500">{Error.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={Message.Commentx}
                onChange={(e) => setMessage({ ...Message, Commentx: e.target.value })}
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Write your message"
              ></textarea>
              {Error.Commentx && <p className="text-red-500">{Error.Commentx}</p>}
            </div>

            {SubMessage ? (
              <div className="w-6 h-6 border-4 border-t-transparent border-sky-400 rounded-full animate-spin mx-auto"></div>
            ) : (
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="mt-10 p-5 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-4">Our Location</h2>
        <MapContainer
          center={[6.465422,3.406448]} // Coordinates for London
          zoom={13}
          scrollWheelZoom={false}
          className="h-96 w-full rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[6.465422,3.406448]}>
            <Popup>
              We are located here! <br /> Come visit us.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
