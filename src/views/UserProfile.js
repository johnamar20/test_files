import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create user </Card.Title>
              </Card.Header>
              <Card.Body>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <form>
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          NAME
                        </label>
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterEmailEx"
                          className="grey-text"
                        >
                          EMAIL
                        </label>
                        <input
                          type="email"
                          id="defaultFormRegisterEmailEx"
                          className="form-control"
                          required="true"
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          MOBILE NUMBER
                        </label>
                        <input
                          type="number"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          DOB
                        </label>
                        <input
                          type="date"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <br />
                        <select className="browser-default custom-select">
                          <option value="o" disabled>
                            Gender
                          </option>
                          <option value="1">Male</option>
                          <option value="3"> Female</option>
                          <option value="4"> others</option>
                        </select>
                        <br />
                        <br />
                        <select className="browser-default custom-select">
                          <option value="o" disabled>
                            Type
                          </option>
                          <option value="1">Player-Type</option>
                          <option value="3"> Organiser</option>
                        </select>
                        <div className="text-center mt-4">
                          <MDBBtn outline color="unique" type="submit">
                            Create
                          </MDBBtn>
                          <br />
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
