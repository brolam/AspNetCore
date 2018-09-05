import React, { Component } from 'react';

export class MovieEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
        console.log(props)
        console.log(props.match.params.id)
        fetch('api/movies/' + props.match.params.id, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                this.setState({ movie: data, loading: false });
                console.log(data)
            });
    }

    handleSave = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('api/movies/' + this.state.movie.id, {
            method: 'PUT',
            body: data
        }).then(res => this.props.history.push("/Movies"))
    }

    render() {
        if (this.state.loading ) return (
            <div>
                <h1>Edit Movie</h1>
                <p><em>Loading...</em></p>
            </div>
        )
        const movie = this.state.movie
        return (
            <div>
                <h1>Edit Movie</h1>
                <form onSubmit={this.handleSave} >
                   <input type="hidden" name="id" value={movie.id} />  
                    <div className="form-group">
                        <label for="inputTitle">Movie</label>
                        <input
                            type="text"
                            name="Title"
                            className="form-control" id="inputTitle"
                            aria-describedby="titleHelp"
                            placeholder="Enter with a move title"
                            defaultValue={movie.title}
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
                            defaultValue={movie.published}
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
                            defaultValue={movie.price}
                        />
                    </div>
                    <button type="Submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )

    }


}
