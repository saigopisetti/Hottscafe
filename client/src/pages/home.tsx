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
      <section className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src={funkyHero} 
            alt="Hotts Cafe Funky Interior" 
            className="w-full h-full object-cover scale-110 opacity-40 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          {/* Animated blobs for vibe */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary animate-bounce">
              <Sparkles className="w-3 h-3 mr-2" /> NEW VIBE, SAME FLAVOR
            </Badge>
            <h1 className="font-heading text-7xl md:text-9xl font-black leading-none mb-6 text-foreground tracking-tighter">
              COFFEE <br />
              <span className="text-secondary italic lime-glow">WITH SOUL.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-xl font-medium leading-relaxed">
              We're turning up the volume on your morning. Hotts Café is where bold flavors meet vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 text-lg shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all active:scale-95 cursor-pointer border-none font-black">
                  EXPLORE MENU
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary rounded-full px-10 h-16 text-lg backdrop-blur-md transition-all active:scale-95 cursor-pointer font-black">
                  FIND US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funky Intro Section */}
      <section className="py-32 bg-card overflow-hidden">
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
                   className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px] border-8 border-secondary/20"
                 />
               </motion.div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full -z-10 animate-bounce blur-2xl opacity-50"></div>
               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/20 rounded-full -z-10 blur-[80px]"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-5xl md:text-7xl font-black mt-4 mb-8 text-foreground leading-tight">
                Not Just A Café. <br />
                <span className="text-primary underline decoration-secondary decoration-8 underline-offset-8">A Movement.</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                At Hotts Café, we believe a café is more than just a place to grab a cup of coffee. It is a space where community comes together. Whether you prefer something light and wholesome or a hearty meal to fuel your day, we have options to suit every appetite.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-secondary transition-colors group">
                  <Coffee className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-2xl mb-2 text-foreground">Vibe Check</h4>
                  <p className="text-sm text-foreground/50">The best beats and the boldest beans in Hoppers Crossing.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-primary transition-colors group">
                  <ChefHat className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-2xl mb-2 text-foreground">Soul Food</h4>
                  <p className="text-sm text-foreground/50">Gourmet flavors that make your tastebuds dance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Menu Highlights */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-heading text-7xl md:text-9xl font-black text-foreground mb-4">
              POPULAR <span className="text-stroke">PICKS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { img: breakfastImage, title: "Big Breaky", price: "$22.90", color: "bg-primary" },
              { img: burgerImage, title: "The Lot", price: "$15.50", color: "bg-secondary" },
              { img: coffeeImage, title: "Electric Latte", price: "$4.80", color: "bg-accent" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -20, scale: 1.05 }}
                className="bg-card rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group border border-white/5"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 right-6 ${item.color} text-white font-black px-5 py-2 rounded-full shadow-lg text-lg`}>
                    {item.price}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-heading text-4xl font-black mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-foreground/50 mb-8 line-clamp-2 text-lg">Fresh ingredients, bold flavors, and that classic Hotts twist.</p>
                  <Link href="/menu">
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-secondary font-black flex items-center gap-3 group/btn cursor-pointer text-lg tracking-widest">
                      FULL MENU <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform" />
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
          <div className="bg-primary rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)]">
             <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
             <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary rounded-full blur-[100px] opacity-40"></div>
             
             <div className="relative z-10">
               <h2 className="font-heading text-6xl md:text-9xl font-black mb-12 leading-none tracking-tighter">
                 STAY <br />
                 <span className="text-secondary italic">LIT.</span>
               </h2>
               <p className="text-2xl md:text-3xl mb-16 max-w-2xl mx-auto font-medium text-white/90">
                 Connect, recharge, and enjoy the experience. We look forward to welcoming you soon.
               </p>
               <div className="flex flex-wrap justify-center gap-8">
                 <div className="flex items-center gap-5 bg-white/10 px-10 py-5 rounded-full backdrop-blur-xl border border-white/10">
                   <Clock className="w-10 h-10 text-secondary" />
                   <div className="text-left">
                     <p className="font-black text-xl">EARLY BIRDS</p>
                     <p className="text-lg opacity-80">5:00 AM - 2:30 PM</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-5 bg-white/10 px-10 py-5 rounded-full backdrop-blur-xl border border-white/10">
                   <Phone className="w-10 h-10 text-accent" />
                   <div className="text-left">
                     <p className="font-black text-xl">HOTLINE</p>
                     <p className="text-lg opacity-80">9369 6504</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Badge({ children, className }: any) {
  return (
    <span className={cn("inline-flex items-center px-5 py-2 rounded-full text-sm font-black tracking-widest uppercase border", className)}>
      {children}
    </span>
  );
}
