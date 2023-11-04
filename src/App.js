import CardQR from './components/cardQR';
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div style={{justifyContent:'center'}}>
    <Router>
        <Routes>
          <Route exact path="/" element={<CardQR name='about_en'/>} />
          <Route exact path="/parietal" element={<CardQR name='parietal' dimensions='215x190' materials='acrylic on linen' price='8000 €' />} />
          <Route exact path="/iceberg" element={<CardQR name='iceberg' dimensions='187x147' materials='acrylic on canvas' price='7000 €' />} />
          <Route exact path="/golden" element={<CardQR name='golden-fleece' dimensions='116x104' materials='acrylic , spray on linen' price='2000 €'/>} />
          <Route exact path="/sliver" element={<CardQR name ='silver' dimensions='150x150' materials='acrylic, spray on canvas' price='1700 €'/>} />
          <Route exact path="/green" element={<CardQR name='green' dimensions='150x150' materials='acrylic, spray on canvas' price='1700 €'/>} />
          <Route exact path="/blue" element={<CardQR name='blue' dimensions='150x150' materials='acrylic, spray on canvas' price='1700 €'/>} />
          <Route exact path="/atoms" element={<CardQR name='atoms' dimensions='200x143' materials='acrylic on canvas' price='5000 €'/>} />
          <Route exact path="/energy" element={<CardQR name='black rock' dimensions='187x144' materials='acrylic, spray on canvas' price='5700 €'/>} />
          <Route exact path="/deepness" element={<CardQR name='deepness' dimensions='150x150' materials='acrylic on canvas' price='5000 €'/>} />
          <Route exact path="/forest" element={<CardQR name='forest' dimensions='150x150' materials='acrylic on canvas' price='7000 €'/>} />
          <Route exact path="/me" element={<CardQR name='about_en'/>} />
          <Route exact path="/fr" element={<CardQR name='about_fr'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
