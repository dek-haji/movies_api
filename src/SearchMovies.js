import React from 'react'

function SearchMovies() {
    const SearchMovies = async (e) => {
        e.preventDefault();
        console.log("submit")
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