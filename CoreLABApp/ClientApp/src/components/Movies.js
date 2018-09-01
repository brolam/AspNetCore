import React, { Component } from 'react';

export class Movies extends Component {
  displayName = Movies.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/movies/Search')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
        console.log(data)
      });
  }

  static renderForecastsTable(forecasts) {
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
          {forecasts.map(movie =>
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.published}</td>
              <td>{movie.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Movies.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <a href="/Movies/new">New</a>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
