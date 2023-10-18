import React from 'react'
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            <h1 className="main-title">OUR SERVICES</h1>
            
            <Container className="services">
                <Row>
                    <Col md={4}>
                        <h5 className="sub-title">Heavy Machine</h5>
                        <Image className="img" src="images/services/heavy.svg" fluid />
                        <p className="sub-desc">No need to worry of labour costing more. Just rent all types of machine here!!</p>
                    </Col>
                    <Col md={4}>
                        <h5 className="sub-title">Supplier</h5>
                        <Image className="img" src="images/services/supplier.svg" fluid />
                        <p className="sub-desc">Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it.</p>
                    </Col>
                    <Col md={4}>
                        <h5 className="sub-title">Consumer</h5>
                        <Image className="img" src="images/services/consumer.svg" fluid />
                        <p className="sub-desc">Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OurServices
