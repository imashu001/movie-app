import React from 'react';
import {data} from '../data';
import Navbar from './navbar';
import MovieCard from './MovieCard';
import {addMovies, setShowFavourites} from '../actions';

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
  isMovieFavourite=(movie)=> {
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));

  }
  render(){
    const { movies,search } = this.props.store.getState();
    const {list,favourites,showFavourites} = movies; //{list[]}, favourites[]
    console.log('RENDER',this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar dispatch = {this.props.store.dispatch} search={search}/>
        <div className="Main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' :'active-tabs'}`} onClick={ () => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie,index) => (
              <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
              />
            ))}

          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to Display</div> : null }

        </div>
      </div>
    );
 }
}

export default App;
