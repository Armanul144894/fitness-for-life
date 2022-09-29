import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Profile from "../Profile/Profile";
import "./Fitness.css";
import logo from "../../images/logo.png";

const Fitness = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);

  const handelAddToList = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    // addToDb(selectedProduct.id);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="">
      <div className="fitness-container">
        <div className="col-10 text-center container mt-5">
          <div className="d-flex align-items-center gap-2 mb-2">
            <img className="rounded-circle logo" src={logo} alt="" />
            <h3 className="text-primary">Fitness for Life</h3>
          </div>
          <p className="text-start fw-bold">Select today's exercise</p>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 g-3">
            {activities.map((activity) => (
              <Activity
                activity={activity}
                handelAddToList={handelAddToList}
                key={activity.id}
              ></Activity>
            ))}
          </div>
        </div>
        <div className="col-2 profile-container rounded mb-5 w-100 h-100">
          <Profile cart={cart}></Profile>
        </div>
      </div>
      <div className=" container mx-auto mt-5 mb-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Q1. How does react Work?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                React is a declarative, efficient, and flexible JavaScript
                library for building user interfaces. 'V' denotes the view in
                MVC. ReactJS is an open-source, component-based front end
                library responsible only for the view layer of the application.
                It is maintained by Facebook.ReactJS divides the UI into
                isolated reusable pieces of code known as components. React
                components work similarly to JavaScript functions as they accept
                arbitrary inputs called properties or props. It's possible to
                have as many components as necessary without cluttering your
                code.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Q2. Write down the difference between props and state in
                ReactJs.
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Props are used to pass data from one component to another. The
                state is a local data storage that is local to the component
                only and cannot be passed to other components. The this.
                setState property is used to update the state values in the
                component.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Q3. What does useEffect do?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                By using this Hook, you tell React that your component needs to
                do something after render. React will remember the function you
                passed (we'll refer to it as our “effect”), and call it later
                after performing the DOM updates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
