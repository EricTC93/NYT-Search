import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
  <div className="container">
    <div className="jumbotron text-center">
      <h1>New York Times Search</h1>
      <p>...</p>
    </div>

    <div className="panel panel-default">
      <div className="panel-heading panel-heading-custom">
        <h1 className="panel-title"> Search </h1>
      </div>

      <div className="panel-body">
        <form>
          <div className="form-group">
            <label for="topic">Topic</label>
            <input className="form-control" name="topic" type="text"/>
          </div>

          <div className="form-group">
            <label for="startYear">Start Year</label>
            <input className="form-control" name="startYear" type="text"/>
          </div>

          <div className="form-group">
            <label for="endYear">End Year</label>
            <input className="form-control" name="endYear" type="text"/>
          </div>

          <button className="btn btn-primary" id="search" type="submit">Search</button>

        </form>
      </div>
    </div>

    <div className="panel panel-default">
      <div className="panel-heading panel-heading-custom">
        <h1 className="panel-title"> Results </h1>
      </div>

      <ul>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>

    </div>


    <div className="panel panel-default">
      <div className="panel-heading panel-heading-custom">
        <h1 className="panel-title"> Saved </h1>
      </div>

      <ul>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>

    </div>


  </div>
    );
  }
}

export default App;
