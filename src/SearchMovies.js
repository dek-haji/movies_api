import React, {useState,}from 'react'
import MovieCard from "./MovieCard.js"



function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMOvies] = useState([]);
    const SearchMovies = async (e) => {
        e.preventDefault();
        const API_KEY = process.env.REACT_APP_MOVIES_API;
        console.log(API_KEY)
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            setMOvies(data.results)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
        <form className="form" onSubmit={SearchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
           <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                  <MovieCard movie={movie} key={movie.id}/> 
                ))}
        </div>
            </>
    )
}

export default SearchMovies;