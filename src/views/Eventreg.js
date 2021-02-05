import React from 'react';
import {Form,Jumbotron} from 'react-bootstrap'
 
function Eventreg() {
    return (
        <div>
            <h3>Create New Event</h3>
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
             <Form.Label>EVENT DESCRIPTION</Form.Label>
             <Form.Control as="textarea" rows={3} />
             <Form.Label>MALE 
             <Form.Control type="radio" placeholder="" /></Form.Label>
             <Form.Label> FEMALE
             <Form.Control type="radio" placeholder="" /></Form.Label>
            </Jumbotron>

            
        </div>
    )
}

export default Eventreg

