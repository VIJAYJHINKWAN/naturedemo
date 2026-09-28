import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Stay", href: "/rooms" },
    { name: "Experiences", href: "/experiences" },
    { name: "Dining", href: "/dining" }, // Add dining since we have a food image
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled ? "bg-primary/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <Leaf className={cn("h-6 w-6 transition-colors", scrolled ? "text-secondary" : "text-white group-hover:text-secondary")} />
            <span className={cn("font-serif text-2xl font-semibold tracking-wide transition-colors", scrolled ? "text-secondary" : "text-white")}>
              Serenterra
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent",
                  location === link.href ? "text-accent" : scrolled ? "text-white/90" : "text-white"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/booking">
            <Button 
              variant="outline" 
              className={cn(
                "rounded-none border-secondary px-8 uppercase tracking-widest text-xs font-semibold transition-all hover:bg-secondary hover:text-primary",
                scrolled ? "text-secondary border-secondary" : "text-white border-white bg-transparent hover:bg-white hover:text-primary"
              )}
            >
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu className={cn("h-8 w-8", scrolled ? "text-primary-foreground" : "text-white")} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <Leaf className="h-12 w-12 text-secondary mb-4" />
            
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a 
                  className="font-serif text-3xl text-white hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/booking">
              <Button 
                className="mt-8 bg-secondary text-primary hover:bg-accent hover:text-white px-10 py-6 text-lg rounded-none"
                onClick={() => setIsOpen(false)}
              >
                Book Your Stay
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
