import Card from 'react-bootstrap/Card';
import React from 'react';

// eslint-disable-next-line no-restricted-imports
const Serials = props => {
  const {
    id
  } = props;

  if (id === '1') 
  return (

    <div style={{display:'flex !important',justifyContent:'center', fontFamily: "'Poppins', sans-serif", fontSize:'22px', marginTop:'20px', marginLeft:'40px', backgroundColor:'#EFEFEF', align:'center', width:'240px', padding:'15px'}}>
    <Card>
      <Card.Body style={{display:'flex !important'}}>
        <Card.Title style={{justifyContent:'center', fontSize:'22px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'justify'}}>
          "Energy"  2017
          </Card.Title>
          <Card.Title style={{justifyContent:'center', fontSize:'22px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'justify'}}>
          "Black Rock" 2023
          </Card.Title>
        <Card.Text style={{justifyContent:'left', marginLeft:'0px', fontSize:'20px', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'left' }}>
        Acrylic, spray, acrylic pasta on canvas
        (187/144)
        </Card.Text>
        <Card.Text style={{justifyContent:'left', marginLeft:'0px', fontSize:'9px', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'center' }}>
        @highart design <br/>
        serial number : 08122022-1
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
  if (id === '2')
  return (
    <div style={{display:'flex !important',justifyContent:'center', fontFamily: "'Poppins', sans-serif", fontSize:'22px', marginTop:'20px', marginLeft:'40px', backgroundColor:'#EFEFEF', align:'center', width:'240px', padding:'15px'}}>
      <Card>
        <Card.Body style={{display:'flex !important'}}>
          <Card.Title style={{justifyContent:'center', fontSize:'22px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'justify'}}>
            "Parietal"  2020
            </Card.Title>
          <Card.Text style={{justifyContent:'left', marginLeft:'0px', fontSize:'20px', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'left' }}>
          Acrylic on linen
          (215/190)
          </Card.Text>
          <Card.Text style={{justifyContent:'left', marginLeft:'0px', fontSize:'9px', color:'rgba(25, 25, 51, 0.7)', width:'200px', textAlign:'center' }}>
          @highart design <br/>
          serial number : 08122022-2
          </Card.Text>
        </Card.Body>
      </Card>
    
      </div>
    )
}

export default Serials;
