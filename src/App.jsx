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
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-950">
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>
      <div className="block lg:hidden">
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
            backgroundColor: "#0f172a",
            color: "white",
          }}
        >
          <LeftSidebar />
        </Drawer>
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
