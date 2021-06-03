import React from "react";

function Search() {
    return (
        <nav className="navbar navbar-light bg-light d-flex justify-content-center mt-3 mb-3">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default Search;