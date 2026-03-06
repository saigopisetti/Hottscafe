import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import australianCafeHero from "@/assets/coffee-chef-banner.png";
import australianCafeBites from "@/assets/egg-bacon-roll-new.png";
import introSectionImg from "@/assets/cappuccino.jpg";
import burgerLot from "@/assets/burger-lot-v3.png";
import chickenParma from "@/assets/chicken-parma-v3.png";
import steakSandwich from "@/assets/steak-sandwich-v3.png";
import cappuccino from "@/assets/cappuccino-v3.png";
import eggBaconRoll from "@/assets/egg-bacon-roll-new.png";
import jamDonut from "@/assets/jam-donut.jpg";
import chickenSchnitzel from "@/assets/chicken-schnitzel.jpg";
import baconEggSandwich from "@/assets/bacon-egg-sandwich.jpg";
import hotDog from "@/assets/hot-dog-new.jpg";
import hotChips from "@/assets/hot-chips.jpg";
import icedCoffee from "@/assets/iced-coffee-v3.png";
import muffin from "@/assets/muffin.jpg";
import saladImg from "@/assets/gallery-9-new.png";
import cateringSnippet from "@/assets/catering-homepage-v3.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, ChefHat, Clock, Phone, Sparkles, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import slide1 from "../assets/gallery-1-new.png";
import slide2 from "../assets/gallery-2-new.png";
import slide3 from "../assets/gallery-3-new.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
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
              <span className="italic text-[#ef0000]">with soul.</span>
            </h1>
            {/* <p className="text-base sm:text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto font-bold leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] px-4">
              We're turning up the volume on your morning. Hotts Café is where bold flavors meet vibrant community.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-6">
              <Link href="/menu">
                <Button size="lg" className="w-full sm:w-auto hover:bg-primary/90 text-white rounded-full px-12 h-14 sm:h-16 text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all cursor-pointer bg-[#ef0000]">
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
              <div className="relative group max-w-[420px] mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] rotate-2 transition-transform group-hover:rotate-1"></div>
                <img 
                  src={introSectionImg} 
                  alt="Barista pouring latte art" 
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[2/3] border-8 border-white"
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

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
                <div className="p-4 sm:p-6 rounded-3xl bg-[#FFF5F6] border border-primary/5 group hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl sm:text-4xl">☕</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#201839] mb-1 sm:mb-2 uppercase tracking-tight">Vibe Check</h3>
                  <p className="text-black/60 text-[10px] sm:text-sm leading-tight sm:leading-relaxed">
                    The best beats & boldest beans.
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-3xl bg-[#FFF5F6] border border-primary/5 group hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl sm:text-4xl">🍔</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#201839] mb-1 sm:mb-2 uppercase tracking-tight">Gourmet Bites</h3>
                  <p className="text-black/60 text-[10px] sm:text-sm leading-tight sm:leading-relaxed">
                    Signature burgers & quick fuel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Caffeine Boost & Quick Bites Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#201839] mb-6 leading-tight">
                The Afternoon <span className="text-primary italic">Fuel.</span>
              </h2>

              <div className="relative mb-8">
                <div className="absolute -left-4 -top-4 text-primary/10">
                  <Quote className="w-12 h-12 fill-current" />
                </div>
                <div className="bg-neutral-50 p-8 rounded-[2.5rem] border-2 border-primary/5 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl" />
                  <p className="text-[#201839] text-xl font-medium leading-relaxed italic relative z-10">
                    "When the mid-day slump hits, our Caffeine Boost and Quick Bites are designed to recharge your focus. From a punchy double-shot espresso to gourmet mini-sliders, we provide the perfect high-energy pause."
                  </p>
                  <div className="absolute -bottom-2 right-12 w-6 h-6 bg-neutral-50 border-r-2 border-b-2 border-primary/5 rotate-45" />
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {["Double Espresso", "Artisan Sliders", "Savory Bites"].map((item, i) => (
                  <span key={i} className="px-5 py-2 rounded-full bg-neutral-100 text-[#201839] font-bold text-xs uppercase tracking-wider">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link href="/menu">
                  <Button size="lg" className="bg-[#ef0000] hover:bg-[#ef0000]/90 text-white rounded-full px-10 h-14 text-lg shadow-xl hover:scale-105 transition-all cursor-pointer">
                    View Full Menu
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative group max-w-[420px] mx-auto lg:mr-auto">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] rotate-2"></div>
                <img 
                  src={australianCafeBites}
                  alt="Quick Bites and Espresso" 
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[2/3] border-8 border-white"
                />
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Experience Section - Lunch Highlights */}
      <section className="py-24 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#201839] mb-4 uppercase tracking-tight">
              The <span className="text-primary italic">Lunchtime</span> Break
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              Our lunch menu offers fresh, flavourful dishes prepared with care. Connect, recharge, and enjoy these local favorites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "The Lot Burger", 
                category: "Burgers", 
                img: burgerLot,
                link: "/menu?category=Burgers"
              },
              { 
                title: "Chicken Parma", 
                category: "Favorites", 
                img: chickenParma,
                link: "/menu?category=Favorites"
              },
              { 
                title: "Steak Sandwich", 
                category: "Sandwiches", 
                img: steakSandwich,
                link: "/menu?category=Sandwiches"
              },
              { 
                title: "Seasonal Salad", 
                category: "Salads", 
                img: saladImg,
                link: "/menu?category=Salads"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <Link href={item.link}>
                  <a className="block">
                    <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#201839]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-primary font-black text-xs uppercase tracking-widest mb-1 italic">
                          {item.category}
                        </p>
                        <h3 className="text-white font-heading text-xl font-black leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              { 
                category: "Breakfast Classics",
                items: [
                  { title: "The Lot Burger", price: "$15.50", description: "Beef, egg, bacon, cheese, lettuce, tomato, onion & sauce" },
                  { title: "Egg & Bacon Roll", price: "$9.50", description: "Double egg, double bacon on a toasted brioche roll" },
                  { title: "Steak Sandwich", price: "$16.50", description: "Tender steak, lettuce, tomato, onion & secret sauce" }
                ]
              },
              { 
                category: "Local Favorites",
                items: [
                  { title: "Chicken Parma", price: "$18.50", description: "Hand-crumbed breast, napoli sauce & melted mozzarella" },
                  { title: "Chicken Schnitzel", price: "$15.00", description: "Golden fried breast with your choice of sides" },
                  { title: "Iced Coffee", price: "$7.50", description: "Double shot espresso, vanilla bean ice cream & whipped cream" }
                ]
              }
            ].map((section, sIdx) => (
              <motion.div 
                key={sIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sIdx * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-primary/20 flex-grow"></div>
                  <h3 className="font-heading text-xl font-black text-[#201839] uppercase tracking-widest whitespace-nowrap italic">{section.category}</h3>
                  <div className="h-px bg-primary/20 flex-grow"></div>
                </div>
                
                <div className="space-y-8">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-heading text-xl font-bold text-[#201839] group-hover:text-primary transition-colors">{item.title}</h4>
                        <div className="flex-grow mx-4 border-b border-dotted border-neutral-300"></div>
                        <span className="font-black text-lg text-primary">{item.price}</span>
                      </div>
                      <p className="text-black/50 text-sm leading-relaxed max-w-md">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/menu">
              <Button className="bg-[#ef0000] hover:bg-[#ef0000]/90 text-white rounded-full px-12 h-14 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                View Full Menu
              </Button>
            </Link>
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
                <Button size="lg" className="hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg transition-all active:scale-95 cursor-pointer bg-[#ef0000]">
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
             <div className="absolute inset-0 bg-primary/10 opacity-90"></div>
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-3xl opacity-50"></div>
             
             <div className="relative z-10">
               <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl text-secondary font-black mb-6 sm:mb-8 leading-none">
                 <span className="opacity-60">BE THERE.</span> <br />
                 <span className="text-primary">AT HOTTS CAFÉ.</span>
               </h2>
               <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium text-white/90">
                 Connect, recharge, and enjoy the experience. We look forward to welcoming you soon.
               </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10">
                 <div className="flex items-center gap-4 bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-md justify-center sm:justify-start">
                   <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                   <div className="text-left">
                     <p className="font-black text-sm sm:text-base uppercase tracking-wider">EARLY BIRDS</p>
                     <p className="text-xs sm:text-sm opacity-80">5:00 AM - 2:30 PM</p>
                   </div>
                 </div>
                 <a href="tel:93696504" className="flex items-center gap-4 bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-md justify-center sm:justify-start hover:bg-white/30 transition-all group">
                   <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                   <div className="text-left">
                     <p className="font-black text-sm sm:text-base uppercase tracking-wider">HOTLINE</p>
                     <p className="text-xs sm:text-sm opacity-80 font-bold">9369 6504</p>
                   </div>
                 </a>
              
               </div>
               <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl text-secondary font-black mt-8 sm:m-8 leading-none">
                  <span>Delivery at <span className="text-4xl sm:text-5xl">$3</span></span> <br />
                </h2>
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
