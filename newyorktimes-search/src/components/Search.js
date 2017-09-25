import React from "react";
import Results from "./Results"

const Search = () =>
  <div>
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

    <Results />
  </div>;

  export default Search;