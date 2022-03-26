import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {

    return (

        <Container>
            <Row className="mt-5">
                <Col sm={7} >
                    <img src="imagini/amazon-seattle.jpg" alt="Products Sales Company" />
                </Col>
                <Col sm={5} >
                    <div >                    
                        <h2>Products Sales Company</h2>
                        <h4 className="mb-4 mt-4">410 Terry Ave N</h4>
                        <h5 className="mb-4">Seattle, WA 98108-1226 United States</h5>
                        <h5 className="mb-4">phone: (206) 266-1000</h5>
                        <h5 className="mb-4">email: productssales@email.com</h5>
                        <h5 className="mb-4">website: www.productssalescompany.com</h5>
                        <h5>Daily: 10:00 - 22:00</h5>
                    </div>        
                </Col>
            </Row>
        </Container>       
    );
}
 
export default Contact;