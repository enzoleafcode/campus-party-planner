import { useState } from "react";
import "./App.css";
import EventProvider from "./context/EventContext";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <EventProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </BrowserRouter>
      </EventProvider>
    </>
  );
}

export default App;
