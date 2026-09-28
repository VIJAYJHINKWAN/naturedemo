import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/serene_misty_lake_at_sunrise_with_pine_forest_reflection.png";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax-like effect (simplified for performance) */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="h-full w-full"
        >
          <img 
            src={heroBg} 
            alt="Serene misty lake" 
            className="h-full w-full object-cover"
          />
        </motion.div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 text-secondary"
        >
          Welcome to Serenterra
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
        >
          Disconnect to <br/><span className="italic font-medium text-secondary-foreground/10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Reconnect</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-xl text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed"
        >
          A luxury sanctuary for the soul, nestled deep within the ancient forest. 
          Experience the profound silence of nature.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Link href="/rooms">
            <Button className="bg-secondary text-primary hover:bg-white px-8 py-6 rounded-none uppercase tracking-widest text-xs font-bold">
              Explore Our Stays
            </Button>
          </Link>
          <Link href="/experiences">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-8 py-6 rounded-none uppercase tracking-widest text-xs font-bold">
              Discover Experiences
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
}
