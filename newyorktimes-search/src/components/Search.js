import React, { Component } from "react";
import Results from "./Results.js"
import axios from "axios";

class Search extends Component {
  state = {
    searchedArticles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      this.searchNYT();
    }
  };

  searchNYT () {
    // This variable will be pre-programmed with our authentication key
    // (the one we received when we registered)
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    // These variables will hold the results we get from the user's inputs via HTML
    let searchTerm = this.state.topic;
    const limitResults = 5;
    let startYear = this.state.startYear;
    let endYear = this.state.endYear;

    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    console.log(queryURL);

    let found = [];

    axios({
      method:'get',
      url:queryURL,
      responseType:'json'
    // }).then(this.resolveSearch.bind(this))
    }).then(function(NYTData) {
      // console.log(NYTData.data.response.docs[0]);
      let res = NYTData.data.response.docs;
      
      for (let i = 0; i < limitResults && i < res.length; i++) {
        found.push({
          title: res[i].headline.main,
          url: res[i].web_url
        });
      }
      console.log(found);

      this.setState({
        searchedArticles: found,
        topic: "",
        startYear: "",
        endYear: ""
      });
      
    }.bind(this));

  }

  // resolveSearch (NYTData) {
  //   let found = [];
  //   let res = NYTData.data.response.docs;
  //   console.log(this);
      
  //   for (let i = 0; i < 5 && i < res.length; i++) {
  //     found.push({
  //       title: res[i].headline.main,
  //       url: res[i].web_url
  //     });
  //   }
      
  //   console.log(found);
  // }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading panel-heading-custom">
            <h1 className="panel-title"> Search </h1>
          </div>

          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input className="form-control" name="topic" type="text" 
                onChange={this.handleInputChange}
                value={this.state.topic}/>
              </div>

              <div className="form-group">
                <label htmlFor="startYear">Start Year</label>
                <input className="form-control" name="startYear" type="text" 
                onChange={this.handleInputChange}
                value={this.state.startYear}/>
              </div>

              <div className="form-group">
                <label htmlFor="endYear">End Year</label>
                <input className="form-control" name="endYear" type="text" 
                onChange={this.handleInputChange}
                value={this.state.endYear}/>
              </div>

              <button className="btn btn-primary" id="search" type="submit" 
              disabled={!(this.state.topic && this.state.startYear && this.state.endYear)} 
              onClick={this.handleFormSubmit}>Search</button>

            </form>
          </div>
        </div>

        <Results found={this.state.searchedArticles}/>
      </div>
    );
  }
}

export default Search;