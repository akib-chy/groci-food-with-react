import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="question-container">
        <h1 className="question-title mb-4">Our Blogs</h1>
        <div className="question-part">
          <div>
            <h2 className="text-center">Javascript vs. Node Js</h2>
            <div className="row">
              <div className="col-md-6 border border-warning">
                <h4 className="text-center text-success border-bottom py-2 border-warning">
                  JavaScript
                </h4>
                <li>
                  JavaScript is a programming language. It is running in any web
                  browser with a proper browser engine.
                </li>
                <li>
                  Mainly using for any client-side activity for a web
                  application, like possible attribute validation or refreshing
                  the page in a specific interval or provide some dynamic
                  changes in web pages without refreshing the page.
                </li>
                <li>
                  {" "}
                  JavaScript running any engine like Spider monkey (FireFox),
                  JavaScript Core (Safari), V8 (Google Chrome).
                </li>
              </div>
              <div className="col-md-6 border border-warning">
                <h4 className="text-center text-success py-2 border-bottom border-warning">
                  Node JS
                </h4>
                <li>
                  It is an interpreter and environment for JavaScript with some
                  specific useful libraries which JavaScript programming can use
                  separately.
                </li>
                <li>
                  It mainly used for accessing or performing any non-blocking
                  operation of any operating system, like creating or executing
                  a shell script or accessing any hardware-specific information
                  or running any backend job.
                </li>
                <li>
                  Node JS only run in a V8 engine which mainly used by google
                  chrome. And javascript program which will be written under
                  this Node JS will be always run in V8 Engine.
                </li>
              </div>
            </div>
          </div>
          <div className="right-part">
            <img
              className="question-img rounded-3"
              src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="question-part">
          <div className="right-part me-5">
            <img
              className="question-img rounded-3 mt-4"
              src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-center">
              Differences between sql and nosql databases
            </h2>
            <div className="row">
              <div className="col-md-6 border border-warning">
                <h4 className="text-center text-success border-bottom py-2 border-warning">
                  SQL
                </h4>
                <li>
                  These databases have fixed or static or predefined schema
                </li>
                <li>
                  These databases are not suited for hierarchical data storage.
                </li>
                <li>These databases are best suited for complex queries</li>
                <li>Vertically Scalable</li>
              </div>
              <div className="col-md-6 border border-warning">
                <h4 className="text-center text-success py-2 border-bottom border-warning">
                  NoSQL
                </h4>
                <li>They have dynamic schema</li>
                <li>
                  These databases are best suited for hierarchical data storage.
                </li>
                <li>These databases are not so good for complex queries</li>
                <li>Horizontally scalable</li>
              </div>
            </div>
          </div>
        </div>
        <div className="question-part part-2">
          <div>
            <img
              className="question-img rounded-3"
              src="http://jwt.io/img/facebook-card.png"
              alt=""
            />
          </div>
          <div className="right-part">
            <h2>What Is JWT? And How JWT Works ? </h2>
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. JWTs
              differ from other web tokens in that they contain a set of claims.
              Claims are used to transmit information between two parties. What
              these claims are depends on the use case. at hand. For example, a
              claim may assert who issued the token, how long it is valid for,
              or what permissions the client has been granted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
