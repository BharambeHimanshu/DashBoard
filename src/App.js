import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import PendingOrder from "./scenes/PendingOrder";
import EnrouteForPickup from "./scenes/EnrouteForPickup";
import AtPickup from "./scenes/AtPickup";
import Intransit from "./scenes/Intransit";
import AtUnloading from "./scenes/AtUnloading";
import Complete from "./scenes/Complete";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pendingorder" element={<PendingOrder />} />
              <Route path="/enrouteforpickup" element={<EnrouteForPickup />} />
              <Route path="/atpickup" element={<AtPickup />} />
              <Route path="/intransit" element={<Intransit />} />
              <Route path="/atunloading" element={<AtUnloading />} />
              <Route path="/completed" element={<Complete />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
