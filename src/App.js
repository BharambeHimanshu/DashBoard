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
import Pod from "./scenes/Pod";
import Billing from "./scenes/Billing";
import Payment from "./scenes/Payment";
import QBR from "./scenes/QBR";
import Trackingupdates from "./scenes/TrackingUpdate";
import Escalations from "./scenes/Escalations";
import Abnormalities from "./scenes/Abnormalities";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
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
              <Route path="/pod" element={<Pod />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/qbr" element={<QBR />} />
              <Route path="/trackingupdates" element={<Trackingupdates />} />
              <Route path="/escalations" element={<Escalations />} />
              <Route path="/abnormalities" element={<Abnormalities />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
