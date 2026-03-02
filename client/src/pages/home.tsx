import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import australianCafeHero from "@/assets/australian-cafe-hero-morning.png";
import introSectionImg from "@/assets/cappuccino-new.jpg";
import burgerLot from "@/assets/burger-lot.jpg";
import chickenParma from "@/assets/chicken-parma.jpg";
import steakSandwich from "@/assets/steak-sandwich-new.jpg";
import cappuccino from "@/assets/cappuccino-new-v2.png";
import eggBaconRoll from "@/assets/egg-bacon-roll-new.png";
import jamDonut from "@/assets/jam-donut.jpg";
import chickenSchnitzel from "@/assets/chicken-schnitzel.jpg";
import baconEggSandwich from "@/assets/bacon-egg-sandwich.jpg";
import hotDog from "@/assets/hot-dog-new.jpg";
import hotChips from "@/assets/hot-chips.jpg";
import icedCoffee from "@/assets/iced-coffee-new-v2.png";
import muffin from "@/assets/muffin.jpg";
import cateringSnippet from "@/assets/catering-snippet.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Clock, ChefHat, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import slide1 from "../assets/catering-new-1.jpg";
import slide2 from "../assets/catering-new-2.jpg";
import slide3 from "../assets/catering-new-3.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={australianCafeHero} 
            alt="Hotts Cafe Modern Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <BadgeLocal className="mb-6 bg-primary text-white border-none px-6 drop-shadow-xl scale-110">
              <Sparkles className="w-3 h-3 mr-2" /> NEW VIBE, SAME FLAVOR
            </BadgeLocal>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-6 text-white tracking-tighter uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              COFFEE <br />
              <span className="text-primary italic">with soul.</span>
            </h1>
            {/* <p className="text-base sm:text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto font-bold leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] px-4">
              We're turning up the volume on your morning. Hotts Café is where bold flavors meet vibrant community.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-6">
              <Link href="/menu">
                <Button size="lg" className="w-full sm:w-auto hover:bg-primary/90 text-white rounded-full px-12 h-14 sm:h-16 text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all cursor-pointer bg-[#e50139]">
                  See the Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/40 rounded-full px-12 h-14 sm:h-16 text-lg sm:text-xl backdrop-blur-md hover:scale-105 transition-all cursor-pointer">
                  Visit Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Not Just A Café. A Movement. */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative px-4 sm:px-0"
            >
              <div className="relative group max-w-[320px] sm:max-w-[400px] mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] rotate-2 transition-transform group-hover:rotate-1"></div>
                <img 
                  src={introSectionImg} 
                  alt="Barista pouring latte art" 
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[3/4] border-8 border-white"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-[#201839] mb-4 leading-[1.1]">
                Not Just A Café.<br />
                <span className="relative inline-block">
                  A Movement.
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary rounded-full"></span>
                </span>
              </h2>
              
              <p className="text-black/70 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                At Hotts Café, we believe a café is more than just a place to grab a cup of coffee. It is a space where community comes together. Whether you prefer something light and wholesome or a hearty meal to fuel your day, we have options to suit every appetite.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 rounded-3xl bg-[#FFF5F6] border border-primary/5 group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#201839] mb-2">Vibe Check</h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    The best beats and the boldest beans in Hoppers Crossing.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#FFF5F6] border border-primary/5 group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#201839] mb-2">Soul Food</h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    Gourmet flavors that make your tastebuds dance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Floating Menu Highlights */}
      <section className="py-16 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-4">
              POPULAR <span className="text-primary opacity-50 italic">PICKS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 md:gap-6">
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
                    <h3 className="font-heading text-base md:text-lg font-medium mb-1 group-hover:text-primary transition-colors leading-tight line-clamp-1">{item.title}</h3>
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
              <BadgeLocal className="mb-4 bg-primary/10 text-primary border-primary/20">
                EVENT CATERING
              </BadgeLocal>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-[#201839] mb-6 leading-tight">
                Catering for <br />
                <span className="text-primary italic">your next event</span>
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
      <section className="py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#201839] rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
             <div className="relative z-10">
               <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#e50139] font-black mb-6 sm:mb-8 leading-tight tracking-tighter uppercase">
                 BE THERE FOR <br />
                 THE EXPERIENCE.
               </h2>
               <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium text-white/90">
                 Be there for the community. Be there at Hotts Café. We look forward to welcoming you soon.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                 <Link href="/menu">
                   <Button size="lg" className="bg-[#e50139] hover:bg-[#e50139]/90 text-white rounded-full px-10 h-14 sm:h-16 text-lg font-bold transition-all hover:scale-105">
                     See the Menu
                   </Button>
                 </Link>
                 <Link href="/contact">
                   <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/20 rounded-full px-10 h-14 sm:h-16 text-lg font-bold transition-all hover:scale-105">
                     Visit Us
                   </Button>
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function BadgeLocal({ children, className }: any) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border mb-4 text-primary border-primary/20 bg-[#e5003914]">
      {children}
    </span>
  );
}
