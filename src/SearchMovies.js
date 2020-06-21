import React from 'react'
console.log(`${process.env.REACT_APP_MOVIES_API}`);
function SearchMovies() {
    const SearchMovies = async (e) => {
        e.preventDefault();
        console.log("submit");
        const query = "Jurassic Park"
        const API_KEY = process.env.REACT_APP_MOVIES_API;
        console.log(API_KEY)
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
    <form className="form" onSubmit={SearchMovies}>
        <label className="label" htmlFor="query" >Movie Name</label>
            <input className="input"
                type="text"
                placeholder="Spider Mans"
                name="query"></input>
        <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies;