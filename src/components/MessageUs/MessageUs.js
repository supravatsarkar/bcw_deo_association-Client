import React from "react";

const MessageUs = () => {
  return (
    <div className="container my-4" id="contact">
      <div className="row m-0 shadow-lg rounded-2">
        <div className="col d-none d-md-block col-md-2 "></div>
        <div className="m-2 m-md-2 d-flex align-items-center col col-md-8 ">
          <div className="w-100">
            <h1 className="fw-bolder">TELL US YOUR MESSAGE</h1>
            {/* <form ref={form} onSubmit={sendEmail}> */}
            <form>
              <div className="mb-1">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Phone Number*
                </label>
                <input
                  type=""
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="xxxxxxxxx"
                  name="phone"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Subject*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label text-light"
                >
                  Message*
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-1 w-100">
                SEND
              </button>
            </form>
          </div>
        </div>
        <div className="m-0 col d-none d-md-block col-md-2"></div>
      </div>
    </div>
  );
};

export default MessageUs;
