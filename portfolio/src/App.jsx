import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../src/layout/layout';
 
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
 
export default App;