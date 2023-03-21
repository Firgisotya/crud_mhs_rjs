import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './component/layout';
import Index from './Mahasiswa';
import Create from './Mahasiswa/create';
import Edit from './Mahasiswa/edit';

function App() {
  return (
    <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mahasiswa" element={<Create />} />
          <Route path="/mahasiswa/:id" element={<Edit />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
