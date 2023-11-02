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
          <Route exact path="/parietal" element={<CardQR name='parietal' />} />
          <Route exact path="/iceberg" element={<CardQR name='iceberg' />} />
          <Route exact path="/golden" element={<CardQR name='golden' />} />
          <Route exact path="/silver" element={<CardQR name ='silver' />} />
          <Route exact path="/green" element={<CardQR name='green' />} />
          <Route exact path="/blue" element={<CardQR name='blue' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
