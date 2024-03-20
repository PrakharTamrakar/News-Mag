import React from "react";
import image from "../assets/depositphotos_37765339-stock-photo-news.jpg"

const NewsItem = ({ title, description, url, src }) => {
  return (
      <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 d-inline-block" style={{maxWidth:'300px'}}>
        <img src={src?src:image} style={{height:'150px', width:'282px'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,100):'Information not Available. Do not able to Load Data :'}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
  );
};

export default NewsItem;
