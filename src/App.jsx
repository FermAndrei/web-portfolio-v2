import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Project from "./pages/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
