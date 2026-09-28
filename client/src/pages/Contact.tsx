import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-primary text-white text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Get in Touch</h1>
        <p className="text-white/70 max-w-lg mx-auto font-light">
          We are here to answer any questions you may have about your upcoming stay.
        </p>
      </div>

      <div className="flex-1 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-primary mb-6">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need help planning your itinerary or have special requests for your cabin, our concierge team is at your service.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-primary mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    1242 Whispering Pines Rd<br />
                    Blue Ridge Mountains, NC 28801
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-primary mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@serenterra.com</p>
                  <p className="text-muted-foreground">bookings@serenterra.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-primary mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-primary mb-1">Reception Hours</h4>
                  <p className="text-muted-foreground">Daily: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-border h-fit">
            <h3 className="font-serif text-2xl text-primary mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground">First Name</label>
                  <input type="text" className="w-full border border-input px-4 py-3 bg-background focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground">Last Name</label>
                  <input type="text" className="w-full border border-input px-4 py-3 bg-background focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground">Email</label>
                <input type="email" className="w-full border border-input px-4 py-3 bg-background focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full border border-input px-4 py-3 bg-background focus:outline-none focus:border-primary"></textarea>
              </div>
              <button className="w-full bg-primary text-white uppercase tracking-widest text-xs font-bold py-4 hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
