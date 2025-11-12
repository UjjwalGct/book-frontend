
// export default BookSearchAndRecommend;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BookSearchAndRecommend = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [allBooks, setAllBooks] = useState([]);

//   // ✅ Fetch all books once for recommendations
//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:5001/all-books");
//         setAllBooks(res.data);
//       } catch (err) {
//         console.error("Error fetching all books:", err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   // ✅ Handle search input
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   // ✅ Perform search on button click
//   const handleSearch = async () => {
//     if (query.trim().length === 0) {
//       alert("Please enter a book name!");
//       return;
//     }

//     try {
//       const res = await axios.get(
//         `http://localhost:5001/api/books/search?q=${query}`
//       );
//       setSuggestions(res.data);
//     } catch (err) {
//       console.error("Search error:", err);
//     }
//   };

//   // ✅ Handle selecting a book from suggestions
//   const handleSelect = (book) => {
//     setSelectedBook(book);
//     setQuery(book.title);
//     setSuggestions([]);
//   };

//   // ✅ Simple content-based recommendations
//   const getRecommendations = () => {
//     if (!selectedBook) return [];
//     return allBooks.filter(
//       (book) =>
//         book._id !== selectedBook._id &&
//         (book.category === selectedBook.category ||
//           book.author === selectedBook.author)
//     );
//   };

//   return (
//     <div
//       style={{
//         width: "450px",
//         margin: "40px auto",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
//         📚 Book Search & Recommendation
//       </h2>

//       <div style={{ display: "flex", gap: "10px" }}>
//         <input
//           type="text"
//           placeholder="🔍 Search books by title, author, or category..."
//           value={query}
//           onChange={handleChange}
//           style={{
//             flex: 1,
//             padding: "10px",
//             fontSize: "16px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           onClick={handleSearch}
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             padding: "10px 15px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           Search
//         </button>
//       </div>

//       {suggestions.length > 0 && (
//         <ul
//           style={{
//             listStyle: "none",
//             padding: "0",
//             margin: "10px 0 0 0",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             maxHeight: "180px",
//             overflowY: "auto",
//             background: "#fff",
//           }}
//         >
//           {suggestions.map((book) => (
//             <li
//               key={book._id}
//               onClick={() => handleSelect(book)}
//               style={{
//                 padding: "10px",
//                 cursor: "pointer",
//                 borderBottom: "1px solid #eee",
//               }}
//             >
//               {book.title} — <i>{book.author}</i>
//             </li>
//           ))}
//         </ul>
//       )}

//       {selectedBook && (
//         <div
//           style={{
//             marginTop: "25px",
//             background: "#f9f9f9",
//             borderRadius: "8px",
//             padding: "15px",
//             boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3>{selectedBook.title}</h3>
//           <p>
//             <strong>Author:</strong> {selectedBook.author}
//           </p>
//           <p>
//             <strong>Category:</strong> {selectedBook.category}
//           </p>
//           <p>{selectedBook.description}</p>

//           <h4 style={{ marginTop: "15px" }}>Recommended Books:</h4>
//           <ul>
//             {getRecommendations().length > 0 ? (
//               getRecommendations().map((book) => (
//                 <li key={book._id}>
//                   {book.title} — <i>{book.author}</i>
//                 </li>
//               ))
//             ) : (
//               <li>No similar books found.</li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookSearchAndRecommend;






import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMicrophone } from "react-icons/fa";

const BookSearchAndRecommend = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [listening, setListening] = useState(false); // 🎤 mic state

  // ✅ Fetch all books once for recommendations
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5001/all-books");
        setAllBooks(res.data);
      } catch (err) {
        console.error("Error fetching all books:", err);
      }
    };
    fetchAllBooks();
  }, []);

  // ✅ Handle search input
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // ✅ Perform search on button click
  const handleSearch = async () => {
    if (query.trim().length === 0) {
      alert("Please enter a book name!");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5001/api/books/search?q=${query}`
      );
      setSuggestions(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  // ✅ Handle selecting a book from suggestions
  const handleSelect = (book) => {
    setSelectedBook(book);
    setQuery(book.title);
    setSuggestions([]);
  };

  // ✅ Simple content-based recommendations
  const getRecommendations = () => {
    if (!selectedBook) return [];
    return allBooks.filter(
      (book) =>
        book._id !== selectedBook._id &&
        (book.category === selectedBook.category ||
          book.author === selectedBook.author)
    );
  };

  // ✅ Mic voice search feature with animation
  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser doesn't support speech recognition. Use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    setListening(true); // start animation

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      handleSearch();
    };

    recognition.onerror = (err) => {
      console.error("Voice error:", err);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false); // stop animation
    };
  };

  return (
    <div
      style={{
        width: "480px",
        margin: "40px auto",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        📚 Book Search & Recommendation
      </h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="🔍 Search books by title, author, or category..."
          value={query}
          onChange={handleChange}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Search
        </button>

        {/* 🎙️ Mic button with animation */}
        <div
          onClick={handleVoiceSearch}
          style={{
            position: "relative",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: listening ? "#ff4d4d" : "#007bff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: listening
              ? "0 0 15px 5px rgba(255, 0, 0, 0.6)"
              : "0 0 6px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          <FaMicrophone color="white" />
          {listening && (
            <span
              style={{
                position: "absolute",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(255,0,0,0.2)",
                animation: "pulse 1.2s infinite ease-in-out",
                zIndex: -1,
              }}
            ></span>
          )}
        </div>
      </div>

      {/* 🔊 Pulse animation */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.7;
          }
        }
      `}</style>

      {suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "10px 0 0 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxHeight: "180px",
            overflowY: "auto",
            background: "#fff",
          }}
        >
          {suggestions.map((book) => (
            <li
              key={book._id}
              onClick={() => handleSelect(book)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {book.title} — <i>{book.author}</i>
            </li>
          ))}
        </ul>
      )}

      {selectedBook && (
        <div
          style={{
            marginTop: "25px",
            background: "#f9f9f9",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{selectedBook.title}</h3>
          <p>
            <strong>Author:</strong> {selectedBook.author}
          </p>
          <p>
            <strong>Category:</strong> {selectedBook.category}
          </p>
          <p>{selectedBook.description}</p>

          <h4 style={{ marginTop: "15px" }}>Recommended Books:</h4>
          <ul>
            {getRecommendations().length > 0 ? (
              getRecommendations().map((book) => (
                <li key={book._id}>
                  {book.title} — <i>{book.author}</i>
                </li>
              ))
            ) : (
              <li>No similar books found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookSearchAndRecommend;
