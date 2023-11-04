
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
    <div style={{display:'flex !important',justifyContent:'center', fontFamily: "'Poppins', sans-serif", fontSize:'22px', marginTop:'20px', marginLeft:'40px'}}>
    {name === 'me' ? 
    <Card>
    <Card.Title style={{marginLeft:'110px', fontSize:'50px', fontWeight:'bold', color:'#000000' }}><b>HIGH ART</b></Card.Title>
    <Card.Img variant="top" style={{maxWidth:'400px',padding:'20px'}} src='/assets/img/me.jpeg' />
    <Card.Body>
      <Card.Text style={{justifyContent:'center !important', marginLeft:'20px', fontSize:'22px', color:'rgba(25, 25, 51, 0.7)', width:'400px', textAlign:'justify' }}>
        <p style={{textAlign:'justify'}}>artist whose creative projects revolves around abstracts, presented in a contemporary manner.<br/>
Minimalism, volume, textures, big format of canvas and linens.<br/>
Art created by the emotions and energy.
</p>
      <p style={{textAlign:'justify'}}>
Artist worked like  a fashion model in Europe and Asia ,  study at the fashion school - Marangoni in Milan. Always has been interested about different variety or creations.
<br/>Nowadays artist live in Paris.</p>
      </Card.Text>
    </Card.Body>
  </Card>
   : 
    <Card>
      <Card.Title style={{marginLeft:'23px',marginBottom:'10px', fontSize:'24px', fontWeight:'bold', color:'#000000' }}><b>HIGH ART</b></Card.Title>
      <Card.Img variant="top" style={{ width:'150px'}} src={img_} />
      <Card.Body style={{display:'flex !important'}}>
        <Card.Title style={{justifyContent:'center', fontSize:'20px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)', width:'150px', textAlign:'justify'}}>{name}</Card.Title>
        <Card.Text style={{justifyContent:'center', marginLeft:'0px', fontSize:'20px', color:'rgba(25, 25, 51, 0.7)', width:'150px', textAlign:'justify' }}>
        {materials}
        ({dimensions})
        </Card.Text>
        <Card.Text style={{marginLeft:'30px', marginTop:'-5px', fontSize:'25px' }}>
         {price}
        </Card.Text>
      </Card.Body>
    </Card>
    }
    </div>
  );
}

export default CardQR;
