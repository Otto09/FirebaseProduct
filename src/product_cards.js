import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ACard from "./acard";

const Product_cards = (props) => {

    const { cards, delete_item } = props;
    const card_list = cards.map((item) => (
        <ACard 
            price={item.price} 
            availability={item.availability} 
            name={item.name}
            image={item.image} 
            best_seller={item.best_seller} 
            id={item.id} 
            key={item.id} 
            delete_item={delete_item} 
        />
    ));

    const stil = {
        h2: { textAlign: "center" }
    };

    return (
        <Container>
          <h2 className="mt-3 mb-3" style={stil.h2}>
            Products
          </h2>
          <Row>{card_list}</Row>
        </Container>
    );
}
 
export default Product_cards;