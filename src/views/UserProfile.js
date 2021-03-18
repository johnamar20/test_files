import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
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
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";

function User() {
   const View=styled.div`
   font-size:14px;
   padding:4px;
   position:relative;
   left:20px;
   border:none;
   `
  
  return (
    <>
      <View> <Link to="/Userreg"> <Button variant="primary" size="sm" > 


      VIEW USER 
     </Button> </Link> </View>  

      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4"><center>USER REGISTER</center></Card.Title>   <hr></hr>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>

                    <Col className="px-3" md="6">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>DOB</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="DOB"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>CONTACT</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Mobile Number"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Location</label>
                        <Form.Control
                          defaultValue="ERODE"
                          placeholder="Location"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                  <Row>
                    <Col>
                  <Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    Dropdown
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Interest</Dropdown.Item>
    <Dropdown.Item href="#/action-2">User-Type</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Col>
                    </Row>
               
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Sports</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="SPORTS"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Interest</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Interest"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Acheivement</label>
                        <Form.Control
                          placeholder="Acheivement"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                 
                <Row>
                <Col className="pl-4" md="3">                       

                <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>    
      </Col>
                  </Row>
                  <Row>
                  <Button
                  >
                    <input
                     type="file"
                      
                   />
                  </Button>
                    </Row>
                  <Row>
                    <Col  className="px-4" md="4" >
                  <Button
                    className="btn-fill "
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button></Col></Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col><br />
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
           
           
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
