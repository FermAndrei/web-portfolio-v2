import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { AppBar, Toolbar, Avatar, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const handleNavigate = (id) => {
    if (id === "projects") {
      navigate("/projects");
      setActiveSection("projects");
      setOpen(false);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about"];
      const scrollPosition = window.scrollY + 150;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.key === "project") {
      setActiveSection("projects");
    } else if (location.key === "home") {
      setActiveSection("home");
    } else if (location.key === "about") {
      setActiveSection("about");
    }
  }, [location.key]);

  const [showViewer, setShowViewer] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row bg-slate-950 xl:max-w-[1887px] mx-auto">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <LeftSidebar
          onNavigate={handleNavigate}
          activeSection={activeSection}
          setShowViewer={setShowViewer}
        />
      </div>

      {/* Mobile */}
      <div className="block lg:hidden sticky top-0 z-10">
        <AppBar position="static" sx={{ backgroundColor: "#0f172a" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Avatar
              alt="Ferm"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 35, height: 35 }}
            />
          </Toolbar>
        </AppBar>

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
            onNavigate={handleNavigate}
            activeSection={activeSection}
            setShowViewer={setShowViewer}
          />
        </Drawer>
      </div>

      {/* Main Content */}
      <Outlet />
      <div className="">
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
