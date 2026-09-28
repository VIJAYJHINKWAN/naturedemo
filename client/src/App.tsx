import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
        <Router />
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
