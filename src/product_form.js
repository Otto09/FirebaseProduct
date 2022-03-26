import React, { useState } from "react";
import {Form, Button, Container} from "react-bootstrap";

const Product_form = (props) => {
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [availability, setAvailability] = useState();
  const [best_seller, setBest_seller] = useState();
  const [image, setImage] = useState();

  const stil = {
    h2: { textAlign: "center" }
  };

  const afterSubmit = (evt) => {
    evt.preventDefault();
    const product_card = { price, name, image, availability, best_seller};
    props.deliver(product_card);
    // I empty the form controls
    setPrice("");
    setName("");
    setAvailability("");
    setBest_seller("");
    setImage("");
  };
  
  const stil2 = {
    width: "750px",
};

  return (
    <Container  style={stil2}>
      <h2 className="mt-4" style={stil.h2}>
        {id > 0 ? "Edit product" : "New product"}
      </h2>
      <hr />
      <Form onSubmit={afterSubmit}>
        <Form.Group>
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Availability:</Form.Label>
          <Form.Control
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Best seller:</Form.Label>
          <Form.Control
            type="text"
            value={best_seller}
            onChange={(e) => setBest_seller(e.target.value)}
          />
        </Form.Group><br />

        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button onClick={() => window.location.reload(true)} variant="primary" size="lg">
            Reset
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Product_form;