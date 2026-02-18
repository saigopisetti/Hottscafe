import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import funkyHero from "@/assets/funky-cafe.png";
import breakfastImage from "@/assets/breakfast-plate.png";
import coffeeImage from "@/assets/coffee-art.png";
import burgerImage from "@/assets/burger-combo.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Clock, ChefHat, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={funkyHero} 
            alt="Hotts Cafe Funky Interior" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
          {/* Animated blobs for vibe */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-accent/20 text-accent-primary border-accent animate-bounce">
              <Sparkles className="w-3 h-3 mr-2" /> NEW VIBE, SAME FLAVOR
            </Badge>
            <h1 className="font-heading text-6xl md:text-8xl font-black leading-none mb-6 text-white tracking-tighter uppercase">
              COFFEE <br />
              <span className="text-white italic">with soul.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-xl font-medium leading-relaxed">
              We're turning up the volume on your morning. Hotts Café is where bold flavors meet vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 text-lg shadow-lg hover:shadow-primary/40 transition-all active:scale-95 cursor-pointer">
                  See the Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/50 rounded-full px-10 h-16 text-lg backdrop-blur-md transition-all active:scale-95 cursor-pointer">
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
                   src={coffeeImage} 
                   alt="Funky Coffee" 
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
              <h2 className="font-heading text-5xl md:text-7xl font-black mt-4 mb-8 text-[#201839] leading-tight">
                Not Just A Café. <br />
                <span className="text-secondary underline decoration-primary decoration-8 underline-offset-8">A Movement.</span>
              </h2>
              <p className="text-black/50 text-lg leading-relaxed mb-8">
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
          <div className="text-center mb-20">
            <h2 className="font-heading text-6xl md:text-7xl font-black text-primary mb-4">
              POPULAR <span className="text-stroke text-primary">PICKS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { img: breakfastImage, title: "Big Breaky", price: "$22.90", color: "bg-accent" },
              { img: burgerImage, title: "The Lot", price: "$15.50", color: "bg-primary" },
              { img: coffeeImage, title: "Neon Latte", price: "$4.80", color: "bg-secondary" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl group border border-foreground/5"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 right-6 ${item.color} text-white font-black px-4 py-2 rounded-full shadow-lg`}>
                    {item.price}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-heading text-3xl font-black mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-primary/60 mb-8 line-clamp-2">Fresh ingredients, bold flavors, and that classic Hotts twist.</p>
                  <Link href="/menu">
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-black flex items-center gap-2 group/btn cursor-pointer">
                      FULL MENU <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
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
