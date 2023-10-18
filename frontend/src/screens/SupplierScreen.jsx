import React from 'react'
import {
    Container,
} from 'react-bootstrap';
import Meta from '../components/Meta';
import AddSupplierProduct from '../components/AddSupplierProduct';
import './supplierStyles.css'

const SupplierScreen = () => {
    return (
        <Container className='supplierContainer'>
            <Meta
                title="Fasal.com | Supplier"
            />
            <h1 className='title'>SUPPLIER</h1>
            <h4 className="supplier-title">
                Sell your wide variety of products related to farming, through our platform. We have millions of farmers connected from all parts of country.</h4>
            <br />
            <AddSupplierProduct />
        </Container>
    )
}

export default SupplierScreen