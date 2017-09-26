import React, { Component } from "react";

class Results extends Component {

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
                  <button>Save</button> 
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