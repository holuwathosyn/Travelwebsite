import { useState } from "react";
import {motion} from "framer-motion"
const Countriex=[
  {id:1,
    Images:"united-kingdom2024.jpg",
    Country:"UNITED kINGDOM",
    price:3000
  },
  {id:2,
    Images:"Spain.jpeg",
    Country:"SPAIN",
    price:5000},
  {id:3,
    Images:"TourItaly.jpg",
    Country:"SPAIN",
    price:9000},
    {id:4,
    Images:"turkey-tour-istanbul-grand-bazaar-2015.jpg",
    Country:"Turkey",
    price:6000},

  {id:5,
    Images:"Japan.jpg",
    Country:"Turkey",
    price:6000},
    {id:4,
    Images:"India  Tour.jpg",
    Country:"Turkey",
    price:6000},
]
const ArrayPackage = [
  {
    id: 1,
    package: "Honeymoon",
    message:
      "Whether you are newlywed or need comfy or exotic places to spend your honeymoon with your partner.",
    ImageX: "814552d850a9ff4f0392cc71d8df1ffe.jpg",
  },
  {
    id: 2,
    package: "Family",
    message: "Pack your bag for fun: Family trip made easy.",
    ImageX: "Turkey.jpg",
  },
  {
    id: 3,
    package: "Parent Tour",
    message: "Make memories that last a lifetime: Trip for all ages.",
    ImageX: "featured_img-4.jpg",
  },
  {
    id: 4,
    package: "Business Trip",
    message: "Achieve more on the go. Professional travel made easy!",
    ImageX:
      "black-man-phone-call-airport-with-travel-work-smile-communication-business-trip-waiting-flight-journey-travelling-job-businessman-has-conversation-with-connectivity_590464-151177.jpg",
  },
  {
    id: 5,
    package: "Group Tour",
    message: "Travel as one: Unforgettable experiences await!",
    ImageX: "germany.jpg",
  },
];

export default function Application() {
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100, // Slide from left or right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      
      <div className="pt-20">
       
        <div className="p-8 bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 lg:p-16 text-white flex flex-col-reverse lg:flex-row items-center justify-between shadow-lg">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl pt-10 sm:text-4xl lg:text-5xl font-extrabold mb-4">
              BOOK & TRAVEL
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
              Explore exotic destinations, connect with new cultures, and enjoy
              personalized services that turn your travel plans into an adventure
              of a lifetime!
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold hover:opacity-90 transition">
              PROMOTION 20% OFF
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center mb-11">
            <img
              src="istockphoto-1437931505-612x612-removebg-preview.png"
              alt="Travel promotion"
              className="w-9/12 max-w-sm lg:max-w-lg rounded-xl shadow-lg"
            />
          </div>
        </div>

       
        <div className="p-8 bg-white rounded-lg shadow-lg mx-auto max-w-5xl mt-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-6 font-sans  text-center">
            {ArrayPackage[currentIndex].package}
          </h2>
          <img 
            src={ArrayPackage[currentIndex].ImageX}
            alt={ArrayPackage[currentIndex].package}
            className="w-full max-w-md mx-auto rounded-lg shadow-md mb-6"
          />
          <p className="text-gray-700 text-center font-sans text-lg mb-4">
            {ArrayPackage[currentIndex].message}
          </p>

      
          <div className="flex justify-center space-x-4">
            {ArrayPackage.map((_, index) => (
              <label
                key={index}
                className={`cursor-pointer p-2 rounded-full border-2 ${
                  currentIndex === index
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="carousel"
                  checked={currentIndex === index}
                  onChange={() => handleRadioChange(index)}
                  className="hidden"
                />
                <span className="w-3 h-3 block bg-blue-500 rounded-full"></span>
              </label>
            ))}
          </div>
        </div>
      </div>
     

         <div className="m-10 p-13">
      <h1 className="text-center p-2 font-bold font-sans text-2xl lg:text-3xl">
        BEST OFFERS
      </h1>
      <p className="text-center p-3">Checkout Our Related Tours</p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 p-2">
        {Countriex.map((now, index) => (
          <motion.div
            key={index}
            className="shadow-xl p-2 rounded-xl m-2 hover:text-white hover:bg-gradient-to-r from-blue-500 via-teal-500 to-green-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animates only once when 20% of the item is visible
            variants={variants}
            custom={index % 2 === 0 ? "left" : "right"} // Alternate sliding directions
          >
            <img src={now.Images} className="w-96 p-3 rounded-xl" alt="" />
            <div className="flex justify-between">
              <p className="pl-5 font-sans p-2 font-bold">{now.Country}</p>
              <span className="text-center p-2 font-bold hover:text-white text-sky-500">
                ${now.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
