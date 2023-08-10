import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedTime, source} =  this.props;
    return (
      <>
      <div className="card my-3">
      <div>
      <span style = {{zIndex:1, display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}} className="badge rounded-pill bg-danger">{source}</span>
      </div>
      
      <img src={imageUrl} className="card-img-top" alt="News article" />
      <div className="card-body">
        <h5 className="card-title"><strong>{title}</strong></h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
        <p className="card-text"><small className="text-body-secondary">Published by: {author !=null?author:"Unknown"} on {new Date(publishedTime).toGMTString()}</small></p>
      </div>
    </div> 
      </>
    );
  }
}

export default NewsItem;
