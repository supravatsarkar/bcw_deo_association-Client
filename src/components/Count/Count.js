import React from "react";
import { FaUsers } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";

const Count = () => {
  return (
    <div className="bg-primary my-3 text-light ">
      <div className="container-lg row py-3 mx-auto">
        <div className="col">
          <FaUsers style={{ fontSize: "70px" }} />
          <h4>115</h4>
          <h4>MEMBERS</h4>
        </div>
        <div className="col">
          <TbBuildingBank style={{ fontSize: "70px" }} />
          <h4>115</h4>
          <h4>OFFICES</h4>
        </div>
        <div className="col">
          <IoDocumentsSharp style={{ fontSize: "70px" }} />
          <h4>99</h4>
          <h4>RECOMM LETTERS</h4>
        </div>
        <div className="col">
          <IoMdPhotos style={{ fontSize: "70px" }} />
          <h4>25</h4>
          <h4>IMAGES</h4>
        </div>
      </div>
    </div>
  );
};

export default Count;
