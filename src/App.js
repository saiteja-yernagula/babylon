import React from 'react';
import App2 from './MainComponets/App2';
import App1 from './MainComponets/App1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<App1/>}/>
        <Route path='/babylon' element={<App2/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
