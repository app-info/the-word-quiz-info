import React, { useState } from "react";
import { Info, PrivacyPolicy } from "./pages";
import { Navbar } from "./components";

function App() {
  const [language, setLanguage] = useState<string>("GR");
  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      {/* <Info language={language} /> */}
      <PrivacyPolicy />
    </div>
  );
}

export default App;
