import React from "react";
import lock from "../assets/icons/lockLight.svg";

const SideDataAdmin2 = () => {
  const sideDataAdmin = [
    {
      color: "pink_bg",
      name: "User Interaction",
    },
    {
      color: "ferozi_bg",
      name: "Organisational Processes",
    },
    {
      color: "lightgreen_bg",
      name: "Infrastructure",
    },
    {
      color: "green_bg",
      name: "Software",
    },
    {
      color: "yellow_bg",
      name: "Hardware Interfacing",
    },
  ];

  return (
    <div className="sideDataAdmin_container">
      <div className="d-flex flex-column justify-content-between align-items-center h-100">
        <div className="w-100 px-2 px-md-4 py-4 py-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h5 className="text-white f22 rounded-3 mb-0 px-1">
              Architectural layers
            </h5>
          </div>

          <ul className="list-unstyled mt-4">
            {sideDataAdmin.map((content, i) => {
              const { color, name } = content;

              return (
                <li
                  key={i}
                  className="d-flex flex-column flex-md-row align-items-center py-2"
                >
                  <div className={`${color} color_circle`} />
                  <div className="d-none d-md-flex flex-column align-items-md-start align-items-center text-white ps-md-3 pt-1 pt-md-0">
                    <h5 className="mb-0 f16">{name}</h5>
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

export default SideDataAdmin2;
