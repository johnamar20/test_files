import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import sidebarImage from "assets/img/sidebar-3.jpg";
import routes from "routes.js";
import { Card, Container, Row, Col } from "react-bootstrap";
function EditProfile() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <Container fluid>
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />

        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />

          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <MDBCol md="6" size="6">
            <form>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                NAME
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                required="true"
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                EMAIL
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
                required="true"
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                MOBILE NUMBER
              </label>
              <input
                type="number"
                id="defaultFormRegisterNameEx"
                className="form-control"
                required="true"
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
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
            </form>
          </MDBCol>
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default EditProfile;
