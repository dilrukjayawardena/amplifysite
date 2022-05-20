import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import FilmCard from './FilmCard';

const API_URL = 'https://0fhnl08j5d.execute-api.eu-west-1.amazonaws.com/filmApiFunction';

function App() {
    const movie1={"Director": {"S": "Lisa"}, "FilmTitle": {"S": "Fedup"}}
    const [films, setFilms] = useState([])
    const movieList = async() => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setFilms(data)
        console.log(data);
    };
    useEffect(() => {
        movieList();
    }, []);

    return (
      <div className = "App">
        <h1> Movie Flix </h1>
        {
          films?.length > 0 
          ? (        
          <div className='container'>
            {films.map((film) => (
              <FilmCard movie={film}/>
            ))}
          </div>
        ):
        (
          <div>
            <p>Movies not found</p>
          </div>
        )
        }

      </div>
    );
}

export default App;