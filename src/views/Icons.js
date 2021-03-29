import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { Link } from "react-router-dom";
import EditUser from "./EditPRofile";

const Upgrade = (props) => {
  const data_panel = {
    columns: [
      {
        label: "Id",
        field: "first",
        sort: "asc",
      },
      {
        label: "Name",
        field: "first",
        sort: "asc",
      },
      {
        label: "Email",
        field: "last",
        sort: "asc",
      },
      {
        label: "Mobile Number",
        field: "username",
        sort: "asc",
      },
      {
        label: "Dob",
        field: "username2",
        sort: "asc",
      },
      {
        label: "Gender",
        field: "username3",
        sort: "asc",
      },
      {
        label: "Organiser",
        field: "username4",
        sort: "asc",
      },
      {
        label: "Edit",
        field: "username4",
        sort: "asc",
      },
    ],
    rows: [
      {
        id: 1,
        Name: "Gowtham",
        Email: "Otto@gmail.com",
        Mobile: "123456789",
        Dob: "01/01/1990",
        Gender: "Male",
        Organiser: "player",
        Icons: (
          <Link to="/EditUser">
            <button>
              <i className="fas fa-pencil-alt mt-0"></i>{" "}
            </button>
          </Link>
        ),
      },
      {
        id: 2,
        Name: "Gowtham",
        Email: "Otto@gmail.com",
        Mobile: "123456789",
        Dob: "01/01/1990",
        Gender: "Male",
        Organiser: "player",
        Icons: (
          <Link to="/EditUser">
            <button>
              <i className="fas fa-pencil-alt mt-0"></i>
            </button>
          </Link>
        ),
      },
      {
        id: 3,
        Name: "Gowtham",
        Email: "Otto@gmail.com",
        Mobile: "123456789",
        Dob: "01/01/1990",
        Gender: "Male",
        Organiser: "player",
        Icons: (
          <Link to="/EditUser">
            <button>
              <i className="fas fa-pencil-alt mt-0"></i>
            </button>
          </Link>
        ),
      },
    ],
  };

  return (
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-0 mb-3">
        <a href="#" className="white-text mx-3">
          Table
        </a>
        <div></div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />

          <MDBTableBody rows={data_panel.rows} />

          <div
            style={{
              position: "absolute",
              right: "30px",
              top: "120px",
            }}
          ></div>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Upgrade;
