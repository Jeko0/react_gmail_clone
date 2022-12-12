import React from "react";
import "./App.css";
import Header from "./components/Shared/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/Mainpage/EmailList";
import SendMail from "./components/Shared/SendMail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            {/*specific mail*/}
            <Route path="/mail" element={<Mail />} />
            {/*all mail list*/}
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>

      <SendMail />
      </div>
    </Router>
  );
}

export default App;
