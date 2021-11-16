import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import CodersPage from "./pages/CodersPage/CodersPage";
import ImpactPageCareer from "./pages/ImpactPageCareer/ImpactPageCareer";
import ImpactPageEnrolment from "./pages/ImpactPageEnrolment/ImpactPageEnrolment";
import ImpactPageHire from "./pages/ImpactPageHire/ImpactPageHire";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App () {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Nav />

        <Routes>
          <Route path="/coders/:id">
            <CodersPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/careers">
            <ImpactPageCareer />
          </Route>
          <Route path="/enrollments">
            <ImpactPageEnrolment />
          </Route>
          <Route path="/hires">
            <ImpactPageHire />
          </Route>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App