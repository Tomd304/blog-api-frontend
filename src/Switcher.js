import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Post from "./Post";

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
