import React, { Component } from 'react';

export class Movies extends Component {
  displayName = Movies.name

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true, selectedMovie:{}, deleteMove:{}};

    fetch('api/movies/Search')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data, loading: false });
        console.log(data)
      });
  }

  movieEdi = (id) => {
    console.log(id)
    this.props.history.push(`/movies/${id}`)

  } 

  movieDelete = (id) => {
    console.log(id)

  } 

  renderMoviesTable() {
      return (
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie =>
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.published}</td>
              <td>{movie.price}</td>
              <td>  
                <a className="action" onClick={() => this.movieEdi(movie.id) }>Edit</a>  |  
                <a className="action" onClick={() => this.movieDelete(movie.id)}>Delete</a>  
              </td>  
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderMoviesTable() ;

    return (
      <div>
        <h1>Weather forecast</h1>
        <a className="action" onClick={() => this.props.history.push("/movies/new") } >New</a>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
