import React from 'react'
import {Form,Jumbotron,type,Dropdown,DropdownButton,Button,Container} from 'react-bootstrap'
import im from '../views/12.jpg'

function Eventreg() {
    return (
        <div>

             {/* <div style={{
              backgroundImage: `url(${im})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}> */}
            <Container >
                   <Form>
  
    <Form.Group controlId="formBasicEmail">  <Form.Label>TOURNAMENT NAME</Form.Label>
    <Form.Control type="text" placeholder=" " /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>DATE OF THE EVEN</Form.Label>
    <Form.Control type="text" placeholder=" " /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>EVENT START FROM (TIME)</Form.Label>
    <Form.Control type="text" placeholder=" " /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>EVENT VENUE</Form.Label>
    <Form.Control type="text" placeholder=" " /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>LAST DATE REGISTRATION</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>EVENT DESCRIPTION</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>ORGANISER NAME</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>ORGANISER EMAIL</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>ACCOUNT NUMBER</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>IFSC CODE</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label> ACCOUNT NAME </Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>TOTAL FEE </Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>SPITTED FEE</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>GENDER </Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
    <Form.Group controlId="formBasicEmail">  <Form.Label>IFSC CODE</Form.Label>
    <Form.Control type="text" placeholder="" /></Form.Group>
   
   
   
  

  
</Form></Container>
</div>                
        // </div>
    )
}

export default Eventreg
