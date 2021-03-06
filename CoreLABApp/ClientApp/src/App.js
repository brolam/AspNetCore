import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Movies } from './components/Movies';
import { MovieNew } from './components/MovieNew'
import { MovieEdit } from './components/MovieEdit'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/movies/new' component={MovieNew} />
        <Route exact path='/movies/:id(\d+)' component={MovieEdit} />
      </Layout>
    );
  }
}
