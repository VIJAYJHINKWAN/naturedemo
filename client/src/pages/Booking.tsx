import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, CreditCard, ChevronRight, User, Mail, Calendar as CalIcon, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

// Schema for booking form
const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal("")),
  roomType: z.string({ required_error: "Please select a room." }),
  dates: z.object({
    from: z.date({ required_error: "Please select check-in date" }),
    to: z.date({ required_error: "Please select check-out date" }).optional(),
  }, { required_error: "Please select dates" }),
  guests: z.string().min(1, { message: "Please select number of guests" }),
});

type Step = "availability" | "details" | "payment" | "confirmed";

export default function Booking() {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>("availability");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      guests: "2",
    },
  });

  const onSubmit = (values: any) => {
    console.log("Form values:", values);
    if (step === "availability") {
      setStep("details");
    } else if (step === "details") {
      // Validate details before moving to payment
      if (values.name && values.email) {
        setStep("payment");
      } else {
        toast({
          title: "Missing Information",
          description: "Please provide your name and email to continue.",
          variant: "destructive",
        });
      }
    }
  };

  const handlePayment = () => {
    toast({
      title: "Processing Payment",
      description: "Connecting to Razorpay secure gateway...",
    });
    setTimeout(() => {
      setStep("confirmed");
      toast({
        title: "Booking Confirmed",
        description: "Your retreat has been successfully reserved.",
      });
    }, 2000);
  };

  const selectedRoom = form.watch("roomType");
  const roomPrice = selectedRoom === "canopy" ? 450 : selectedRoom === "lakeside" ? 620 : 550;
  const nights = 3; // Mock value
  const total = roomPrice * nights;

  if (step === "confirmed") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mb-8"
          >
            <Check className="w-10 h-10" />
          </motion.div>
          <h1 className="font-serif text-5xl text-primary mb-4">Reservation Confirmed</h1>
          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Your journey to Serenterra begins. We've sent a detailed itinerary and confirmation to your email.
          </p>
          <div className="bg-card border border-border p-6 rounded-none mb-8 text-left w-full max-w-sm">
             <p className="text-xs uppercase tracking-widest text-accent font-bold mb-4">Booking Details</p>
             <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Guest:</span> <span className="font-bold">{form.getValues("name")}</span></div>
                <div className="flex justify-between"><span>Dates:</span> <span className="font-bold">Oct 12 - 15, 2024</span></div>
                <div className="flex justify-between"><span>Total Paid:</span> <span className="font-bold text-primary">${total}</span></div>
             </div>
          </div>
          <Link href="/">
            <Button className="rounded-none px-12 py-7 bg-primary text-white hover:bg-primary/90 uppercase tracking-widest text-xs font-bold transition-all hover:px-14">
              Return to Sanctuary
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-primary text-white px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <h1 className="font-serif text-4xl md:text-6xl mb-4">Reserve Your Stay</h1>
            <p className="text-white/70 font-light text-lg">Your escape to nature is just a few steps away.</p>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase mb-2">
            <span className={cn(step === "availability" ? "text-secondary" : "text-white/40")}>01 Availability</span>
            <ChevronRight className="h-3 w-3 text-white/20" />
            <span className={cn(step === "details" ? "text-secondary" : "text-white/40")}>02 Guest Details</span>
            <ChevronRight className="h-3 w-3 text-white/20" />
            <span className={cn(step === "payment" ? "text-secondary" : "text-white/40")}>03 Payment</span>
          </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Booking Form Side */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {step === "availability" && (
                <motion.div
                  key="avail"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <h2 className="font-serif text-3xl text-primary">Check Availability</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="roomType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Select Sanctuary</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-none h-14 bg-white border-border">
                                    <SelectValue placeholder="Select a room" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="canopy">Forest Canopy Suite ($450)</SelectItem>
                                  <SelectItem value="lakeside">Lakeside Eco-Lodge ($620)</SelectItem>
                                  <SelectItem value="alpine">The Alpine Retreat ($550)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="guests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Number of Guests</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-none h-14 bg-white border-border">
                                    <SelectValue placeholder="Guests" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1 Guest</SelectItem>
                                  <SelectItem value="2">2 Guests</SelectItem>
                                  <SelectItem value="3">3 Guests</SelectItem>
                                  <SelectItem value="4">4 Guests</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="dates"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Check-in / Check-out</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button variant="outline" className="w-full h-14 rounded-none text-left font-normal border-border">
                                    {field.value?.from ? (
                                      field.value.to ? `${format(field.value.from, "LLL dd")} - ${format(field.value.to, "LLL dd, y")}` : format(field.value.from, "LLL dd, y")
                                    ) : <span>Pick dates</span>}
                                    <CalIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar mode="range" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date()} initialFocus />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-primary text-white h-16 uppercase tracking-widest font-bold rounded-none hover:bg-primary/90">
                        Check Availability
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}

              {step === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <h2 className="font-serif text-3xl text-primary">Guest Details</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Full Name</FormLabel>
                              <FormControl><Input placeholder="John Doe" className="rounded-none h-14 bg-white" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Email</FormLabel>
                              <FormControl><Input placeholder="john@example.com" className="rounded-none h-14 bg-white" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep("availability")} className="flex-1 rounded-none h-14 border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest text-xs font-bold">Back</Button>
                        <Button type="submit" className="flex-[2] bg-primary text-white h-14 uppercase tracking-widest font-bold rounded-none hover:bg-primary/90">Continue to Payment</Button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              )}

              {step === "payment" && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <h2 className="font-serif text-3xl text-primary">Secure Payment</h2>
                  <div className="bg-white border border-border p-8 space-y-6">
                    <div className="flex items-center justify-between pb-6 border-b border-border">
                      <div className="flex items-center gap-4">
                        <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="w-8 h-8" />
                        <span className="font-bold text-primary">Razorpay Secure Checkout</span>
                      </div>
                      <ShieldCheck className="text-green-600 h-6 w-6" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-primary bg-primary/5 cursor-pointer">
                        <div className="flex items-center gap-4">
                          <CreditCard className="text-primary" />
                          <div>
                            <p className="text-sm font-bold text-primary">Card / UPI / NetBanking</p>
                            <p className="text-xs text-muted-foreground">Pay with trusted Razorpay methods</p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-4 border-primary" />
                      </div>
                    </div>

                    <div className="pt-6">
                       <Button onClick={handlePayment} className="w-full bg-primary text-white h-16 uppercase tracking-widest font-bold rounded-none hover:bg-primary/90 flex items-center justify-center gap-3">
                         <CreditCard className="h-5 w-5" /> Pay Now ${total}
                       </Button>
                    </div>
                    <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest">Secured by Razorpay. 256-bit SSL encryption.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border sticky top-32">
              <div className="p-8 border-b border-border">
                <h3 className="font-serif text-2xl text-primary mb-2">Booking Summary</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Review your stay</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Sanctuary</p>
                    <p className="font-serif text-lg text-primary">{selectedRoom === "canopy" ? "Forest Canopy Suite" : selectedRoom === "lakeside" ? "Lakeside Eco-Lodge" : "The Alpine Retreat"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Price</p>
                    <p className="font-serif text-lg text-primary">${roomPrice}/night</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Check-in</p>
                    <p className="text-sm font-medium">Oct 12, 2024</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Guests</p>
                    <p className="text-sm font-medium">{form.watch("guests")} Persons</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">3 Nights x ${roomPrice}</span>
                    <span className="font-bold text-primary">${total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sustainability Fee</span>
                    <span className="font-bold text-primary">$0</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif pt-4 border-t border-border text-primary">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-secondary/10 flex items-start gap-4">
                <Leaf className="h-5 w-5 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  "By booking at Serenterra, you support our forest conservation efforts. 10% of every stay goes directly to local reforestation projects."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Leaf(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.36 12 14 15 12"/><path d="M11 20c2.5 0 5-1 5-4.5s-2-4.5-5-4.5s-5 1-5 4.5s2.5 4.5 5 4.5Z"/></svg>
  );
}
