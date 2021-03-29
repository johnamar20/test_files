import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";
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
          <Col md="4"></Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
