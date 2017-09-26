import React, { Component } from "react";
import API from "../utils/savedArticlesAPI.js";

class Results extends Component {

  // How can you re-render the Saved component after a new article is added to the database
  saveArticle = data => {
    API.saveArticle(data)
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading panel-heading-custom">
          <h1 className="panel-title"> Results </h1>
        </div>

        {this.props.found.length ? (
            <ul>
              {this.props.found.map(article => (
                <li> 
                  <p> {article.title} </p>
                  <p> {article.url} </p>
                  <button onClick={() => this.saveArticle({title:article.title, url:article.url})}>Save</button> 
                </li>
              ))}
            </ul>
          ) : (
            <h3>No Articles Found</h3>
          )
        }

      </div>
    );
  }
} 

export default Results;