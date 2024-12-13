import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import withReactContent from "sweetalert2-react-content";




const reviews = [
  {
    feedback: "Amazing experience! The destinations were breathtaking, and the service was top-notch.",
    name: "Jane Doe",
    location: "New York, USA",
    pic:"download (3).jpeg"
  },
  {
    feedback: "The best travel company I've ever used. Highly recommended for your next adventure!",
    name: "John Smith",
    location: "London, UK",
    pic:"istockphoto-1437931505-612x612.jpg"
  },
  {
    feedback: "Affordable prices and great customer support. I'm already planning my next trip!",
    name: "Aisha Bello",
    location: "Lagos, Nigeria",
    pic:"actively.jpg"
  },
];

const items = [
  {
    id: 1,
    image: "/unnamed.jpg", // Ensure this image path is correct
    title: "Experience the world like never before!",
    description:
      "At 0399 Travels and Tour, we believe that travel should be accessible and enjoyable for everyone.",
    button: "About Us",
  },
  {
    id: 2,
    image: "/Dubai-Tourist-visa-grace-period.jpg",
    title: "Explore exotic destinations.",
    description:
      "Let us take you on a journey where every detail is taken care of, allowing you to experience the world in a way that's enriching and enjoyable.",
    button: "Book a Service",
  },
  {
    id: 3,
    image: "/AdobeStock_597345782_Editorial_Use_Only-1536x1024.jpeg",
    title: "Affordable trips, unforgettable experiences.",
    description: "Enjoy hassle-free bookings and journeys tailored to your dreams.",
    button: "About Us",
  },
  {
    id: 4,
    image: "72850-Leeds.jpg",
    title: "Journey Beyond Borders with 0399 Travels",
    description:
      "We believe every journey should be extraordinary. Whether you're dreaming of sun-kissed beaches, bustling cities, or peaceful retreats, we’re here to make it happen.",
    button: "Learn More",
  },
];
const TOPcountriex=[
  {id:1,
    imagex:"IMG-7325.JPG",
    Locationx:"London",

  },

  {id:2,
    imagex:"IMG-7328.JPG",
    Locationx:"Finland",

  },

  {id:3,
    imagex:"IMG-7327.JPG",
    Locationx:"Ausralia",

  },
  
  {id:4,
    imagex:"qUEBEC.jpg",
    Locationx:"Canada",

  },


  {id:5,
    imagex:"brixton-snow-feb-2012-01.jpg",
    Locationx:"Scotland",

  },
  
  {id:5,
    imagex:"Dubai-Tourist-visa-grace-period.jpg",
    Locationx:"Dubai",
  },
  {id:6,
    imagex:"america.webp",
    Locationx:"America"
  }



]
export default function Home() {

  const [error, setError] = useState("");
const [Subscribe, setSubscribe] = useState(""); 
const [preload,setpreload]=useState(false)
const MySwal = withReactContent(Swal);

function Stoper(e) {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  setError("");


  if (!Subscribe.trim()) {
    setError("Enter your email");
    return; 
  }

  if (!emailRegex.test(Subscribe)) {
    setError("Invalid email format");
    return; 
  }
 setpreload(true);

    setTimeout(() => {
      setpreload(false);
      setSubscribe("");
      MySwal.fire({
        title: "Newsletter",
        text: "You have subscribed to our mail!",
        icon: "success",
      });
    }, 3000);
   };

 

  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
const [TopCount,setTopCount]=useState(0);

function prev(){
setTopCount((Next)=> (Next-1)%TOPcountriex.length)
}

function Next(){
setTopCount((Next)=> (Next+1)%TOPcountriex.length)
}
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slider */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            {items.map((item, index) =>
              index === current ? (
                <motion.div
                  key={item.id}
                  className="absolute w-full h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  p-2 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
                    <motion.h1 
                      className="text-3xl p-9 md:text-5xl font-bold text-white font-serif"
                      initial={{ y: -50, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl font-bold p-3 m-1 text-gray-200 mt-4 max-w-2xl"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                    >
                      {item.description}
                    </motion.p>
                    {item.button && (
                      <motion.button
                        className="mt-6 px-6 py-3  bg-gradient-to-r from-sky-400 to-teal-600       text-white text-lg font-serif font-medium rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        {item.button}
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-16 z-10">
      <div  className="bg-gradient-to-r from-sky-400 to-teal-600 p-3 rounded-xl m-1">
          <FaArrowLeft  className="text-white  font-bold text-2xl"
         onClick={prevSlide}
          >
           
          </FaArrowLeft>
          </div>
          <div  className="bg-gradient-to-r from-sky-400 to-teal-600   p-3 rounded-xl m-1">
          <FaArrowRight   className="text-white  font-bold text-2xl"
           onClick={nextSlide}
          >
         
          </FaArrowRight>
          </div>
        </div>
      </div>

     
      <div className="p-10 py-10 px-6 text-center shadow-lg">
        <h1 className="text-4xl  p-3 inline border-b-4 border-sky-400 font-bold text-gray-800">
          Our Expertise
        </h1>
        <p className="mt-4 text-gray-600  font-serif  mb-3  p-5 gap-2 m-2">
          At 0399 Travel and Tours, we specialize in creating safe, seamless, and unforgettable travel experiences, ensuring every journey is a cherished adventure.
        </p>
      
       <div className="flex flex-col lg:flex-row m-6 p-4 lg:p-18 gap-8 lg:gap-12 ">
    
      <motion.div
        className="flex flex-col items-center text-center lg:p-10 bg-white shadow-md rounded-lg w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="1693241541711.jpg"
          alt="Visa Processing"
          className="w-48 lg:w-56 h-48 lg:h-56 object-cover rounded-full shadow-md mb-6"
        />
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Visa Processing
        </h3>
        <p className="text-gray-600 text-base  lg:text-lg leading-relaxed mb-6">
          At 3060, we recognize the importance of seamless travel. Our visa services simplify the application process, ensuring smooth and efficient processing.
        </p>
        <button className="px-8 py-3 lg:px-10 lg:py-4 bg-teal-500 text-white text-base lg:text-lg rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
          Contact Us
        </button>
      </motion.div>

      {/* Trip Planning */}
      <motion.div
        className="flex flex-col items-center text-center p-6 lg:p-10 bg-white shadow-md rounded-lg w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="fposter_small_wall_texture_product_750x1000.u5-removebg-preview.png"
          alt="Trip Planning"
          className="w-48 lg:w-56 h-48 lg:h-56 object-cover rounded-full shadow-md mb-6"
        />
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Trip Planning
        </h3>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
          Simplify your trip planning with our expert team, ensuring every detail is handled while you focus on creating unforgettable memories.
        </p>
        <button className="px-8 py-3 lg:px-10 lg:py-4 bg-teal-500 text-white text-base lg:text-lg rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
          Learn More
        </button>
      </motion.div>

      {/* Flight Tickets */}
      <motion.div
        className="flex flex-col items-center text-center p-6 lg:p-10 bg-white shadow-md rounded-lg w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src="air-ticketing-query-500x500.webp"
          alt="Flight Tickets"
          className="w-48 lg:w-56 h-48 lg:h-56 object-cover rounded-full shadow-md mb-6"
        />
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Flight Tickets
        </h3>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
          Let us handle flight logistics while you focus on enjoying your journey. Your travel dreams, simplified!
        </p>
        <button className="px-8 py-3 lg:px-10 lg:py-4 bg-teal-500 text-white text-base lg:text-lg rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
          Learn More
        </button>
      </motion.div>
    </div>
     </div>
    
 <div className="container mx-auto p-4">
      {/* Top Destinations Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Top Destinations
      </motion.h1>

      
      
       <p className="text-center text-gray-600 md:ml-4 font-serif font-bold mb-3">
          Take a glance at some of our top travel offers this season. </p>
       
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={TOPcountriex[TopCount].imagex}
          alt="Top Destination"
          className="w-full rounded-xl p-2 shadow-md"
        />
        <p className="text-center text-2xl text-gray-800 font-medium p-3">
          {TOPcountriex[TopCount].Locationx}
        </p>

        <div className="flex gap-5 justify-center m-7">
          <button
            onClick={prev}
            className="bg-sky-400 p-3 rounded-xl text-white font-bold shadow-md hover:bg-sky-500 transition duration-300"
          >
            Previous
          </button>
          <button
            onClick={Next}
            className="bg-sky-400 p-3 rounded-xl text-white font-bold shadow-md hover:bg-sky-500 transition duration-300"
          >
            Next
          </button>
        </div>
      </motion.div>

      {/* Customer Reviews Section */}
      <motion.div
        className="container mx-auto p-6 m-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl text-sky-500 text-center mb-3">Customer Reviews</h1>
        <p className="text-center font-sans font-bold text-gray-700 mb-6">
          What our customers are saying
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((Clientx, index) => (
            <motion.div
              key={index}
              className="shadow-xl rounded-xl p-5 bg-white hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-serif italic p-3 text-gray-600">{Clientx.feedback}</p>
              <img
                src={Clientx.pic}
                alt="Customer"
                className="rounded-xl p-1 mx-auto"
                width={500}
                height={250}
              />
              <p className="text-xl text-center p-2 m-3 text-gray-500">{Clientx.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Subscription Section */}
      <motion.div
        className="flex items-center justify-center p-4 bg-gray-50 mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full rounded-xl p-5 max-w-md shadow-lg bg-white">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">
            For the latest updates, subscribe to our daily email:
          </h3>
           
          <form onSubmit={Stoper}> 
         
          <input
            className="w-full border rounded-xl p-3 mb-4 focus:outline-none focus:ring focus:ring-sky-300"
            type=""
            placeholder="Enter your email" value={Subscribe} onChange={(e)=>setSubscribe(e.target.value)}
          />
             {error && <p className="text-red-600 p-3">{error}</p>}
            {/* Spinner or Button */}
        {preload ? (
          <div className="w-6 h-6 border-4 border-t-transparent border-sky-400 rounded-full animate-spin mx-auto"></div>
        ) : (
          <button
            type="submit"
            className="bg-sky-400 text-white p-3 rounded w-full font-bold hover:bg-sky-500 transition duration-300"
          >
            Subscribe
          </button>
        )}
          </form>
      
        </div>
      </motion.div>
    </div>    </>);
}




