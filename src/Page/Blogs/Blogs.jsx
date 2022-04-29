import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="question-container">
        <h1 className="question-title mb-4">Our Blogs</h1>
        <div className="question-part">
          <div>
            <h2>Authentication vs. Authorization</h2>
            <div className="row">
              <div className="col-md-6 border border-warning">
                <h4 className="text-center text-success border-bottom py-2 border-warning">
                  Authentication
                </h4>
                <li>
                  In authentication process, the identity of users are checked
                  for providing the access to the system.
                </li>
                <li>
                  {" "}
                  In authentication process, users or persons are verified.
                </li>
                <li> It is done before the authorization process.</li>
              </div>
              <div className="col-md-6 border border-warning">
                <h4 className="text-center text-success py-2 border-bottom border-warning">
                  Authorization
                </h4>
                <li>
                  While in authorization process, person’s or user’s authorities
                  are checked for accessing the resources.
                </li>
                <li>While in this process, users or persons are validated.</li>
                <li>
                  While this process is done after the authentication process.
                </li>
              </div>
            </div>
          </div>
          <div className="right-part">
            <img
              className="question-img rounded-3"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20190606141632/Untitled-Diagram-2019-06-06T141540.818.png"
              alt=""
            />
          </div>
        </div>
        <div className="question-part part-2">
          <div>
            <img
              className="question-img rounded-3"
              src="https://www.nbnminds.com/wp-content/uploads/2019/03/is-Firebase-right-for-my-app.png"
              alt=""
            />
          </div>
          <div className="right-part">
            <h2>Why are you using firebase ? </h2>
            <p>
              We're still learning to work with the latest Firebase. And I use
              Firebase because it's very easy to do user related work with
              Firebase and Firebase is very popular nowadays.
            </p>
          </div>
        </div>
        <div className="question-part">
          <div>
            <h2>
              What other services does firebase provide other than
              authentication ?
            </h2>
            <p>
              In addition to Firebase authentication, the Firebase database
              contains databases where data can be stored. And Firebase hosting
              includes Firebase storagestorage and Firebase maching larning and
              ect
            </p>
          </div>
          <div className="right-part">
            <img
              className="question-img"
              src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
