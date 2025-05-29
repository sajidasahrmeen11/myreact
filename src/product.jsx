import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function ProductComponent() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.img} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductComponent;
