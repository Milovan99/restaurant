import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/pages/About";
import { Service } from "./components/pages/Service";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
