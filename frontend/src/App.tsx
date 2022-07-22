import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from './pages/Main';
import Pictureupload from './pages/Pictureupload';
import Style from './pages/Style';
import Results from './pages/Results';
import Loading from './pages/Loading';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/pictureupload" element={<Pictureupload/>}/>
        <Route path="/style" element={<Style/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/loading" element={<Loading/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
