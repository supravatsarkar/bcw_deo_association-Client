import React from "react";
import oscarLogo from "../../assets/schemes_logos/oscar.png";
import saboojsathiLogo from "../../assets/schemes_logos/saboojsathi_logo.png";
import sikhsashreeLogo from "../../assets/schemes_logos/shikshashree.png";
import obc_prLogo from "../../assets/schemes_logos/obc_pr.jpg";
import oasisLogo from "../../assets/schemes_logos/oasis.png";
import SchemeCard from "../SchemeCard/SchemeCard";

const schemes = [
  {
    name: "OSCAR",
    description: "",
    img: oscarLogo,
  },
  {
    name: "SABOOJ SATHI",
    description: "",
    img: saboojsathiLogo,
  },
  {
    name: "SHIKSHASHREE",
    description: "",
    img: sikhsashreeLogo,
  },
  {
    name: "OBC PRE-MATRIC",
    description: "",
    img: obc_prLogo,
  },
  {
    name: "OASIS",
    description: "",
    img: oasisLogo,
  },
];

const OurActivity = () => {
  return (
    <div className="my-3 container-lg">
      <div>
        <h1 className="fw-bolder">OUR ACTIVITY</h1>
        <p className="text-muted">
          INCREASE IN THE AWARENESS AND PROVIDED VALUABLE SERVICES AMONG PEOPLE
          ABOUT VARIOUS GOVT. SCHEMES
        </p>
      </div>
      <div>
        {/* SCHEMES/SERVICES CARDS  */}
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {schemes.map((scheme) => (
            <SchemeCard scheme={scheme}></SchemeCard>
          ))}
        </div>
      </div>
      <div className="text-end">
        <button className="btn btn-outline-primary btn-sm mt-1 btn-outline">
          View All
        </button>
      </div>
    </div>
  );
};

export default OurActivity;
