import React from "react";
import { Mic2} from "lucide-react";
// import { CountdownTimer } from "./components/CountdownTimer";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, sepolia, hardhat, holesky } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { PodcastsPage } from "./pages/PodcastPage.tsx";
import { ChartsPage } from "./pages/ChartsPage.tsx";
import { AnalyticsPage } from "./pages/AnalyticsPage.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
import Home from "./components/Home.tsx";

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: import.meta.env.VITE_PROJECT_NAME,
  projectId: import.meta.env.VITE_PROJECT_ID,
  chains: [mainnet, sepolia, hardhat, holesky],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white">
              <Navbar />
              <div className="pt-16">
                <Routes>
                  <Route path="/podcasts" element={<PodcastsPage />} />
                  <Route path="/charts" element={<ChartsPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
