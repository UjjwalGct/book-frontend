

// export default Banner;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mic } from "lucide-react";
import BannerCard from "../home/BannerCard";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/hero-bg-tech-DqFzoj5o.jpg";


const Banner = ({ onSearch }) => {
  const [isListening, setIsListening] = useState(false);
  const [query, setQuery] = useState("");

  //type 2 voice search

  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition. Please use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    // 🎙️ Mic starts listening — show animation
    recognition.onstart = () => {
      console.log("🎤 Voice recognition started...");
      setIsListening(true); // <-- for animation
    };

    // 🛑 Mic stops listening — remove animation
    recognition.onend = () => {
      console.log("🛑 Voice recognition stopped.");
      setIsListening(false);
    };

    // ✅ Get speech result and trigger search
    recognition.onresult = (event) => {
      const voiceQuery = event.results[0][0].transcript;
      console.log("You said:", voiceQuery);

      setQuery(voiceQuery); // update input box
      handleSearch(voiceQuery); // trigger search
    };

    // 🚀 Start listening
    recognition.start();
  };


//   const handleVoiceSearch = () => {
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//   if (!SpeechRecognition) {
//     alert("Your browser does not support speech recognition. Please use Chrome or Edge.");
//     return;
//   }

//   const recognition = new SpeechRecognition();
//   recognition.lang = "en-IN";

//   recognition.onstart = () => {
//     console.log("🎤 Voice recognition started...");
//   };

//   recognition.onresult = (event) => {
//     const voiceQuery = event.results[0][0].transcript;
//     console.log("You said:", voiceQuery);
//     setQuery(voiceQuery);
//     handleSearch(voiceQuery); // ✅ Automatically search from voice
//   };

//   recognition.onerror = (event) => {
//     console.error("Voice recognition error:", event.error);
//     alert("Error using voice input. Please try again.");
//   };

//   recognition.onend = () => {
//     console.log("🎤 Voice recognition ended.");
//   };

//   recognition.start();
// };



  //handle text search

  const navigate = useNavigate(); // ✅ initialize

  const handleSearch = async () => {
    
    if (query.trim() === "") {
      alert("Please enter a book name to search.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5001/books?search=${query.trim()}`);
      const text = await res.text();
      console.log("Raw response:", text);

      const data = JSON.parse(text);

      // ✅ Navigate using book title (not _id)
      if (data && data.bookTitle) {
        navigate(`/book/${encodeURIComponent(data.bookTitle)}`);
      } else {
        alert("No book found with that title!");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      alert("Something went wrong while searching. Please try again.");
    }
  };



// const handleSearch = async (voiceQuery) => {
//   const searchTerm = voiceQuery || query.trim(); // use voice input if available

//   if (searchTerm === "") {
//     alert("Please enter a book name to search.");
//     return;
//   }

//   try {
//     const res = await fetch(`http://localhost:5001/books?search=${searchTerm}`);
//     const text = await res.text();
//     console.log("Raw response:", text);

//     const data = JSON.parse(text);

//     if (data && data.bookTitle) {
//       navigate(`/book/${encodeURIComponent(data.bookTitle)}`);
//     } else {
//       alert("No book found with that title!");
//     }
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     alert("Something went wrong while searching. Please try again.");
//   }
// };




//type 3

// const handleSearch = async (voiceQuery) => {
//   // ✅ Convert to string safely to avoid .trim() errors
//   const rawSearch = voiceQuery !== undefined ? voiceQuery : query;
//   const searchTerm = String(rawSearch || "").trim();

//   if (!searchTerm) {
//     alert("Please enter or speak a book name to search.");
//     return;
//   }

//   try {
//     const res = await fetch(`http://localhost:5001/books?search=${encodeURIComponent(searchTerm)}`);
//     const text = await res.text();
//     console.log("Raw response:", text);

//     const data = JSON.parse(text);

//     if (data && data.bookTitle) {
//       navigate(`/book/${encodeURIComponent(data.bookTitle)}`);
//     } else {
//       alert(`No book found with title: ${searchTerm}`);
//     }
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     alert("Something went wrong while searching. Please try again.");
//   }
// };




//background

      {/* <div className="absolute inset-0">
  <img
    src="/assets/hero-bg-tech-DqFzoj5o.jpg"
    alt="Software services background"
    className="w-full h-full object-cover"
  />
  
  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-background/90 dark:via-background/80 dark:to-background/90"></div>
  
  <div className="absolute inset-0 opacity-20 dark:opacity-30">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
</div> */}


  // ✅ UI

  
  return (
    <div className="bg-gradient-to-r from-teal-100 via-white to-blue-100 px-4 sm:px-8 md:px-12 lg:px-24 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden">

      {/* Left Section */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          Buy, Sell & Discover{" "}
          <span className="text-blue-700">Books That Inspire</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 text-sm sm:text-base md:text-lg md:w-4/5 mx-auto md:mx-0"
        >
          Find new and used books from readers like you. Build your personal
          library, exchange your favorites, and explore knowledge at your fingertips.
        </motion.p>

        {/* ✅ Search + Voice Section (Visible Now) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-0"
        >
          {/* 🔍 Input Field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books by title, author, or genre..."
            className="w-full sm:w-72 md:w-80 lg:w-96 py-3 px-4 rounded-md sm:rounded-l-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />

          {/* 🔍 Search Button */}
          <button
            onClick={handleSearch}
            className="mt-2 sm:mt-0 sm:ml-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md sm:rounded-none transition-all duration-200 w-full sm:w-auto"
          >
            <Search size={18} />
            <span>Search</span>
          </button>



          {/* 🎤 Voice Search Button */}

          <motion.div
            onClick={handleVoiceSearch}
            animate={{
              scale: isListening ? [1, 1.3, 1] : 1,
              opacity: isListening ? [1, 0.5, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: isListening ? Infinity : 0,
            }}
            style={{
              backgroundColor: isListening ? "#ff4d4d" : "#007bff",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <Mic color="white" size={20} />
          </motion.div>

        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="md:w-1/2 w-full flex justify-center"
      >
        <div className="w-4/5 sm:w-3/5 md:w-full max-w-sm md:max-w-lg">
          <BannerCard />
        </div>
      </motion.div>
    </div>








          );
  
};

export default Banner;
