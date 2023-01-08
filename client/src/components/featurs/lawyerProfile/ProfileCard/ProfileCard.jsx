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
      <section class="col col-md-5  card-container gradient-custom-2">
        
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-7 col-sm-8">
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
                <div class=" text-black"></div>
                <div className="p-2 d-flex justify-content-between">
                  <h5>rating</h5>
                    <div class="rating d-flex " >
                      <span>
                        <i class="fa-star fa-sm far"></i>
                      </span>
                      <span>
                        <i class="fa-star fa-sm far"></i>
                      </span>
                      <span>
                        <i class="fa-star fa-sm far"></i>
                      </span>
                      <span>
                        <i class="fa-star fa-sm far"></i>
                      </span>
                      <span>
                        <i class="fa-star fa-sm far"></i>
                      </span>
                    </div>
                 
                </div>
                <hr />
                <div class="card-body p-0 text-black">
                  <div class="list-group list-group-flush rounded-3">
                    <span class="list-group-item  d-flex justify-content-between align-items-center ">
                      
                      <p class=""><i class="fas fa-map-marker-alt"></i> location</p>
                      <p>8 km</p>
                    </span>

                    <span class="list-group-item d-flex justify-content-between align-items-center ">
                     
                      <p class=""> <i class="far fa-calendar-check"></i> experience</p>
                      <p>8 years</p>
                    </span>

                    <span class="list-group-item  d-flex justify-content-between align-items-center ">
                     
                      <p class=""> <i class="fas fa-reply"></i> response</p>
                      <p>1 day</p>
                    </span>
                    <span class="list-group-item  d-flex justify-content-between align-items-center ">
                      
                      <p class=""><i class="fas fa-calendar-check"></i> work done by</p>
                      <p>8 km</p>
                    </span>
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
        
      </section>
    </>
  );
};

export default ProfileCard;
