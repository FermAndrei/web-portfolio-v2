import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-80">
        <LeftSidebar />
      </div>
      <div className="flex-1">
        <MainContent />
      </div>
      <div className="lg:w-80">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
