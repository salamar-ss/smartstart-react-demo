import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Generator from "./pages/Generator/Generator";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Preview from "./pages/Preview/Preview";
import Templates from "./pages/Templates/Templates";
import TemplateDetails from "./pages/TemplateDetails/TemplateDetails";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/:id" element={<TemplateDetails />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;