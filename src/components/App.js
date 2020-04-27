import React from 'react';
import {data} from '../data';
import Navbar from './navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';

class App extends React.Component {
  componentDidMount(){
    // dispatch action
    const { store }= this.props;
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();

    })
    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState());
  }
  render(){
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar/>
        <div className="Main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie,index) => (
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}

          </div>

        </div>
      </div>
    );
 }
}

export default App;
