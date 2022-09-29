import React from "react";
import profile from "../../images/profile.jpg";
const ProfileInfo = () => {
  return (
    <div>
      <div className="d-flex align-items-center mt-3 gap-2">
        <img className="rounded-circle profile-img" src={profile} alt="" />
        <p className="fw-bold">Armanul Islam</p>
      </div>

      <div className=" text-center mt-3 d-flex gap-5 pt-2 px-3 mt-3 rounded bg-light text-black fw-bold">
        <div>
          <p>
            72<small>kg</small> <br /> Weight
          </p>
        </div>
        <div>
          <p>
            6<small>inch</small> <br /> Height
          </p>
        </div>
        <div>
          <p>
            24<small>yrs</small> <br /> Age
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
