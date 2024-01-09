import CardQR from './components/cardQR';
import Serials from './components/serials';
import About from './components/about';
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
          <Route exact path="/" element={<About lang='en'/>} />
          <Route exact path="/parietal" element={<CardQR name='Parietal' dimensions='215x190' materials='acrylic on linen' price='9000 €' />} />
          <Route exact path="/iceberg" element={<CardQR name='Iceberg' dimensions='187x147' materials='acrylic on canvas' price='7000 €' />} />
          <Route exact path="/golden" element={<CardQR name='Golden-fleece' dimensions='116x104' materials='acrylic , spray on linen' price='3500 €'/>} />
          <Route exact path="/sliver" element={<CardQR name ='Silver' dimensions='150x150' materials='acrylic, spray on canvas' price='1700 €'/>} />
          <Route exact path="/green" element={<CardQR name='Green' dimensions='150x150' materials='acrylic, spray on canvas' price='1700 €'/>} />
          <Route exact path="/blue" element={<CardQR name='Blue' dimensions='150x150' materials='acrylic, spray on canvas' price='1700 €'/>} />
          <Route exact path="/atoms" element={<CardQR name='Atoms' dimensions='200x143' materials='acrylic on canvas' price='7000 €'/>} />
          <Route exact path="/energy" element={<CardQR name='Black-rock' dimensions='187x144' materials='acrylic, spray on canvas' price='7000 €'/>} />
          <Route exact path="/deepness" element={<CardQR name='Deepness' dimensions='150x150' materials='acrylic on canvas' price='7000 €'/>} />
          <Route exact path="/forest" element={<CardQR name='Forest' dimensions='150x150' materials='acrylic on canvas' price='7000 €'/>} />
          <Route exact path="/serenity" element={<CardQR name='Serenity' dimensions='200x150' materials='acrylic on canvas' price='7000 €'/>} />
          <Route exact path="/me" element={<About lang='en'/>} />
          <Route exact path="/art/1" element={<Serials id='1'/>} />
          <Route exact path="/art/2" element={<Serials id='2'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
