import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Button, Stack } from "@mui/material";
import {
  MapPin,
  Download,
  Mail,
  Home,
  User,
  Trophy,
  Briefcase,
  Code,
  FileText,
  Moon,
} from "lucide-react";
import { CiLinkedin } from "react-icons/ci";

export function LeftSidebar({ activeSection = "home" }) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "achievements", icon: Trophy, label: "Achievements" },
    { id: "projects", icon: Code, label: "Projects" },
  ];
  const year = new Date().getFullYear();

  return (
    <aside className="bg-slate-900/50 border-r border-slate-800 flex flex-col h-screen sticky top-0">
      <div className="flex flex-col h-full bg-slate-900 text-white">
        <div className="flex flex-col items-center text-center pt-4">
          <Avatar
            alt="Ferm Andrei"
            src="/static/images/avatar/1.jpg"
            sx={{
              bgcolor: deepOrange[500],
              width: 80,
              height: 80,
            }}
          />
          <h2 className="text-xl font-bold pt-3">Ferm Andrei V. Trillana</h2>
          <p className="text-base text-[#34d399]">Frontend Developer</p>
          <div className="flex items-center gap-1 text-base text-slate-400">
            <MapPin className="w-3 h-3" />
            <span>Liliw, Laguna, PH</span>
          </div>
        </div>

        <div className="p-4">
          <Stack spacing={1}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              sx={{
                fontSize: "1rem",
              }}
            >
              Send Email
            </Button>

            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "1rem",
                }}
              >
                <Download size={16} />
                Resume
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="small"
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "1rem",
                }}
              >
                <CiLinkedin size={16} />
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </div>

        <nav className="p-4 border-b border-t border-slate-800">
          <div className="space-y-0.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-emerald-600/20 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-base">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800 mt-auto">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-slate-400 text-xs">Dark Mode</span>
            <div className="w-9 h-5 bg-emerald-600 rounded-full relative cursor-pointer">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <p className="text-slate-500 text-xs">
            Built by Ferm Andrei. <br />© {year} All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
