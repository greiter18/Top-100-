import React from 'react';
import {Routes ,Route } from 'react-router-dom';
import Main from './components/main';
import { HashRouter } from 'react-router-dom';

const App = () => (
  <div>
     {/* <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
      </HashRouter> */}
      <Main/>
  </div>
)

export default App;
