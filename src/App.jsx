import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home.jsx";
import Watchlist from "./pages/Watchlist";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const location = useLocation();

  const handleSearch = () => {
    setTriggerSearch((prev) => !prev);
  };

  // Check if current path is "/"
  const isSignUpPage = location.pathname === "/";

  return (
    <>
      {!isSignUpPage && (
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      )}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <Home
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              triggerSearch={triggerSearch}
            />
          }
        />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
