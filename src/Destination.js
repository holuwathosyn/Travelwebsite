import React, { useState } from "react";
import "./Preload.css"
import { motion } from "framer-motion";
import { DivIcon } from "leaflet";
function Application() { 
  
  const DutIE=[
  {
    id:1,
imagex:"Luggage.png",
Intro:"Blue Ribbon",
Display:"We offer global baggage protection on all flight"
  },
  {
   id:2,
imagex:"visa assistance.jpeg",
Intro:"Visa Assistance",
Display:"We offer global baggage protection on all flight"
   
  },


  {
 id:3,
 imagex:"images (3).jpeg",
Intro:"Flight",
  Display:"We are an experts in flight booking!"

}
  ]
  const [ErrorMessage, setErrorMessage] = useState({});
  const [preload,setpreload]=useState(false);
  const [Flight, setFlight] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "",
    classType: "",
  });
  const swipeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  
  const [submittedata,setsubmittedata]=useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFlight((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function Onsubmiter(e) {
    e.preventDefault();
   
    let NewError = {};

    if (!Flight.from.trim()) {
      NewError.from = "Please input where you are coming from.";
    }
    if (!Flight.to.trim()) {
      NewError.to = "Please input where you are going to.";
    }
    if (!Flight.date.trim()) {
      NewError.date = "Please input a valid date.";
    }
    if (!Flight.passengers.trim() || parseInt(Flight.passengers, 10) < 1) {
      NewError.passengers = "Please input the number of passengers (minimum 1).";
    }
    if (!Flight.classType.trim()) {
      NewError.classType = "Please select a class type.";
    }

    if (Object.keys(NewError).length > 0) {
      setErrorMessage(NewError);
      return;
    }
     setpreload(true)
setTimeout(()=>{
  setpreload(false)
   setsubmittedata({...Flight})
    setFlight({
      from: "",
      to: "",
      date: "",
      passengers: "",
      classType: "",
    });
    setErrorMessage({});
   
   },3000)
  }
  

  return (
   <>
      <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 P-9 relative min-h-screen flex flex-col lg:flex-row items-center justify-center p-8">
    
    {preload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="loader"></div>
        </div>
      )}

     {submittedata &&(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center p-10 justify-center z-20">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
<h1 className="text-center text-green-500 font-bold p-3 m-2 font-sans">Your flight options have been received! We'll keep you update</h1>
<p className="p-3 font-serif m-1"> <strong className="font-bold text-black">From</strong>  :{submittedata.from}</p>
<p className="p-3 font-serif m-1">  <strong className="font-bold text-black">To</strong> :{submittedata.to}</p>
<p className="p-3 font-serif m-1">  <strong className="font-bold text-black">Date</strong>:{submittedata.date}</p>
<p className="p-3 font-serif m-1">  <strong className="font-bold text-black">Passenger</strong>:{submittedata.passengers}</p>
<p className="p-3 font-serif m-1">  <strong className="font-bold text-black">Class</strong>:{submittedata.classType}</p>
<button  className="bg-red-500 p-3 m-2 rounded-xl text-white font-bold" onClick={()=>setsubmittedata(null)}>Cancel</button>
          
          </div>
          
</div>

)}

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="british-airways-premium-economy-class-featured-1080x675.webp"
          alt="Airplane"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 p-8 rounded-lg mt-16 shadow-lg z-10 w-full max-w-lg">
        <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold mb-6">
          WHERE WOULD YOU LIKE TO GO?
        </h1>
        <form onSubmit={Onsubmiter} className="space-y-4">
          {/* From Input */}
          <div>
            <label htmlFor="from" className="block text-gray-600 font-medium mb-2">
              From
            </label>
            <input
              type="text"
              name="from"
              value={Flight.from}
              onChange={handleChange}
              placeholder="Enter departure city"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            {ErrorMessage.from && <p className="text-red-600 p-1">{ErrorMessage.from}</p>}
          </div>

          {/* To Input */}
          <div>
            <label htmlFor="to" className="block text-gray-600 font-medium mb-2">
              To
            </label>
            <input
              type="text"
              name="to"
              value={Flight.to}
              onChange={handleChange}
              placeholder="Enter destination city"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            {ErrorMessage.to && <p className="text-red-600 p-1">{ErrorMessage.to}</p>}
          </div>

          
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Date Input */}
            <div className="flex-1">
              <label htmlFor="date" className="block text-gray-600 font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={Flight.date}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              {ErrorMessage.date && <p className="text-red-600 p-1">{ErrorMessage.date}</p>}
            </div>

           
            <div className="flex-1">
              <label htmlFor="passengers" className="block text-gray-600 font-medium mb-2">
                Passengers
              </label>
              <input
                type="number"
                name="passengers"
                value={Flight.passengers}
                onChange={handleChange}
                placeholder="1"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                min="1"
              />
              {ErrorMessage.passengers && <p className="text-red-600 p-1">{ErrorMessage.passengers}</p>}
            </div>
          </div>

          {/* Class Type */}
          <div>
            <label htmlFor="classType" className="block text-gray-600 font-medium mb-2">
              Class Type
            </label>
            <select
              name="classType"
              value={Flight.classType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            >
              <option value="">Select Class</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
            {ErrorMessage.classType && <p className="text-red-600 p-1">{ErrorMessage.classType}</p>}
          </div>


          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition duration-200"
          >
            Search Flights
          </button>
          
        </form>
      </div>
    </div>
    <div className=" ">
       <h1 className="text-center text-2xl font-bold font-sans p-3">OUR SERVICE</h1>
 <div className="m-9 space-y-6 lg:space-y-0 lg:flex lg:flex-wrap justify-center P-3  items-start">
 
      {DutIE.map((index) => (
        <motion.div
          key={index.id}
          className="w-full lg:w-1/3 p-3 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={swipeUpVariants}
        >
          {/* Title */}
          <h1 className="text-center font-bold text-lg p-3 text-gray-800">
            {index.Intro}
          </h1>

          {/* Content Section */}
          <div className="flex items-center p-3">
            {/* Image */}
            <img
              src={index.imagex}
              alt={index.Intro}
              width={120}
              height={120}
              className="mr-4 rounded-full border border-gray-200 shadow-md"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              {index.Display}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  </>
  );
}

export default  Application;