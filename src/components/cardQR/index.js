
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
// eslint-disable-next-line no-restricted-imports
const CardQR = props => {
  const {
    name
  } = props;

  const img_ = `/assets/img/${name}.jpg`
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img_} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardQR;