// IMPORTS
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
   
      
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<User />} />
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      
    
  );
}

export default App;
