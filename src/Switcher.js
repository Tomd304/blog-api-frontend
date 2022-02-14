import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
