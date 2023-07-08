import * as React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialPage from './component/initialPage';
import Chart from './component/sub_component/chartComponent';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/chart' element={<Chart />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
