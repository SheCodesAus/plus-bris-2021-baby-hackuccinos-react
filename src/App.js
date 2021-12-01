import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/Homepage";
import CodersPage from "./pages/CodersPage/CodersPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ImpactPage from "./pages/ImpactPage/ImpactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App () {
  return (
    <Router>
        <Header />

        <Routes>
          <Route exact path="/coders" element={<CodersPage/>}/>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/impact' element={<ImpactPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/submit' element={<RegistrationPage/>}/>
          <Route exact path='/contact' element={<ContactPage/>}/>
          <Route exact path='/errorpage' element={<ErrorPage/>}/>
          <Route exact path="/success" element={<SuccessPage/>}/>
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;