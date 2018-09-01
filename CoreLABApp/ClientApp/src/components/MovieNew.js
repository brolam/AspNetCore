import React from 'react';

export function MovieNew(props) {
    const handleSave = (event) => {
        event.preventDefault();  
        const data = new FormData(event.target); 
        fetch('api/movies/new', {
            method: 'POST',
            body: data
        }).then(res => props.history.push("/Movies") )
    }

    return (
        <div>
            <form onSubmit={handleSave} >
                <div className="form-group">
                    <label for="inputTitle">Movie</label>
                    <input
                        type="text"
                        name="Title"
                        className="form-control" id="inputTitle"
                        aria-describedby="titleHelp"
                        placeholder="Enter with a move title"
                    />
                    <small id="titleHelp" className="form-text text-muted">like Aton</small>
                </div>
                <div className="form-group">
                    <label for="inputPublished">Published Date</label>
                    <input
                        type="Date" 
                        name="Published"
                        className="form-control" 
                        id="inputPublished"
                        placeholder="Enter with Movie Published Date"
                    />
                </div>
                <div className="form-group">
                    <label for="inputPrice">Price</label>
                    <input
                        type="number" 
                        name="Price"
                        className="form-control" 
                        id="inputPrice"
                        placeholder="Enter with Movie Price"
                    />
                </div>
                <button type="Submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
