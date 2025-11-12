import React,{useEffect, useState} from 'react'
import BookCards from '../components/BookCards';

const BestSeLLerBooks = () => {
const [books, setBooks] = useState([]);

useEffect( () => {
 fetch("https://book-backend-jade.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
},[])

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSeLLerBooks