import React, { useState } from "react";
import { Info, PrivacyPolicy } from "./pages";
import { Navbar } from "./components";

function App() {
  const [language, setLanguage] = useState<string>("GR");
  return (
    <div className="App" id="home">
      <Navbar language={language} setLanguage={setLanguage} />
      {/* <Info language={language} /> */}
      <PrivacyPolicy />
    </div>
  );
}

export default App;
