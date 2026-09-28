import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import foodImg from "@assets/generated_images/gourmet_organic_farm-to-table_meal.png";
import chefImg from "@assets/generated_images/chef_plating_organic_meal_in_nature_setting.png";
import gardenImg from "@assets/generated_images/organic_forest_garden_with_sunlight.png";
import { Heart, Leaf, Users, Star } from "lucide-react";

export default function Dining() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={foodImg} alt="Dining Hero" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-xs font-bold tracking-[0.4em] uppercase text-secondary mb-4 block"
          >
            The Culinary Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light"
          >
            Farm to <span className="italic">Forest</span>
          </motion.h1>
        </div>
      </section>

      <main className="container mx-auto px-6 py-24 space-y-32">
        
        {/* Our Philosophy */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
            <div className="flex items-center gap-3 text-accent font-bold tracking-widest uppercase text-xs">
              <Leaf className="h-4 w-4" /> The Soul of Serenterra
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
              Rooted in Nature,<br/>Plated with Love.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Serenterra, we don't believe in static menus. Our culinary team listens to the forest daily. 
              We use 100% organic ingredients sourced from our own regenerative gardens and local mountain foragers. 
              No chemicals, no shortcuts—just the pure essence of the wild.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <Star className="text-accent h-5 w-5 fill-accent" />
                <h4 className="font-serif text-xl text-primary">100% Organic</h4>
                <p className="text-sm text-muted-foreground font-light">Zero pesticides, zero GMOs. Pure earth-to-plate.</p>
              </div>
              <div className="space-y-2">
                <Heart className="text-accent h-5 w-5 fill-accent" />
                <h4 className="font-serif text-xl text-primary">Healing Foods</h4>
                <p className="text-sm text-muted-foreground font-light">Every ingredient is chosen for its vital energy and nutrients.</p>
              </div>
            </div>
          </motion.div>
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img src={gardenImg} alt="Forest Garden" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 border-[20px] border-background/20 m-6" />
          </div>
        </div>

        {/* The Team Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] overflow-hidden group">
            <img src={chefImg} alt="Our Chef" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-8 shadow-2xl max-w-xs">
                <p className="font-serif text-2xl text-primary mb-2">Chef Julian Voss</p>
                <p className="text-xs uppercase tracking-widest text-accent font-bold">Executive Culinary Artist</p>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-3 text-accent font-bold tracking-widest uppercase text-xs">
              <Users className="h-4 w-4" /> Our Artisans
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Meet the Alchemists.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our staff are more than servers—they are caretakers of your experience. 
              Led by Chef Julian Voss, a pioneer in forest-based gastronomy, our team spends 
              mornings harvesting and evenings creating magic. 
            </p>
            <blockquote className="border-l-4 border-accent pl-8 italic text-primary/80 text-xl py-4 font-serif">
              "We don't just cook; we translate the language of the forest into a meal that talks to your soul."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Julian has spent 15 years perfecting the art of "Slow Dining," ensuring that every guest 
              feels the deep connection between the soil and the plate.
            </p>
          </motion.div>
        </div>

        {/* Closing CTA */}
        <section className="text-center py-20 bg-secondary/20 border-y border-border px-6">
            <Leaf className="w-10 h-10 text-primary mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl text-primary mb-8 max-w-4xl mx-auto leading-tight">
               Experience the profound <span className="italic">silence</span> of a shared meal.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg">
              Dining at Serenterra is inclusive for all guests. No reservations needed, 
              just your presence and an open heart.
            </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
