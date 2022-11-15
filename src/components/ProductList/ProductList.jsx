import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = ({ getProducts, products, deleteProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [hover, setHover] = useState("");
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {products.map((item) => (
        <Card
          onClick={() => setSelectedProduct(item.id)}
          onMouseEnter={() => setHover(item.id)}
          onMouseLeave={() => setHover("")}
          key={item.id}
          style={{
            width: "18rem",
            margin: "2rem",
            transition: "0.8s",
            border: selectedProduct === item.id ? "1px solid black" : "",
            transform: hover === item.id ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Card.Img src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}USD</Card.Text>
            <Card.Text>{item.descr}</Card.Text>
            <Card.Body className="d-flex justify-content-between">
              <Link to={`/edit/${item.id}`}>
                <Button variant="dark text-light">EDIT</Button>
              </Link>
              <Button
                onClick={() => deleteProduct(item.id)}
                variant="dark text-light"
              >
                DELETE
              </Button>
              <Button variant="dark text-light">DETAILS</Button>
            </Card.Body>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
