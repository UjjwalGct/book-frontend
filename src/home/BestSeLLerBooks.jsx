// import React,{useEffect, useState} from 'react'
// import BookCards from '../components/BookCards';

// const BestSeLLerBooks = () => {
// const [books, setBooks] = useState([]);

// useEffect( () => {
//  fetch("https://book-backend-jade.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
// },[])

//   return (
//     <div>
//       <BookCards books={books} headline="Best Seller Books"/>
//     </div>
//   )
// }

// export default BestSeLLerBooks


import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSeLLerBooks = () => {
  const [books, setBooks] = useState([]);

  // ✅ Automatically use localhost when developing, or vercel when deployed
  const API_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5001" // your local backend port (change if needed)
      : "https://book-backend-jade.vercel.app";

  useEffect(() => {
    fetch(`${API_URL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)))
      .catch((err) => console.error("Error fetching books:", err));
  }, [API_URL]);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSeLLerBooks;
