import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Project from "./pages/ProjectPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:id" element={<ProductViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
