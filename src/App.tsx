import { Route, Routes } from "react-router-dom";

import Generator from "./pages/Generator/Generator";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Preview from "./pages/Preview/Preview";
import Templates from "./pages/Templates/Templates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;