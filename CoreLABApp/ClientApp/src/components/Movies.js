import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { MovieDelete}  from './MovieDelete'

export class Movies extends Component {
  displayName = Movies.name

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true, selectedMovie:{}, deleteMove:null};

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

  renderMoviesTable() {
      return (
        <div>
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
                <Button className="btn btn-link" onClick={() => this.movieEdi(movie.id) }>Edit</Button>  
                <Button className="btn btn-link" onClick={() => this.setState({deleteMove:movie})}>Delete</Button>  
              </td>  
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderMoviesTable() ;

    return (
      <div>
        <h1>Weather forecast</h1>
        <Button type="button" className="btn btn-link" onClick={() => this.props.history.push("/movies/new") } >New</Button>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
        {this.state.deleteMove != null && MovieDelete({movie:this.state.deleteMove, history:this.props.history }) }
      </div>
    );
  }
}
