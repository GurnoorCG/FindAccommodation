import React from "react";
// import Data from "./dummyData";
// import Navbar from "../navbar/navbar";
import Blueright_arrow from "../../images/Blueright-arrow.svg";
import gps from "../../images/GPS.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import userphoto from "../../images/userphoto.svg";
// import search from "../../images/search.svg";
// import location from "../../images/location.svg";
import allowed from "../../images/allowed.svg";
import not_allowed from "../../images/Not Allowed.svg";
import clock from "../../images/clock.svg";
import owner_name from "../../images/owner name.svg";
import call from "../../images/call.svg";
import greentick from "../../images/greentickfinal.svg";
import femaleIcon from "../../images/femaleIcon.svg";
// import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./openRequirements.css";
import Date from "../../images/date.svg";

const OpenRequirements = (props) => {
  // const [message, setMessage] = useState("");
  // const [mapaddress, setMapAddress] = useState("Pinnacle Business Park");

  // const handlemessageText = (event) => {
  //   const { value } = event.target;
  //   setMessage(value);
  // };

  // const findAddressmap = (event) => {
  //   const { value } = event.target;
  //   setMapAddress(value);
  // };

  // const handleSubmit = () => {
  //   const data = {
  //     messgae: message,
  //     // mapaddress: mapaddress,
  //   };

  //   console.log(data);
  // }

  return (
    <>
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <div
          className=" scrollbar col-12"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className=" row row-cols-4 ">
            {props.sendingData.map((data, index) => (
              <div key={data.id}>
                <div
                  className="availableAcco__card"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="p-3">
                    <div className="d-flex mb-3">
                      <div className="me-2">
                        <img src={userphoto} alt="" />
                      </div>
                      <div className="ms-1">
                        <div
                          className="d-flex"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <p className="mb-1 availableAcco__card-p-name">
                            {data.fullName}
                          </p>
                          <img src={Blueright_arrow} alt="" />
                        </div>

                        <div className="d-flex">
                          <div
                            className=" d-flex "
                            style={{
                              backgroundColor: "rgba(12, 100, 49, 0.1)",
                              borderRadius: "0.12rem",
                            }}
                          >
                            <img
                              src={greentick}
                              alt=""
                              style={{ margin: "0.31rem 0.31rem 0.5rem" }}
                            />
                            <p
                              className="openRequirements__card-p-verify"
                              style={{ color: "#0C9A47" }}
                            >
                              Verified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "1.06rem" }}>
                      <p
                        className="openRequirements__card-p-main"
                        style={{ marginBottom: "0rem" }}
                      >
                        Preferred Location :
                      </p>
                      <p
                        className="openRequirements__card-p-sector"
                        style={{ marginBottom: "0rem" }}
                      >
                        {data.sector}
                      </p>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "1rem" }}>
                      <img src={greencheck} alt="" />
                      <p className="openRequirements__card-p-green">
                        I am looking for a room-mate
                      </p>
                    </div>

                    <div className="mb-3">
                      <p
                        className="openRequirements__card-p-main"
                        style={{ marginBottom: "0.62rem" }}
                      >
                        Accommodation Type:
                      </p>
                      <p>
                        {data.accommodationType} | {data.flatType}{" "}
                        {data.furnishedType ? `| ${data.furnishedType}` : ""}
                      </p>
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <p className="openRequirements__card-p-main">
                        Relocation Date
                      </p>
                      <div className="d-flex">
                        <img src={Date} />
                        <p
                          style={{ marginBottom: "0rem", marginLeft: "0.5rem" }}
                        >
                          16-03-2023
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        className="border-0 py-2 px-3 w-100 interested"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        I'm interested
                      </button>
                    </div>
                  </div>
                </div>

                {/* Modal */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          style={{
                            color: "#343435",
                            fontWeight: "700",
                          }}
                        >
                          Request Details
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div class="modal-body">
                        <form>
                          <div className="row mb-3">
                            <div className="d-flex">
                              <div className="me-1">
                                <img src={femaleIcon} alt="" />
                              </div>
                              <div className="ms-2">
                                <div className="">
                                  <p
                                    className="mb-0"
                                    style={{
                                      color: "#28519E",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {data.fullName}
                                  </p>
                                </div>
                                <div className="d-flex">
                                  <p className="mb-0  openRequirements__card-p-id">
                                    {data.CGIID}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="d-flex">
                              <div>
                                <p
                                  style={{
                                    color: "#343435",
                                    fontWeight: "700",
                                  }}
                                >
                                  Email id:
                                </p>
                              </div>
                              <div>
                                <p
                                  className="ms-2"
                                  style={{
                                    color: "#343435",
                                    fontWeight: "500",
                                  }}
                                >
                                  {" "}
                                  harshitakhurana@expample.com
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="d-flex">
                              <div>
                                <p
                                  style={{
                                    color: "#343435",
                                    fontWeight: "700",
                                  }}
                                >
                                  Contact No:
                                </p>
                              </div>
                              <div>
                                <p
                                  className="ms-2"
                                  style={{
                                    color: "#343435",
                                    fontWeight: "500",
                                  }}
                                >
                                  9876543210
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="mb-1">
                              <p
                                className="mb-0"
                                style={{
                                  color: "#343435",
                                  fontWeight: "700",
                                }}
                              >
                                Message:
                              </p>
                            </div>
                            <div>
                              <div className="mb-3">
                                <textarea
                                  value=""
                                  onChange=""
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                ></textarea>
                              </div>
                              <div>
                                <button
                                  className="border-0 py-2 px-3 w-100 interested"
                                  data-bs-toggle="modal"
                                  data-bs-target="/OpenRequirements"
                                >
                                  Send Request
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offcanvas code */}
                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header d-flex justify-content-end mb-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body mt-0">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col 12">
                          <div>
                            <div className="row mb-3">
                              <div className="d-flex">
                                <div className="me-2">
                                  <img src={userphoto} alt="" />
                                </div>
                                <div className="ms-1">
                                  <p className="mb-0">{data.fullName}</p>
                                  <p className="mb-0">{data.CGIID}</p>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div>
                                <p className="mb-0">
                                  Landmark: {data.sector}, Noida
                                </p>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="d-flex">
                                <img src={gps} alt="" />
                                <p className="ms-1 mb-0">View on Map</p>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div className="d-flex">
                                <div className="nearby-location py-2">
                                  <div className="d-flex justify-content-center mb-1">
                                    <img src={office} alt="" />
                                  </div>
                                  <div className="d-flex justify-content-center mb-1">
                                    <p className="text mb-0">
                                      {data.distance} kms from Sector-3 office
                                    </p>
                                  </div>
                                </div>
                                <div className="nearby-location ms-3 py-2">
                                  <div className="d-flex justify-content-center">
                                    <img src={metro} alt="" />
                                  </div>
                                  <div className="d-flex justify-content-center">
                                    <p className="text mb-0">
                                      Nearest metro {data.nearestMetro}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div className="d-flex">
                                <img src={greencheck} alt="" className="me-2" />
                                <p className="mb-0">
                                  I'm looking for a room-mate
                                </p>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div>
                                <p className="mb-2">Accommodation Type</p>
                                <p className="mb-0">
                                  {data.accommodationType} | {data.flatType} |{" "}
                                  {data.furnishedType}
                                </p>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div className="amenities-text">
                                <p className="mb-2">Amenities</p>
                              </div>
                              <div className="d-flex mb-1">
                                <div className="d-flex justify-content-center amenities p-2 me-3">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">WiFi</p>
                                </div>
                                <div className="d-flex justify-content-center amenities p-2 me-3">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">Food</p>
                                </div>
                                <div className="d-flex justify-content-center amenities p-2">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">Kitchen</p>
                                </div>
                              </div>
                              <div className="d-flex mt-2">
                                <div className="d-flex justify-content-center amenities p-2 me-3">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">Washing Machine</p>
                                </div>
                                <div className="d-flex justify-content-center amenities p-2">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">Induction</p>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div className="habits-text">
                                <p className="mb-2">House Habits</p>
                              </div>
                              <div className="d-flex">
                                <div className="d-flex col-4 habits p-2 me-3">
                                  <img
                                    src={not_allowed}
                                    alt=""
                                    className="me-2"
                                  />
                                  <p className="mb-0">Non-Veg</p>
                                </div>
                                <div className="d-flex col-4 habits p-2 me-3">
                                  <img
                                    src={not_allowed}
                                    alt=""
                                    className="me-2"
                                  />
                                  <p className="mb-0">Smoking</p>
                                </div>
                                <div className="d-flex col-4 amenities p-2">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">Drinking</p>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div>
                                <p className="mb-2">
                                  Preferred Time to Contact
                                </p>
                              </div>
                              <div className="d-flex">
                                <div className="d-flex justify-content-center amenities p-2 me-3">
                                  <img src={allowed} alt="" className="me-2" />
                                  <p className="mb-0">Weekend</p>
                                </div>
                                <div className="d-flex justify-content-center amenities p-2">
                                  <img src={clock} alt="" className="me-2" />
                                  <p className="mb-0">11:00 AM - 04:00 PM</p>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-4">
                              <div>
                                <p className="mb-2">Owner Information</p>
                              </div>
                              <div className="mt-1">
                                <div className="d-flex mb-3">
                                  <img
                                    src={owner_name}
                                    alt=""
                                    className="me-2"
                                  />
                                  <p className="mb-0">John Doe</p>
                                </div>
                                <div className="d-flex">
                                  <img src={call} alt="" className="me-2" />
                                  <p className="mb-0">9876543210</p>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div>
                                <button
                                  type="button"
                                  className="w-100 border-0 justify-content-center interested"
                                >
                                  I'm interested
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenRequirements;
