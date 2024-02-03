import './App.css';
import React from 'react';
import FrontPage from './components/frontPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UploadPage from './components/uploadPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<FrontPage />} />
          <Route path="upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
