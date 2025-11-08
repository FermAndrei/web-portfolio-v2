import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="flex justify-between min-h-screen">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default App;
