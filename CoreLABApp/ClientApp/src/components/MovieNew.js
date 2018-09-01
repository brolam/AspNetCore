import React, { Component } from 'react';

export function MovieNew() {
    var title = ""
    var published = Date.now
    var price = 0.9
    const postNewMovie = () => {
        fetch('api/movies/new', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, published, price })
        }).then(res => console.log(res))
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="inputTitle">Movie</label>
                    <input
                        onChange={(value) => { title = value }}
                        type="text"
                        className="form-control" id="inputTitle"
                        aria-describedby="titleHelp"
                        placeholder="Enter with a move title"
                    />
                    <small id="titleHelp" className="form-text text-muted">like Aton</small>
                </div>
                <div className="form-group">
                    <label for="inputPublished">Published Date</label>
                    <input
                        onChange={(value) => { published = value }}
                        type="Date" className="form-control" id="inputPublished"
                        placeholder="Enter with Movie Published Date"
                    />
                </div>
                <div className="form-group">
                    <label for="inputPrice">Price</label>
                    <input
                        onChange={(value) => { price = value }}
                        type="number" className="form-control" id="inputPrice"
                        placeholder="Enter with Movie Price"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={ () => postNewMovie()} >Submit</button>
            </form>
        </div>
    )
}
