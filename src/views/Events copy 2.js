import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  Jumbotron,
  type,
  Dropdown,
  DropdownButton,
  Button,
  Container,
} from "react-bootstrap";

class Usercreate extends Component {
  // this.onChangePhone = this.onChangePhone.bind(this);
  // this.onChangeName = this.onChangeName.bind(this);
  // this.onChangeEmail = this.onChange.bind(this);
  // this.onChangeGender = this.onChangeGender.bind(this);
  // this.onChangeAge = this.onChangeAge.bind(this);
  // this.onChangeUserType = this.onChangeUserType.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);
  constructor() {
    super();
    this.state = {
      event_name: "",
      event_desc: "",
      event_sports: "",
      event_date: "",
      event_startAt: "",
      event_venue: "",
      event_lastRgsDate: "",
      event_format: "",
      event_pts_limit: "",
      org_bank_info: {
        account_number: "",
        account_name: "",
        ifsc_code: "",
      },
      total_prize: "",
      entry_fee: "",
      event_for: "",
      eventImg: "",
    };
  }

  onChangePhone = (e) => {
    this.setState({ event_name: e.target.value });
  };
  onChangeName = (e) => {
    this.setState({ event_desc: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ event_sports: e.target.value });
  };
  onChangeGender = (e) => {
    this.setState({ event_date: e.target.value });
  };
  onChangeAge = (e) => {
    this.setState({ event_startAt: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ event_venue: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ event_lastRgsDate: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ event_format: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ event_pts_limit: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ account_number: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ account_name: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ ifsc_code: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ total_prize: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ entry_fee: e.target.value });
  };
  onChangeUserType = (e) => {
    this.setState({ event_for: e.target.value });
  };

  onChangekycImg = (e) => {
    async (e) => {
      const file = e.target.files[0];
      const base64 = await this.convertBase64(file);
      console.log(base64);
      this.setState({ kycImg: base64 });
    };
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      event_name,
      event_desc,
      event_sports,
      event_date,
      event_startAt,
      event_venue,
      event_lastRgsDate,
      event_format,
      event_pts_limit,
      account_number,
      account_name,
      ifsc_code,
      total_prize,
      entry_fee,
      event_for,
      eventImg,
    } = this.state;
    const userObject = {
      event_name: event_name,
      event_desc: event_desc,
      event_sports: event_sports,
      event_date: event_date,
      event_startAt: event_startAt,
      event_venue: event_venue,
      event_lastRgsDate: event_lastRgsDate,
      event_format: event_format,
      event_pts_limit: event_pts_limit,
      account_number: account_number,
      account_name: account_name,
      ifsc_code: ifsc_code,
      total_prize: total_prize,
      entry_fee: entry_fee,
      event_for: event_for,
      eventImg: eventImg,
    };
    console.log(JSON.stringify(userObject));
    // await axios
    //     .post("/admin/user/create", userObject)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    axios
      .post(
        "https://sportswander-backend.herokuapp.com/admin/user/create",
        JSON.stringify(userObject),
        {
          headers: {
            authtoken: sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    this.setState({
      event_name: "",
      event_desc: "",
      event_sports: "",
      event_date: "",
      event_startAt: "",
      event_venue: "",
      event_lastRgsDate: "",
      event_format: "",
      event_pts_limit: "",
      org_bank_info: {
        account_number: "",
        account_name: "",
        ifsc_code: "",
      },
      total_prize: "",
      entry_fee: "",
      event_for: "",
      eventImg: "",
    });
  };

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicPhone">
          <Form.Label> Event Name</Form.Label>
          <Form.Control
            type="text"
            value={this.state.event_name}
            onChange={this.onChangePhone}
            placeholder=""
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            type="text"
            value={this.state.name}
            onChange={this.onChangeName}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event Sports </Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event Date </Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event StartAt</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event Venue</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event LastRgsDate</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event Format</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event pts_limit</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Account Name</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>IFSC Code</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Total Prize</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Entry Fee</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>event_for </Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={this.state.gender}
            onChange={this.onChangeGender}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={this.state.age}
            onChange={this.onChangeAge}
            placeholder="Age"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            as="select"
            value={this.state.userType}
            onChange={this.onChangeUserType}
          >
            <option>Organiser</option>
            <option>User</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>User Image</Form.Label>
          <Form.Control
            type="file"
            // value={this.state.kycImg}
            onChange={this.onChangekycImg}
            type="file"
            inputprops={{ accept: "image/*" }}
            required

            // onChange={e => this.handleFileRead(e)}
            // size="small"
            // variant="standard"
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    );
  }
}

export default Usercreate;
