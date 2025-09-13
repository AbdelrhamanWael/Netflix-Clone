import React, { useEffect , useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useParams , useNavigate} from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apidata , setApidata] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  });
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWJmZjk2YjZjN2NmZjJiNDFiYzQxNTcwZWM0MTg0YSIsIm5iZiI6MTc1NzQyMTQwNy41MTcsInN1YiI6IjY4YzAxZjVmZGU2NTYzZmRlYzhjZmEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twyLFPCl8XYCLnJYuKdB4es-fBvPh6iJqFtVA1nNYxE'
  }
};
useEffect(() =>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApidata(res.results[0]))
  .catch(err => console.error(err));
},[id])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={handleBack} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder="0"  allowFullScreen >
        
      </iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.typeof}</p>
      </div>
    </div>
  )
}

export default Player
