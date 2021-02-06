import React from 'react';
import {Form,Jumbotron,type,Dropdown,DropdownButton} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

 
function Eventreg() {
    return (
        <div>
            <center><b><h3>Create New Event</h3></b></center>
            <Jumbotron >
            <Form.Label>TOURNAMENT NAME</Form.Label>
             <Form.Control type="text" placeholder="" />
             <Form.Label>DATE OF THE EVENT</Form.Label>
             <Form.Control type="date" placeholder="" />
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
                    <br />
                    <center><b><h5>ORGANISER INFO</h5></b></center>
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    <br />
                    <center><b><h5>ORGANISER ACCOUNT DETAILS</h5></b></center>
                    <Form.Label>ACCOUNT NUMBER</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label>IFSC CODE</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label> ACCOUNT NAME</Form.Label>
                    <Form.Control type="text" placeholder="" /><br />
                    <center><h5>FEE  DETAILS</h5></center>

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


            
        </div>
    )
}

export default Eventreg

