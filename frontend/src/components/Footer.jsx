import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'

import './Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <div style={{ backgroundColor: "#008f11" }}>
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Fasal.com</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                The purpose of Fasal.com is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><Link to="/farmer" className="dark-grey-text">Famer</Link></p>
                            <p><Link to="/consumer" className="dark-grey-text">Consumer </Link></p>
                            <p><Link to="/supplier" className="dark-grey-text">Supplier</Link></p>
                            <p><Link to="/cart" className="dark-grey-text">Cart</Link></p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><i className="fa fa-home mr-3" /> Nadiad, Gujarat</p>
                            <p><i className="fa fa-envelope mr-3" /> abc@example.com</p>
                            <p><i className="fa fa-phone mr-3" /> + 91 12345 67890</p>
                            <p><i className="fa fa-print mr-3" /> + 92 12345 67890</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                    Fasal.com
                </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
