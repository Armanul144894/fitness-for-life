import { addToDB, getStoredTime } from "../../fakedb";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./Profile.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const { cart } = props;
  // const breakTime = getStoredTime();
  let time = 0;
  for (const item of cart) {
    time = time + item.time * item.quantity;
  }
  const makeToast = () => {
    alert("Your Activity Successfully Completed");
    // toast.success("Your Activity Successfully Completed!!", {
    //   position: "top-center",
    // });
  };
  const breakTenMin = (id) => {
    const breakContainer = document.getElementById("break-time");
    breakContainer.innerText = "10minutes";
    addToDB("btn-ten");
  };
  const breakTwentyMin = (id) => {
    const breakContainer = document.getElementById("break-time");
    breakContainer.innerText = "20minutes";
    getStoredTime("break-time");
    addToDB("btn-twenty");
  };
  const breakThirtyMin = (id) => {
    const breakContainer = document.getElementById("break-time");
    breakContainer.innerText = "30minutes";
    addToDB("btn-thirty");
  };
  const breakFortyMin = (id) => {
    const breakContainer = document.getElementById("break-time");
    breakContainer.innerText = "40minutes";
    getStoredTime();
    addToDB("btn-forty");
  };
  const breakTime = getStoredTime();
  return (
    <div className="position-sticky top-0 p-3">
      <ProfileInfo></ProfileInfo>
      <h6 className="mt-4 fw-bold">Add a Break</h6>
      <div className="bg-light p-3 rounded">
        <button
          id="btn-ten"
          onClick={() => breakTenMin(cart)}
          className="rounded-circle break-btn"
        >
          10m
        </button>
        <button
          id="btn-twenty"
          onClick={() => breakTwentyMin(cart)}
          className="rounded-circle break-btn"
        >
          20m
        </button>
        <button
          id="btn-thirty"
          onClick={() => breakThirtyMin(cart)}
          className="rounded-circle break-btn"
        >
          30m
        </button>
        <button
          id="btn-forty"
          onClick={() => breakFortyMin(cart)}
          className="rounded-circle break-btn"
        >
          40m
        </button>
      </div>
      <h6 className="mt-5 fw-bold">Exercise Details</h6>
      <div className="bg-secondary rounded pt-3 pb-1 px-3 mb-3 text-white fw-bold">
        <div className="d-flex justify-content-between">
          <p>Exercise Time </p>
          <p>
            {time} <small>minutes</small>
          </p>
        </div>
      </div>
      <div className="bg-secondary rounded pt-3 pb-1 px-3 mb-5 text-white fw-bold">
        <div className="d-flex justify-content-between">
          <p>Break Time </p>
          <p id="break-time">{breakTime}inutes</p>
        </div>
      </div>
      <button
        id="liveToastBtn"
        onClick={() => makeToast()}
        className="text-center text-white fw-bold bg-success p-2 rounded border-0 w-100"
      >
        Activity Completed
      </button>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};

export default Profile;
