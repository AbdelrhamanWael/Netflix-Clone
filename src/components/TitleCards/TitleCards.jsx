import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({ title, category }) => {
  const [apidata , setApidata] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWJmZjk2YjZjN2NmZjJiNDFiYzQxNTcwZWM0MTg0YSIsIm5iZiI6MTc1NzQyMTQwNy41MTcsInN1YiI6IjY4YzAxZjVmZGU2NTYzZmRlYzhjZmEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twyLFPCl8XYCLnJYuKdB4es-fBvPh6iJqFtVA1nNYxE'
    }
  };





  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;

  }
  useEffect(() => {


    fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApidata(res.results))
      .catch(err => console.error(err));

      
    cardsRef.current.addEventListener('wheel', handleWheel);


  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>

        })}
      </div>

    </div>
  )
}

export default TitleCards
