import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Project from "./pages/ProjectPage";
import ProductViewPage from "./pages/ProductViewPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/:slug" element={<ProductViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
