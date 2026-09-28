import { Leaf, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-secondary">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-2xl font-bold">Serenterra</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              A sanctuary for the soul, nestled in the heart of the ancient forest. Disconnect from the noise and reconnect with yourself.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/"><a className="hover:text-secondary transition-colors">Home</a></Link></li>
              <li><Link href="/rooms"><a className="hover:text-secondary transition-colors">Our Stays</a></Link></li>
              <li><Link href="/experiences"><a className="hover:text-secondary transition-colors">Experiences</a></Link></li>
              <li><Link href="/dining"><a className="hover:text-secondary transition-colors">Dining</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-secondary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary" />
                <span>1242 Whispering Pines Rd,<br />Blue Ridge Mountains, NC 28801</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+1 (555) 987-6543</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span>hello@serenterra.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-secondary mb-6">Newsletter</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">Subscribe for seasonal updates and exclusive retreats.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary text-primary font-medium text-xs uppercase tracking-widest py-3 hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>&copy; 2025 Serenterra Retreats. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
