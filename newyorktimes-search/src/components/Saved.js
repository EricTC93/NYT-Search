import React, { Component } from "react";
import API from "../utils/savedArticlesAPI.js";

class Results extends Component { 

  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading panel-heading-custom">
          <h1 className="panel-title"> Saved </h1>
        </div>

        {console.log(`Number of saved articles: ${this.state.articles.length}`)}
        {this.state.articles.length ? (
          <ul>
            {this.state.articles.map(article => (
              <li key={article._id}> 
                <p> {article.title} </p>
                <p> {article.url} </p>
                <p> {article.date} </p>
                <button onClick={() => this.deleteArticle(article._id)}>Delete</button> 
              </li>
            ))}
          </ul>
        ) : (
          <h3>No Saved Articles</h3>
        )}

      </div>
    );
  }
} 

export default Results;