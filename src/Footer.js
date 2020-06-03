import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter color="black" className="footer font-small bg-dark">
        <MDBContainer fluid className=" text-center py-3">
          <MDBRow>
            <MDBCol md="12">
              <h5 className="title">
                Aliquam lorem ante, dapibus in, viverra quis, feugiat
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: {"GT "}
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
