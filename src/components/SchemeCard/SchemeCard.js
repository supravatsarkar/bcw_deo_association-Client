import React from "react";

const SchemeCard = (props) => {
  const { img, name, description } = props.scheme;
  return (
    <div class="col">
      <div class="card h-100 shadow">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <button className="btn btn-outline-secondary btn-sm">
              Read More
            </button>{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
