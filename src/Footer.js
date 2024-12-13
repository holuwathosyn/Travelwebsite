import React from "react";
import "./Footer.css"
export default function Footer() {
  const snowflakes = Array.from({ length: 200 });
const date=new Date().getFullYear()
;  return (
    <footer className="bg-sky-600 text-white relative overflow-hidden">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
       
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are committed to providing you with the best travel and tour experiences.
          </p>
        </div>
       
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>  
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-xl hover:text-sky-300 transition duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-xl hover:text-sky-300 transition duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-xl hover:text-sky-300 transition duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-xl hover:text-sky-300 transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
     
      <div className="text-center bg-sky-700 py-4 text-sm">
        &copy; <span>{date}</span> 0399 Travels and Tours | Developed by Thosyn ❤️
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        {snowflakes.map((_, index) => (
          <div
            key={index}
            className="snowflake absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>
    </footer>
  );
}
