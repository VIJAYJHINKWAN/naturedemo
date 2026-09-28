import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Leaf, Wind, Sun } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Import images
import heroBg from "@assets/generated_images/serene_misty_lake_at_sunrise_with_pine_forest_reflection.png";
import cabinImg from "@assets/generated_images/luxury_wooden_eco-cabin_exterior_in_forest.png";
import interiorImg from "@assets/generated_images/cozy_rustic_luxury_bedroom_interior.png";
import foodImg from "@assets/generated_images/gourmet_organic_farm-to-table_meal.png";
import spaImg from "@assets/generated_images/outdoor_wooden_spa_deck_in_nature.png";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro / Philosophy Section */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 -z-10" />
              <img 
                src={interiorImg} 
                alt="Cozy interior" 
                className="w-full h-[500px] object-cover grayscale-[20%] contrast-[0.95]" 
              />
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-3 text-accent font-medium tracking-widest uppercase text-xs">
                <span className="w-8 h-[1px] bg-accent"></span>
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                Where silence is the <br/>ultimate luxury.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Serenterra, we believe that true rejuvenation comes from slowing down. 
                Our retreats are designed to help you detach from the digital world and 
                synchronize with the rhythm of nature. Every cabin, every meal, and every 
                activity is curated to nurture your well-being.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Leaf className="text-primary h-6 w-6" />
                  <h4 className="font-serif text-lg text-primary">Eco-Conscious</h4>
                  <p className="text-sm text-muted-foreground">Sustainable architecture that blends with the forest.</p>
                </div>
                <div className="space-y-2">
                  <Wind className="text-primary h-6 w-6" />
                  <h4 className="font-serif text-lg text-primary">Digital Detox</h4>
                  <p className="text-sm text-muted-foreground">A space to unplug and be fully present.</p>
                </div>
              </div>
              <div className="pt-6">
                 <Link href="/experiences">
                  <Button variant="link" className="p-0 text-primary hover:text-accent transition-colors group">
                    Read our story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                 </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Stays */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">Accommodations</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Sanctuaries in the Wild</h2>
              <p className="text-muted-foreground">
                Private cabins designed to dissolve the barrier between you and the wilderness, 
                offering uncompromised luxury and comfort.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Forest Canopy Suite", image: cabinImg, price: "$450" },
                { title: "Lakeside Eco-Lodge", image: interiorImg, price: "$620" },
                { title: "The Alpine Retreat", image: spaImg, price: "$550" },
              ].map((room, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20 text-white">
                      <p className="text-xs uppercase tracking-widest mb-1">Starting from {room.price}</p>
                      <h3 className="font-serif text-2xl">{room.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/rooms">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs font-bold">
                  View All Stays
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Experiences Split Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">
          <div className="relative h-[400px] md:h-full">
            <img 
              src={spaImg} 
              alt="Wellness Spa" 
              className="absolute inset-0 w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
          <div className="flex flex-col justify-center items-start p-12 md:p-24 bg-secondary/30">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Wellness</span>
            <h2 className="text-4xl font-serif text-primary mb-6">Forest Bathing & Spa</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Immerse yourself in our outdoor cedar tubs, guided meditation sessions, and 
              yoga practices amidst the towering pines. Let nature heal you from the outside in.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-primary text-sm">
                <Star className="h-4 w-4 fill-accent text-accent" /> Cedar Hot Tubs
              </li>
              <li className="flex items-center gap-3 text-primary text-sm">
                <Star className="h-4 w-4 fill-accent text-accent" /> Guided Forest Meditation
              </li>
              <li className="flex items-center gap-3 text-primary text-sm">
                <Star className="h-4 w-4 fill-accent text-accent" /> Sunrise Yoga
              </li>
            </ul>
            <Link href="/experiences">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 uppercase tracking-widest text-xs">
                Explore Wellness
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">
           <div className="flex flex-col justify-center items-start p-12 md:p-24 bg-background order-2 md:order-1">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Dining</span>
            <h2 className="text-4xl font-serif text-primary mb-6">Farm-to-Forest Dining</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Our culinary philosophy is simple: fresh, organic, and locally sourced. 
              Taste the season with our carefully curated menus that celebrate the bounty of the region.
            </p>
            <Link href="/dining">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 uppercase tracking-widest text-xs">
                View Menu
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] md:h-full order-1 md:order-2">
            <img 
              src={foodImg} 
              alt="Organic Food" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 container mx-auto px-6 text-center">
          <Leaf className="w-8 h-8 text-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif text-primary italic mb-12 max-w-3xl mx-auto leading-normal">
            "I have never felt more at peace. Serenterra isn't just a place to stay; it's a place to return to yourself."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Reviewer" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-serif text-lg text-primary">Eleanor Vance</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Stayed October 2024</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0">
             <img src={heroBg} alt="Background" className="w-full h-full object-cover blur-sm opacity-50" />
             <div className="absolute inset-0 bg-primary/80" />
           </div>
           <div className="relative z-10 container mx-auto px-6 text-center text-white">
             <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready to unplug?</h2>
             <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg font-light">
               Your cabin in the woods is waiting. Limited availability for the upcoming season.
             </p>
             <Link href="/booking">
               <Button className="bg-secondary text-primary hover:bg-white px-10 py-8 text-lg rounded-none uppercase tracking-widest font-bold transition-all hover:scale-105">
                 Book Your Retreat
               </Button>
             </Link>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
