import React from 'react';
// import { data } from '../data';
import {addMovieToList,handleMovieSearch} from '../actions';
 

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
     
        };
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie))
        this.setState({
            showSearchResults:false,
        })
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));

    };
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    };

    render () {
        // const { showSearchResults } = this.state;
        const { result:movie,showSearchResults  } = this.props.search;
        return (
            <div className="nav">
              <div className="search-container">
                  <input onChange={this.handleChange}/>
                  <button id="search-btn" onClick={this.handleSearch}>Search</button>
                  {showSearchResults &&
                    <div className="search-results">
                        <div className="search-result">
                            <img src={movie.Poster} alt = "Search-Pic" />
                            <div className="movie-info">
                                <span>{movie.Title}</span>
                                <button onClick={() => this.handleAddToMovies(movie)}>
                                    ADD TO MOVIES
                                </button>
                            </div>

                        </div>
                    </div>
                  }

              </div>
            </div>
          );
        
    }
  
}

export default Navbar;