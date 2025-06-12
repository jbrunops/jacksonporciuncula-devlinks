import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy loading dos componentes de página
const Portfolio = lazy(() => import("./pages/Portfolio"));
const UxUi = lazy(() => import("./pages/UxUi"));
const Softwares = lazy(() => import("./pages/Softwares"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (was cacheTime in v4)
    },
  },
});

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Portfolio />
              </Suspense>
            </Layout>
          } 
        />
        <Route 
          path="/ux-ui" 
          element={
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <UxUi />
              </Suspense>
            </Layout>
          } 
        />
        <Route 
          path="/softwares" 
          element={
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Softwares />
              </Suspense>
            </Layout>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
