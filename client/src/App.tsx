import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Chatbot } from "@/components/ui/Chatbot";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Booking from "@/pages/Booking";
import Contact from "@/pages/Contact";
import Experiences from "@/pages/Experiences";
import Dining from "@/pages/Dining";

// In production, derive the base path from where the bundle is served
// (bundle lives in <base>/assets/), so the app works at "/" or in a subfolder.
const routerBase = import.meta.env.PROD
  ? new URL("..", import.meta.url).pathname.replace(/\/$/, "")
  : "";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/index.html" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/dining" component={Dining} />
      <Route path="/booking" component={Booking} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={routerBase}>
          <Router />
          <Chatbot />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
