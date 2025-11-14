import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import {
  AppBar,
  Box,
  Toolbar,
  Avatar,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-slate-950 xl:max-w-[1910px] xl:mx-auto">
      <div className="hidden lg:block min-w-58 w-80">
        <LeftSidebar
          activeSection={activeSection}
          onNavigate={handleScrollTo}
        />
      </div>

      <div className="block lg:hidden sticky top-0 z-10">
        <Box>
          <AppBar position="static" sx={{ backgroundColor: "#0f172a" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Avatar
                alt="Ferm"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </Toolbar>
          </AppBar>
        </Box>

        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#0f172a",
              color: "white",
              width: 260,
            },
          }}
        >
          <LeftSidebar
            activeSection={activeSection}
            onNavigate={handleScrollTo}
          />
        </Drawer>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <MainContent />
      </div>

      {/* RIGHT SIDEBAR */}
      <div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
