import React from 'react';
import {data} from '../data';
import Navbar from './navbar';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {data.map(movie => (
            <MovieCard movie={movie} />
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
