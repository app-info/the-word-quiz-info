import React, { useEffect, useState } from "react";
import { Info, PrivacyPolicy } from "./pages";
import { Navbar } from "./components";

function App() {
  const [userLanguage, setUserLanguage] = useState("");

  console.log(userLanguage);

  useEffect(() => {
    const language = window.navigator.language || window.navigator.language;
    setUserLanguage(language);
  }, []);

  return (
    <div className="App" id="home">
      <Navbar />
      <Info userLanguage={userLanguage} />
      <PrivacyPolicy />
    </div>
  );
}

export default App;
