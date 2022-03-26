import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Product_cards from "./product_cards";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import NotFound from "./notfound";
import Product_form from "./product_form";
import Contact from "./contact";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import app from "./init";
import "./style/style.css";

export default function App() {
  const [card_list, setCard_list] = useState([]);

  const db = getFirestore(app); //This includes access to the firestore

  const getList = async () => {
    const productsList = await getDocs(collection(db, "firebaseProducts"));
    let newList = productsList.docs.map((doc) => {
      let product = doc.data();  //  Create a new object
      //product.image = `${image}`;  //  Correction of the path
      product.id = doc.id;      // add the ID to the "product" object (must!)
      return product;
    });
    setCard_list(newList);   //  Updating "state" object
  };

  useEffect(() => {
    getList();
  }, []);

  const addProduct = async (product) => {
    // Add a new document using an automatically generated ID.
    const docRef = await addDoc(collection(db, "firebaseProducts"), product);
    getList();  //  Re-display the list
    console.log("Document added with ID: ", docRef.id);
  };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "firebaseProducts", id));
    getList();  //  Re-display the list
  }

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Products Sales Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/product_form">
              New Product
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Product_cards cards={card_list} delete_item={deleteProduct}/>
        </Route>
        <Route path="/product_form">
          <Product_form deliver={addProduct} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}
