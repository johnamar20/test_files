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
                <Card.Title as="h4">Create Event </Card.Title>
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
                          EVENT NAME
                        </label>
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <MDBInput
                          type="textarea"
                          label="Event_Description"
                          rows="5"
                        />

                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          EVENT SPORTS
                        </label>
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          EVENT DATE
                        </label>
                        <input
                          type="date"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          EVENT START AT
                        </label>
                        <input
                          type="TIME"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          EVENT VENUE
                        </label>
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          LAST REGISTRATION DATE
                        </label>
                        <input
                          type="date"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer
                  style={{ marginLeft: "320px", marginTop: "-570px" }}
                >
                  <MDBRow>
                    <MDBCol md="6">
                      <form>
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          TYPE
                        </label>
                        <select className="browser-default custom-select">
                          <option value="o" disabled>
                            Event Format
                          </option>
                          <option value="1">Induvidual</option>
                          <option value="3"> Team</option>
                        </select>
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          EVENT POINTS LIMIT
                        </label>
                        <input
                          type="number"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required="true"
                        />
                        <br />
                        <h5>ORGANISER BANK INFO</h5>
                        <br />

                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          placeholder="Account_Name"
                          required="true"
                        />
                        <input
                          type="number"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          placeholder="Account_Number"
                          required="true"
                        />
                        <input
                          type="text"
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          placeholder="Ifsc_Code"
                          required="true"
                        />
                        <br />
                        <label
                          htmlFor="defaultFormRegisterNameEx"
                          className="grey-text"
                        >
                          Total Prize
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
                          Entry Fee
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
                          Event For
                        </label>
                        <select className="browser-default custom-select">
                          <option value="o" disabled>
                            Event For
                          </option>
                          <option value="1">Male</option>
                          <option value="3"> Female</option>
                          <option value="3"> Others</option>
                        </select>

                        <div className="text-center mt-4">
                          <MDBBtn outline color="unique" type="submit">
                            Create EVENT
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
        </Row>
      </Container>
    </>
  );
}

export default User;
