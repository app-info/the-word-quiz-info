import React from "react";
import { Info, PrivacyPolicy } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <Info />
      <PrivacyPolicy />
    </div>
  );
}

export default App;
