import React, { Component, Fragment } from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
//import './assets/css/bootstrap.min.css';

import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";


class App extends Component {
  render() {
    return (
       <Fragment>
          <BrowserRouter>
            <Routes>
                 <Route exact path="/" element={<ReadPage/>} ></Route>
                 <Route exact path="/create" element={<CreatePage/>}></Route>
                 <Route exact path="/update/:id" element={<UpdatePage/>}></Route>

            </Routes>
                 
          </BrowserRouter>
       </Fragment>
    );
  }
}

export default App;