import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import ExamPrep from "./pages/ExamPrep";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Goals from "./pages/Goals";
import InteractiveTutoring from "./pages/InteractiveTutoring";
import Help from "./pages/Help";

const queryClient = new QueryClient();

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {!isHomePage && <AppSidebar />}
        <div className="flex-1 flex flex-col">
          {!isHomePage && <AppHeader />}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/exam-prep" element={<ExamPrep />} />
              <Route path="/community" element={<Community />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/tutoring" element={<InteractiveTutoring />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;