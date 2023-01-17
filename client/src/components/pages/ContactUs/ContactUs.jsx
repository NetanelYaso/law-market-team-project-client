import React from "react";
import "./ContactUs.css"

export const ContactUs = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3 bg-Secondary">
      <section className="mb-4 p-5 border w-75  beckgrundDiv ">
        
        <h2 className="h1-responsive font-weight-bold text-center my-4  ">
          Contact us 
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
        אם נותרו לכם שאלות אנא אל תשאירו אותן לעצמכם<br /> שתפו אותנו בכל נושא והצוות שלנו ישמח לחזור אליכם עם מהנה מהיר .
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0 mb-3 ">
                    <input
                    placeholder="name"
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div className ="col-md-6">
                  <div className ="md-form mb-0 mb-3">
                    <input
                    placeholder="email"
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form  mb-3">
                    <input
                    placeholder="subject"
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                
                <div className="col-md-12">
                  <div className="md-form mb-3">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a
                className="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>הרצליה פיתוח,ישראל </p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>077 234 4321</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@lawmarket.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
