import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { activity_name, img, about, age, time } = props.activity;
  const { handelAddToList, activity } = props;

  return (
    <div>
      <div className="col h-100 bg-light rounded ">
        <div className="card h-100 bg-light">
          <img src={img} className="card-img-top p-1 rounded" alt="" />
          <div className="card-body text-start">
            <h5 className="card-title fw-bold">{activity_name}</h5>
            <p className="card-text">
              <small>{about.slice(0, 100)}...</small>
            </p>
            <p className="card-text">For Age: {age}</p>
            <p className="card-text">Time Required: {time}m</p>
          </div>
          <button
            onClick={() => handelAddToList(activity)}
            className="text-white add-btn fw-bold rounded border-0 m-2 p-2"
          >
            {/* <p className="text-center">Add to List</p> */}
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
