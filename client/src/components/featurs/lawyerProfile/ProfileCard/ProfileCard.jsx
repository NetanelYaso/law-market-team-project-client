import "../ProfileCard.css";
import React from "react";
import { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdb-react-ui-kit";

const ProfileCard = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  return (
    <>
      <section class="h-100 gradient-custom-2">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-12 col-sm-4">
              <div class="card">
                <div class="coverImag rounded-top text-white d-flex flex-row">
                  <div class="profPic ms-4 mt-5 d-flex flex-column">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      class="MainPhotoProfile img-fluid rounded-circle  mt-4 mb-2"
                    />
                  </div>
                  <div class="nameTxt ms-3">
                    <h5>Andy Horwitz</h5>
                    <p>Title</p>
                  </div>
                  
                </div>
                <div class="p-4 text-black">
                  <div class="d-flex justify-content-around text-center">
                    <div>
                      <p class="mb-1 h5">13</p>
                      <p class="small text-muted mb-0">divorce</p>
                    </div>
                    <div class="">
                      <p class="mb-1 h5">25</p>
                      <p class="small text-muted mb-0">compensation</p>
                    </div>
                    <div>
                      <p class="mb-1 h5">17</p>
                      <p class="small text-muted mb-0">traffic</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="card-body p-4 text-black">
                  <div class="mb-1">
                    <p class="lead fw-normal mb-1">About</p>
                    <div class="p-4">
                      <span class="font-italic mb-1">Web Developer</span>
                      <span class="font-italic mb-1">Lives in New York</span>
                      <span class="font-italic mb-0">Photographer</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="buttens mb-3 d-flex justify-content-around">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    data-mdb-ripple-color="dark"
                  >
                    <a href="">butten2</a>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    data-mdb-ripple-color="dark"
                  >
                    <a href="">butten1</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
