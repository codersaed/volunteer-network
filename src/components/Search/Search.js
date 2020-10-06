import React from 'react';

const Search = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-uppercase mt-5 font-weight-bold">i grow by helping pepole in need</h1>
                <form className="form-inline d-flex justify-content-center my-4 py-4">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>    
        </>
    );
};

export default Search;