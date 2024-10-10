import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Abilities from "./pages/Abilities";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { LanguageProvider } from "./contexts/LanguageContext";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <HashRouter>
          <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abilities" element={<Abilities />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Layout>
        </HashRouter>
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;