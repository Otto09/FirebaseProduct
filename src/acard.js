import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card'

const ACard = (props) => {
  const { price, image, name, availability, best_seller, delete_item, id } = props;

  const stil = {
    svg: {
      pointerEvents: "none"
    }
  };

  const stilCard = {
    height: '36rem',
    paddingBottom: '12px'  
  }

  const bold = {
    fontWeight: 'bold'
  }

  return (
    <Col sm={4} style={stilCard}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title><h4>{name}</h4></Card.Title>
          <Card.Text>
            <h5>{price} $</h5>
            <h6>{availability}</h6>
            <p>is best seller? <span style={bold}>{best_seller}</span></p>
            <div className="text-center">
              <Button variant="link" onClick={() => delete_item(id)} id={id} style={stil}>
                <BsTrashFill />
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ACard;