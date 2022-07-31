import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-2 p-2 ">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <p className="px-2">Home</p>
        <p className="px-2">About Us</p>
        <p className="px-2">Contact Us</p>
        <p className="px-2">Members</p>
      </div>
      <div className="p-0 mx-auto text-center">
        <p className="fw-light p-0">
          Copyright &copy; {new Date().getFullYear()}. All right reserved by{" "}
          {window.location.hostname}
        </p>
        <p className="fw-light p-0 text-muted">
          Design & Develop by{" "}
          <a href="https://my-portfolio-website-ae164.web.app/" target="_blank">
            Supravat Sarkar (JavaScript Dev.)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
