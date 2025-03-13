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
        <Route path="/restaurant" element={<Home />} />
        <Route path="/restaurant/about" element={<About />} />
        <Route path="/restaurant/service" element={<Service />} />
        <Route path="/restaurant/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
