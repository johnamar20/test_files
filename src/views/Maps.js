import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";

const Upgrade = (props) => {
  const data_panel = {
    columns: [
      {
        label: "id",
        field: "first",
        sort: "asc",
      },
      {
        label: "EventName",
        field: "first",
        sort: "asc",
      },
      {
        label: "EventDate",
        field: "last",
        sort: "asc",
      },
      {
        label: "EventTime",
        field: "username",
        sort: "asc",
      },
      {
        label: "EventVenue",
        field: "username2",
        sort: "asc",
      },
      {
        label: "LastRegDate",
        field: "username3",
        sort: "asc",
      },
      {
        label: " PlayerType",
        field: "username4",
        sort: "asc",
      },
      {
        label: " EventPoints",
        field: "username4",
        sort: "asc",
      },

      {
        label: " EventPoints",
        field: "username4",
        sort: "asc",
      },
      {
        label: " EventPoints",
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
        Organise: "player",
        Organe: "player",
        Orgae: "player",
      },
    ],
  };

  return (
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div></div>
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
          >
            <button>
              <i className="fas fa-pencil-alt mt-0"></i>
            </button>
          </div>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Upgrade;
