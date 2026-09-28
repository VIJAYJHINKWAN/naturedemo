import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import spaImg from "@assets/generated_images/outdoor_wooden_spa_deck_in_nature.png";
import foodImg from "@assets/generated_images/gourmet_organic_farm-to-table_meal.png";
import { Heart, Sunset, Mountain } from "lucide-react";

export default function Experiences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-primary text-white text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Curated Experiences</h1>
        <p className="text-white/70 max-w-xl mx-auto font-light">
          Reconnect with nature and yourself through our thoughtfully designed activities.
        </p>
      </div>

      <main className="container mx-auto px-6 py-16 space-y-32">
        {/* Wellness */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] relative">
                <img src={spaImg} alt="Spa" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-bold">
                    <Heart className="h-4 w-4" /> Wellness
                </div>
                <h2 className="font-serif text-4xl text-primary">Forest Spa & Yoga</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Our open-air spa facilities allow you to relax while surrounded by the sights and sounds of the forest. 
                    Enjoy daily yoga sessions on our raised cedar deck, followed by a soak in our wood-fired hot tubs.
                </p>
                <ul className="space-y-2 text-primary/80">
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Morning Vinyasa Flow</li>
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Sound Healing Sessions</li>
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Deep Tissue Massage</li>
                </ul>
            </div>
        </div>

         {/* Dining */}
         <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] relative">
                <img src={foodImg} alt="Dining" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-bold">
                    <Sunset className="h-4 w-4" /> Dining
                </div>
                <h2 className="font-serif text-4xl text-primary">Organic Culinary Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                    We believe food is medicine. Our chefs work closely with local farmers to create menus that are 
                    nutritious, sustainable, and incredibly delicious. Experience communal dining under the stars.
                </p>
                 <ul className="space-y-2 text-primary/80">
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Farm-to-Table Dinners</li>
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Foraging Workshops</li>
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Organic Wine Tasting</li>
                </ul>
            </div>
        </div>
        
         {/* Adventure */}
         <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="w-full md:w-1/2 bg-muted h-[400px] flex items-center justify-center text-muted-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10"></div>
                <span className="relative z-10 font-serif italic text-2xl">Image Coming Soon</span>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-bold">
                    <Mountain className="h-4 w-4" /> Adventure
                </div>
                <h2 className="font-serif text-4xl text-primary">Wilderness Exploration</h2>
                <p className="text-muted-foreground leading-relaxed">
                   Step off the beaten path. Our private reserve offers miles of hiking trails, hidden waterfalls, and 
                   opportunities to observe local wildlife in their natural habitat.
                </p>
                 <ul className="space-y-2 text-primary/80">
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Guided Nature Hikes</li>
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Kayaking on Mirror Lake</li>
                    <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full"/> Night Sky Stargazing</li>
                </ul>
            </div>
        </div>

      </main>
      
      <div className="bg-primary py-20 text-center px-6">
          <h2 className="font-serif text-3xl text-white mb-8">Ready to experience it all?</h2>
           <Link href="/booking">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-none px-10 py-6 uppercase tracking-widest text-xs font-bold">
                Book Your Stay
            </Button>
           </Link>
      </div>

      <Footer />
    </div>
  );
}
