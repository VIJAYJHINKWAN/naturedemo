import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Wifi, Coffee, Wind, Users, ArrowRight } from "lucide-react";

// Images
import cabinImg from "@assets/generated_images/luxury_wooden_eco-cabin_exterior_in_forest.png";
import interiorImg from "@assets/generated_images/cozy_rustic_luxury_bedroom_interior.png";
import spaImg from "@assets/generated_images/outdoor_wooden_spa_deck_in_nature.png";

const rooms = [
  {
    id: 1,
    name: "Forest Canopy Suite",
    description: "Perched high among the pines, this suite offers panoramic views of the forest canopy. Features a private deck, outdoor shower, and floor-to-ceiling windows.",
    price: "$450",
    guests: "2 Guests",
    size: "650 sq ft",
    image: cabinImg,
    amenities: ["King Bed", "Forest View", "Private Deck", "Fireplace"]
  },
  {
    id: 2,
    name: "Lakeside Eco-Lodge",
    description: "Situated right on the water's edge, listen to the gentle lapping of the lake against the shore. Includes a private dock and canoe usage.",
    price: "$620",
    guests: "4 Guests",
    size: "950 sq ft",
    image: interiorImg,
    amenities: ["2 Queen Beds", "Lake Access", "Full Kitchen", "Soaking Tub"]
  },
  {
    id: 3,
    name: "The Alpine Retreat",
    description: "Our most secluded cabin, tucked away in a quiet glade. Perfect for honeymooners or writers seeking absolute solitude.",
    price: "$550",
    guests: "2 Guests",
    size: "700 sq ft",
    image: spaImg,
    amenities: ["King Bed", "Secluded", "Hot Tub", "Writer's Desk"]
  }
];

export default function Rooms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-primary text-white text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Our Stays</h1>
        <p className="text-white/70 max-w-xl mx-auto font-light">
          Thoughtfully designed spaces that blend seamlessly with nature, 
          offering comfort without compromise.
        </p>
      </div>

      <main className="container mx-auto px-6 py-16 space-y-24">
        {rooms.map((room, index) => (
          <motion.div 
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative group">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex justify-between items-baseline border-b border-border pb-4">
                <h2 className="font-serif text-3xl md:text-4xl text-primary">{room.name}</h2>
                <span className="font-sans font-medium text-lg">{room.price} <span className="text-sm text-muted-foreground font-normal">/ night</span></span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {room.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2 text-sm text-primary/80">
                  <Users className="h-4 w-4" /> {room.guests}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary/80">
                  <Wind className="h-4 w-4" /> {room.size}
                </div>
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {amenity}
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link href={`/booking?room=${room.id}`}>
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-6 uppercase tracking-widest text-xs">
                    Book This Room
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      <div className="bg-secondary/30 py-20 text-center px-6">
        <h3 className="font-serif text-3xl text-primary mb-6">Not sure which to choose?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Contact our concierge team to help you find the perfect sanctuary for your needs.
        </p>
        <Link href="/contact">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 uppercase tracking-widest text-xs">
            Contact Us
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
