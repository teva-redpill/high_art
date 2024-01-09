import Card from 'react-bootstrap/Card';
import React from 'react';

// eslint-disable-next-line no-restricted-imports
const About = props => {
  const {
    lang
  } = props;

  if (lang === 'fr') 
  return (
    <Card>
    <Card.Title style={{marginLeft:'40px', fontSize:'30px', fontWeight:'bold', color:'#000000' }}><b>HIGH ART</b></Card.Title>
    <Card.Img variant="top" style={{maxWidth:'400px',padding:'20px'}} src='/assets/img/me.jpeg' />
    <Card.Body>
      <Card.Text style={{justifyContent:'center !important', marginLeft:'0px', fontSize:'22px', color:'rgba(25, 25, 51, 0.7)', width:'240px', textAlign:'justify' }}>
        <p style={{textAlign:'justify'}}>L'art <b>abstrait</b> est une exploration des émotions à travers une forme pure et intacte.<br/>
        Nous explorons la capacité de l'artiste à distiller les sentiments dans les formes et les couleurs les plus essentielles, créant ainsi <b>le langage du cœur et de l'âme.</b><br/>
 </p>
      <p style={{textAlign:'justify'}}>
      L'esprit de ces arts vibre de <b>vitalité</b>, d’émotions brutes et d’une énergie illimitée.
      Le  <b>minimalisme, l'acrylique, le volume, les textures, les grandes toiles et le lin </b> façonnent ces oeuvres.
      </p>
 <p style={{textAlign:'justify'}}>
 Elle a travaillé comme mannequin et étudié à l'école de mode de Marangoni à Milan.
 </p>
 <p>
 Elle vit aujourd'hui à Paris, une ville où l'art, la mode et la créativité s'entremêlent.
 </p>
      </Card.Text>
    </Card.Body>
  </Card>
  
  )
  if (lang === 'en')
  return (
    <Card>
    <Card.Title style={{paddingLeft: '70px', paddingTop:'20px' ,fontSize:'20px', fontWeight:'bold', color:'rgba(25, 25, 51, 0.7)' }}><b>HIGH ART</b></Card.Title>
    <Card.Img variant="top" style={{maxWidth:'150px',paddingLeft:'40px', paddingTop:'5px'}} src='/assets/img/me.jpeg' />
    <Card.Body>
    <Card.Text style={{justifyContent:'center !important', marginLeft:'0px', fontSize:'13px', color:'rgba(25, 25, 51, 0.7)', width:'240px', textAlign:'justify' }}>
       <p style={{textAlign:'justify'}}>L'art <b>abstrait</b> est une exploration des émotions à travers une forme pure et intacte.<br/>
       Nous explorons la capacité de l'artiste à distiller les sentiments dans les formes et les couleurs les plus essentielles, créant ainsi <b>le langage du cœur et de l'âme.</b><br/>
</p>
     <p style={{textAlign:'justify'}}>
     L'esprit de ces arts vibre de <b>vitalité</b>, d’émotions brutes et d’une énergie illimitée.
     Le  <b>minimalisme, l'acrylique, le volume, les textures, les grandes toiles et le lin </b> façonnent ces oeuvres.
     </p>
<p style={{textAlign:'justify'}}>
Elle a travaillé comme mannequin et étudié à l'école de mode de Marangoni à Milan.
</p>
<p>
Elle vit aujourd'hui à Paris, une ville où l'art, la mode et la créativité s'entremêlent.
</p> ______________________ <br/>
     </Card.Text>
      <Card.Text style={{justifyContent:'center !important', marginLeft:'0px', fontSize:'13px', color:'rgba(25, 25, 51, 0.7)', width:'240px', textAlign:'justify' }}>
        <p style={{textAlign:'justify'}}><b>Abstract</b> art is an exploration of emotions through pure, unadulterated form.<br/>
        We delve into the artist capacity to distill feelings into the most essential shapes and colors, creating language of the <b>heart and soul.</b><br/>
      </p>
      <p style={{textAlign:'justify'}}>
        The very core of these arts pulsates with <b>vitality</b> of <b>raw emotions</b> and <b>boundless energy</b><br/>
      <b>Minimalism, acrylic, volume, textures, grand canvases, and linens</b> shape craft.
      </p>
<p style={{textAlign:'justify'}}>
Before artist worked as a fashion model and study in fashion school of Marangoni in Milan.
</p>
<p>
Nowadays artist lives in Paris, a city where art, fashion, and creativity intertwine together.
</p>
      </Card.Text>
    </Card.Body>
  </Card>
   
    )
}

export default About;
