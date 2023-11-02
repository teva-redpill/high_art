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
          <Route exact path="/" element={<CardQR name='default'/>} />
          <Route exact path="/parietal" element={<CardQR name='parietal' dimensions='215x190' materials='acrylic on linen' price='5000 €' />} />
          <Route exact path="/iceberg" element={<CardQR name='iceberg' dimensions='187x147' materials='acrylic on canvas' price='5000 €' />} />
          <Route exact path="/golden" element={<CardQR name='golden-fleece' dimensions='116x104' materials='acrylic , spray on linen' price='5000 €'/>} />
          <Route exact path="/silver" element={<CardQR name ='silver' dimensions='150x150' materials='acrylic, spray on canvas' price='1000 €'/>} />
          <Route exact path="/green" element={<CardQR name='green' dimensions='150x150' materials='acrylic, spray on canvas' price='1000 €'/>} />
          <Route exact path="/blue" element={<CardQR name='blue' dimensions='150x150' materials='acrylic, spray on canvas' price='1000 €'/>} />
          <Route exact path="/atoms" element={<CardQR name='atoms' dimensions='200x143' materials='acrylic on canvas' price='5000 €'/>} />
          <Route exact path="/energy" element={<CardQR name='energy' dimensions='187x144' materials='acrylic, spray on canvas' price='5000 €'/>} />
          <Route exact path="/deepness" element={<CardQR name='deepness' dimensions='150x150' materials='acrylic on canvas' price='5000 €'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
