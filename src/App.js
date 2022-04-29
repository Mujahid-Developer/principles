import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
