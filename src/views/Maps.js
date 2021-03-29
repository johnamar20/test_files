import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>EVENT NAME</MDBCardTitle>
          <MDBCardText>Event Description</MDBCardText>
          <MDBCardText>Event Date with time</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
