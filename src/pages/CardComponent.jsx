import React from "react";

const CardComponent = ({ imgSrc, title, text, link }) => {
  return (
    <div
      className="card shadow-lg p-3 mb-3 text-center mx-auto"
      style={{ width: "23rem", backgroundColor: "#fff", color: "#000" }}
    >
      {/* Only render the image if provided */}
      {imgSrc && (
        <img
          src={imgSrc}
          className="card-img-top mb-3"
          alt="Card"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
