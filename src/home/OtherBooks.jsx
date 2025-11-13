


// import React, { useEffect, useState } from 'react';
// import BookCards from '../components/BookCards';

// const OtherBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("https://book-backend-jade.vercel.app/all-books")
//       .then(res => res.json())
//       .then(data => setBooks(data.slice(0, 8)))
//       .catch(err => console.error("Error fetching books:", err)); // optional error handling
//   }, []);

//   return (
//     <div>
//       <BookCards books={books} headline="Other Books" />
//     </div>
//   );
// };

// export default OtherBooks;




import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  // ✅ Automatically choose backend based on environment
  const API_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5001" // your local backend URL (change port if different)
      : "https://book-backend-jade.vercel.app"; // your Vercel backend URL

  useEffect(() => {
    fetch(`${API_URL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)))
      .catch((err) => console.error("Error fetching books:", err));
  }, [API_URL]);

  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
