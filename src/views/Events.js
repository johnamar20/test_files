import React from "react";
import {Link} from 'react-router-dom';
// react-bootstrap components
import {Form,Row,Col,Button,Jumbotron,type,Dropdown,DropdownButton,Container} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';


function TableList() {
  return (
    <>
  <Container >     
       <Row>
        <Col md="12">
       
    <Link to="/Eventreg"> <Button variant="primary" size="md" > 
VIEW EVENT     </Button> </Link>
     <div>
       
        <Container col-sm-3> 
            <center><b><h3>ADD EVENT</h3></b></center>
            <Jumbotron >
            <Form.Label>TOURNAMENT NAME</Form.Label>
             <Form.Control type="text" placeholder="" required/>
             <Form.Label>DATE OF THE EVENT</Form.Label>
             <Form.Control type="date" placeholder=""  />
             <Form.Label>EVENT START FROM (TIME)</Form.Label>
             <Form.Control type="time" placeholder="" />
             <Form.Label>EVENT VENUE</Form.Label>
             <Form.Control type="text" placeholder="" />
             <Form.Label>LAST DATE REGISTRATION</Form.Label>
             <Form.Control type="date" placeholder="" />
             <Form.Label>EVENT DESCRIPTION</Form.Label><br />
             <Form.Control as="textarea" rows={3} />
             {['checkbox'].map((type) => (
              <div key={``} className="mb-3">
                <Form.Check 
                custom
                id={`custom-${type}`}
                 label={`INDUVIDUAL`}
                />  </div> ))}
                {['checkbox'].map((type) => (
                 <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                    custom
                    inline
                    label="GROUP"
                    type={type}
                    id={`custom-inline-${type}-1`}
              />  </div> ))}
                   <div> <TextField id="outlined-basic" label="SET LIMIT" variant="outlined" /></div>
                    
                    <b><h5>ORGANISER INFO</h5></b>
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    <br />
                   <b><h5>ORGANISER ACCOUNT DETAILS</h5></b>
                    <Form.Label>ACCOUNT NUMBER</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label>IFSC CODE</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label> ACCOUNT NAME</Form.Label>
                    <Form.Control type="text" placeholder="" /><br />
                    <h5>FEE  DETAILS</h5>

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> 

                 <label class="form-check-label" for="flexRadioDefault1">
                  TOTAL FEE
                 </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" color="danger"/> 

                    <label class="form-check-label" for="flexRadioDefault1">
                     SPITTED FEE
                    </label>
                    </div>
                    <br/>
                    <div><Form.Label> TOTAL FEE AMOUNT </Form.Label>
                    <Form.Control type="text" placeholder="" /><br /></div>
                    <Form.Label> SPITTED FEE AMOUNT </Form.Label>
                 <div class="container">
                     <div class="row">
                     <div class="col-6 col-sm-3 col-md-6"><div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="NAME"/>
                </div></div>
                     <div class="col-6 col-sm-3 col-md-6"><div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="AMOUNT"/>
                </div></div>
                </div> </div>
                <div class="container">
                     <div class="row">
                     <div class="col-6 col-sm-3 col-md-6"><div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="NAME"/>
                </div></div>
                     <div class="col-6 col-sm-3 col-md-6"><div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="AMOUNT"/>
                </div></div>
                </div> </div>  <div class="container">
                     <div class="row">
                     <div class="col-6 col-sm-3 col-md-6"><div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="NAME"/>
                </div></div>
                     <div class="col-6 col-sm-3 col-md-6"><div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="AMOUNT"/>
                </div></div>
                </div> </div>
                
                <DropdownButton id="dropdown-basic-button" variant="danger" title="GENDER">
                  <Dropdown.Item href="#/action-1">MALE</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">FEMALE</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">BOTH</Dropdown.Item>
                </DropdownButton><br />
                <button type="button" class="btn btn-danger btn-lg btn-block">SUBMIT</button>

  

 


                    



                
            
            </Jumbotron>


            </Container>
        </div>
        </Col>
          {/* <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default TableList;
