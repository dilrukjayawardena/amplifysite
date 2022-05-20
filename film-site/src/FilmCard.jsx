import React from "react"

const FilmCard = ({movie}) => {
  return (
    <div className='movie'>
      <p>{movie['Director']['S']}</p>
      <div>
        <img src='https://via.placeholder.com/400'></img>
      </div>
      <div>
        <h3>{movie['FilmTitle']['S']}</h3>
      </div>
    </div>
  );
}

export default FilmCard;