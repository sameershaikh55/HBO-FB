import React from "react";
import avatar from "../assets/icons/avatarLight.svg";
import chart from "../assets/icons/chartLight.svg";
import lock from "../assets/icons/lockLight.svg";

const SideDataAdmin = () => {
  const sideDataAdmin = [
    {
      avatar: avatar,
      state: "8.549k",
      type: "views",
    },
    {
      avatar: chart,
      state: "188",
      type: "Kpi’s",
    },
    {
      avatar: chart,
      state: "890",
      type: "responses",
    },
  ];

  return (
    <div className="sideDataAdmin_container">
      <div className="d-flex flex-column justify-content-between align-items-center h-100">
        <div className="w-100 px-2 px-md-4 py-4 py-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h3 className="fw-light text-white mb-0">22-10-2022</h3>
            <h5 className="bg-white color3 p-1 p-md-2 rounded-3 mb-0">15:30</h5>
          </div>

          <ul className="list-unstyled mt-4">
            {sideDataAdmin.map((content, i) => {
              const { avatar, state, type } = content;

              return (
                <li
                  key={i}
                  className="d-flex flex-column flex-md-row align-items-center py-3"
                >
                  <img className="state_avatar_icon" src={avatar} alt="" />
                  <div className="d-flex flex-column align-items-md-start align-items-center text-white ps-md-3 pt-1 pt-md-0">
                    <h5 className="mb-0 f22">{state}</h5>
                    <p className=" mb-0 f14">{type}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pb-3 text-white d-flex gap-3">
          <img src={lock} alt="" />
          <p className="d-none d-md-block mb-0 f20">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideDataAdmin;
