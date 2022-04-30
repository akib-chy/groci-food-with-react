import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row mb-4 m-auto">
        <div className="col">
          <h3 className="display-6 text-center mt-5 pt-3 fw-bold text-warning">
            Contact
          </h3>
          <p className="text-center lead mb-0 mt-4">
            {" "}
            You may use
            <a href="#" className="text-decoration-none">
              Simple Contact Form
            </a>
            to send email to your inbox. You can modify
          </p>
          <p className="lead mb-0 text-center">
            and use this template for your website. Header image has a parallax
            effect.
          </p>
          <p className="lead mb-0 text-center">
            Total 3 HTML pages included in this template.
          </p>
        </div>
        <div className="row ms-lg-5 ms-md-0 me-lg-5 me-md-0 d-flex justify-content-center align-items-center mt-5">
          <div className="col-lg-6 d-flex justify-content-center">
            <form>
              <input
                type="text"
                required
                placeholder="Name"
                className="form-control border-0 border-bottom bg-light border-secondary rounded-0 fs-6 bg-transparent shadow-none"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="form-control border-0 border-bottom bg-light border-secondary rounded-0 fs-6 mt-4 bg-transparent shadow-none"
              />
              <textarea
                name=""
                id=""
                cols="38"
                rows="5"
                className="form-control border-0 border-bottom bg-light border-secondary rounded-0 fs-6 mt-4 bg-transparent shadow-none"
              ></textarea>
              <div className="text-end">
                <button
                  className="btn border-success rounded-0 px-4 text-success fw-bold shadow-none mt-5"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <h3 className="display-5 fs-3 text-success mb-5">Our Address</h3>
            <p className="lead mb-0">180 Orci varius natoque penatibus et</p>
            <p className="lead mb-0">magnis dis parturient montes, nascetur</p>
            <p className="lead ">ridiculus mus 10550</p>
            <div className="mt-5">
              <div className="mb-3">
                <a
                  href="tel:01885147865"
                  className="text-decoration-none text-secondary fs-6 lead fw-bold"
                >
                  <i className="fa-solid fa-phone-flip me-3 text-success"></i>
                  0154-665-065
                </a>
              </div>
              <div>
                <a
                  href="mailto:akibchy1212@gmail.com"
                  className="text-decoration-none text-secondary fs-6 lead fw-bold"
                >
                  <i className="fa-solid fa-envelope me-3 text-success"></i>
                  akibchy1212@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-5">
              <a href="#">
                <i className="fa-brands fa-facebook fs-5 text-secondary me-4"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter fs-5 text-secondary me-4"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram fs-5 text-secondary me-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
