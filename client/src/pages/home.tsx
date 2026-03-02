import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import australianCafeHero from "@/assets/australian-cafe-hero-v2.png";
import burgerLot from "@/assets/burger-lot.jpg";
import chickenParma from "@/assets/chicken-parma.jpg";
import steakSandwich from "@/assets/steak-sandwich-new.jpg";
import cappuccino from "@/assets/cappuccino-new-v2.png";
import eggBaconRoll from "@/assets/egg-bacon-roll-new.png";
import jamDonut from "@/assets/jam-donut.jpg";
import chickenSchnitzel from "@/assets/chicken-schnitzel.jpg";
import baconEggSandwich from "@/assets/bacon-egg-sandwich.jpg";
import hotDog from "@/assets/hot-dog.jpg";
import hotChips from "@/assets/hot-chips.jpg";
import icedCoffee from "@/assets/iced-coffee-new-v2.png";
import muffin from "@/assets/muffin.jpg";
import cateringSnippet from "@/assets/catering-snippet.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Clock, ChefHat, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={australianCafeHero} 
            alt="Hotts Cafe Modern Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary text-white border-none px-6 drop-shadow-xl scale-110">
              <Sparkles className="w-3 h-3 mr-2" /> NEW VIBE, SAME FLAVOR
            </Badge>
            <h1 className="font-heading text-6xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              COFFEE <br />
              <span className="text-primary italic">with soul.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto font-bold leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              We're turning up the volume on your morning. Hotts Café is where bold flavors meet vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl shadow-2xl hover:scale-105 transition-all cursor-pointer">
                  See the Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 rounded-full px-12 h-16 text-xl backdrop-blur-md hover:scale-105 transition-all cursor-pointer">
                  Visit Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funky Intro Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <motion.div 
                 initial={{ rotate: -5 }}
                 whileHover={{ rotate: 0 }}
                 className="relative z-10"
               >
                 <img 
                   src={cappuccino} 
                   alt="Hotts Cafe Coffee" 
                   className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px] border-8 border-accent/20"
                 />
               </motion.div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full -z-10 animate-bounce"></div>
               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full -z-10 blur-2xl"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-black mt-4 mb-6 text-[#201839] leading-tight">
                Not Just A Café. <br />
                <span className="text-secondary border-b-4 border-primary pb-1">A Movement.</span>
              </h2>
              <p className="text-black/60 text-base md:text-lg leading-relaxed mb-8">
                At Hotts Café, we believe a café is more than just a place to grab a cup of coffee. It is a space where community comes together. Whether you prefer something light and wholesome or a hearty meal to fuel your day, we have options to suit every appetite.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-primary/5 rounded-3xl border border-accent/10 hover:border-accent/30 transition-colors">
                  <Coffee className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-black text-xl mb-2">Vibe Check</h4>
                  <p className="text-sm text-black/60">The best beats and the boldest beans in Hoppers Crossing.</p>
                </div>
                <div className="p-6 bg-primary/4 rounded-3xl border border-primary/10 hover:border-primary/30 transition-colors">
                  <ChefHat className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-black text-xl mb-2">Soul Food</h4>
                  <p className="text-sm text-black/60">Gourmet flavors that make your tastebuds dance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Menu Highlights */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-black text-primary mb-4">
              POPULAR <span className="text-primary opacity-50 italic">PICKS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { img: burgerLot, title: "The Lot", price: "$15.50", color: "bg-primary" },
              { img: chickenParma, title: "Chicken Parma", price: "$18.50", color: "bg-secondary" },
              { img: steakSandwich, title: "Steak Sandwich", price: "$16.50", color: "bg-accent" },
              { img: cappuccino, title: "Cappuccino", price: "$4.80", color: "bg-primary" },
              { img: eggBaconRoll, title: "Egg & Bacon Roll", price: "$9.50", color: "bg-secondary" },
              { img: jamDonut, title: "Jam Donut", price: "$3.50", color: "bg-accent" },
              { img: chickenSchnitzel, title: "Chicken Schnitzel", price: "$15.00", color: "bg-primary" },
              { img: baconEggSandwich, title: "Bacon & Egg Sandwich", price: "$8.50", color: "bg-secondary" },
              { img: hotDog, title: "Hot Dog", price: "$6.50", color: "bg-accent" },
              { img: hotChips, title: "Hot Chips", price: "$5.00", color: "bg-primary" },
              { img: icedCoffee, title: "Iced Coffee", price: "$7.50", color: "bg-secondary" },
              { img: muffin, title: "Fresh Muffin", price: "$5.50", color: "bg-accent" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-foreground/5 flex flex-col"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-3 right-3 ${item.color} text-white text-[10px] md:text-xs font-black px-2 py-1 rounded-full shadow-lg`}>
                    {item.price}
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-black mb-1 group-hover:text-primary transition-colors leading-tight line-clamp-1">{item.title}</h3>
                  </div>
                  <Link href="/menu">
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary text-xs font-black flex items-center gap-1 group/btn cursor-pointer mt-2">
                      MENU <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Snippet */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-neutral-100 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-64 md:h-[400px]">
              <img 
                src={cateringSnippet} 
                alt="Hotts Cafe Catering" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                EVENT CATERING
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-[#201839] mb-6 leading-tight">
                Feeding the <br />
                <span className="text-primary italic">whole squad?</span>
              </h2>
              <p className="text-black/60 text-lg mb-8 max-w-md">
                From office lunches to private functions, we bring the Hotts Café flavor to your event. Fresh platters, hot favorites, and more.
              </p>
              <Link href="/catering">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg transition-all active:scale-95 cursor-pointer">
                  Explore Catering
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vibrant CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
             <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-3xl opacity-50"></div>
             
             <div className="relative z-10">
               <h2 className="font-heading text-5xl md:text-7xl text-secondary font-black mb-8 leading-none">
                 <span className="opacity-60">BE THERE.</span> <br />
                 <span className="">AT HOTTS CAFÉ.</span>
               </h2>
               <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium text-white/90">
                 Connect, recharge, and enjoy the experience. We look forward to welcoming you soon.
               </p>
            <div className="flex flex-wrap justify-center gap-10">
                 <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full backdrop-blur-md">
                   <Clock className="w-8 h-8 text-secondary" />
                   <div className="text-left">
                     <p className="font-black">EARLY BIRDS</p>
                     <p className="text-sm opacity-80">5:00 AM - 2:30 PM</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 bg-white/20 px-8 py-4 rounded-full backdrop-blur-md">
                   <Phone className="w-8 h-8 text-primary" />
                   <div className="text-left">
                     <p className="font-black">HOTLINE</p>
                     <p className="text-sm opacity-80">9369 6504</p>
                   </div>
                 </div>
              
               </div>
               <h2 className="font-heading text-4xl md:text-6xl text-secondary font-black m-8 leading-none">
                  <span>Delivery at <span className="text-5xl">$3</span></span> <br />
                </h2>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Badge({ children, className }: any) {
  return (
    <span className={cn("inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border", className)}>
      {children}
    </span>
  );
}
