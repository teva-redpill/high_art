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

  const name_ = name.replace('-',' ');
  const img_ = `/assets/img/${name}.JPG`
  
  return (
    <div style={{display:'flex !important',justifyContent:'center', fontFamily: "'Poppins', sans-serif", fontSize:'22px', marginTop:'20px', marginLeft:'40px'}}>
    <Card>
      <Card.Body style={{display:'flex !important'}}>
        <Card.Title style={{justifyContent:'center', fontSize:'30px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)', width:'150px', textAlign:'justify'}}>{name_}</Card.Title>
        <Card.Text style={{justifyContent:'left', marginLeft:'0px', fontSize:'20px', color:'rgba(25, 25, 51, 0.7)', width:'150px', textAlign:'left' }}>
        {materials}
        ({dimensions})
        </Card.Text>
        <Card.Text style={{marginLeft:'0px', marginTop:'-5px', fontSize:'25px' }}>
         {price}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardQR;
