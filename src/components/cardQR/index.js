
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

// eslint-disable-next-line no-restricted-imports
const CardQR = props => {
  const {
    name,
    dimensions,
    materials,
    price,
  } = props;

  const img_ = `/assets/img/${name}.jpg`
  return (
    <div style={{fontFamily: "'Poppins', sans-serif", fontSize:'22px', marginTop:'20px', marginLeft:'40px'}}>
    {name === 'me ' ? 
    <Card>
    <Card.Img variant="top" style={{ width:'300px', backgroundColor:'#000000', padding:'10px'}} src='/assets/img/me.jpeg' />
    <Card.Body>
      <Card.Title style={{fontSize:'22px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)' }}>HIGH ART</Card.Title>
      <Card.Text style={{marginLeft:'5px', fontSize:'19px', color:'rgba(25, 25, 51, 0.7)' }}>
      Independent artist whose creative projects revolves around abstracts, presented in a contemporary manner.
      Artist uses acrylic and a variety  of textures. The artist create large format art on canvas, conveying all the emotions and sensuality of the artist.
      Currently the artist lives in Paris.
      </Card.Text>
    </Card.Body>
  </Card>
   : 
    <Card>
      <Card.Title style={{marginLeft:'60px', marginBottom:'5px', fontSize:'28px'}}>Highart</Card.Title>
      <Card.Img variant="top" style={{ width:'200px', backgroundColor:'#000000', padding:'10px'}} src={img_} />
      <Card.Body>
        <Card.Title style={{fontSize:'22px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)' }}>{name}</Card.Title>
        <Card.Text style={{marginLeft:'5px', fontSize:'19px', color:'rgba(25, 25, 51, 0.7)' }}>
        {materials}
        </Card.Text>
        <Card.Text style={{marginLeft:'3%', marginTop:'-15px', fontSize:'19px', color:'rgba(25, 25, 51, 0.7)' }}>
        ({dimensions})
        </Card.Text>
        <Card.Text style={{marginLeft:'4%', marginTop:'-5px', fontSize:'25px' }}>
         {price}
        </Card.Text>
      </Card.Body>
    </Card>
    }
    </div>
  );
}

export default CardQR;
