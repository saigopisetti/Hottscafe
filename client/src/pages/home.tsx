import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cafe.png";
import breakfastImage from "@/assets/breakfast-plate.png";
import coffeeImage from "@/assets/coffee-art.png";
import burgerImage from "@/assets/burger-combo.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Clock, ChefHat, Phone } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hotts Cafe Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              Be there for the <span className="text-primary-foreground">moments</span> that matter.
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl font-light leading-relaxed">
              At Hotts Café, we believe a café is more than just a place to grab a cup of coffee. It is a space where community comes together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base cursor-pointer">
                  View Our Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 h-14 text-base backdrop-blur-md cursor-pointer">
                  Find Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full -z-10"></div>
               <img 
                 src={coffeeImage} 
                 alt="Barista Coffee Art" 
                 className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
               />
               <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden lg:block">
                 <p className="font-heading text-xl text-primary font-bold italic">"More than just a meal"</p>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Under New Management</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6 text-neutral-900">
                Start your morning with freshly brewed coffee.
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Start your morning with a freshly brewed coffee and a satisfying breakfast made with quality ingredients. Whether you prefer something light and wholesome or a hearty meal to fuel your day, we have options to suit every appetite.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                When lunchtime arrives, step away from the office and enjoy a relaxed setting where you can unwind, catch up with colleagues, or hold an informal meeting over a delicious meal.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Quality Coffee</h4>
                    <p className="text-sm text-neutral-500">Expertly brewed every time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Fresh Food</h4>
                    <p className="text-sm text-neutral-500">Made with care daily.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Favorites</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-neutral-900">
              Menu Highlights
            </h2>
            <p className="text-neutral-600">
              Our lunch menu offers fresh, flavourful dishes prepared with care and served promptly so you can make the most of your break.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={breakfastImage} 
                  alt="Big Breakfast" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-2xl font-bold text-neutral-900">Big Breaky</h3>
                  <span className="text-primary font-bold">$22.90</span>
                </div>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-3">
                  2 slices of toast, hash brown, bbq sausage, bacon, eggs, tomato & mushroom. The perfect start to your day.
                </p>
                <Link href="/menu">
                  <a className="text-primary font-medium flex items-center gap-2 text-sm group-hover:gap-3 transition-all cursor-pointer">
                    View Menu <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={burgerImage} 
                  alt="Gourmet Burger" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-2xl font-bold text-neutral-900">Beef Burger w' Lot</h3>
                  <span className="text-primary font-bold">$15.50</span>
                </div>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-3">
                  Beef Pattie, Egg, Bacon, Onion, Lettuce, Cheese, Tomato, Tomato Sauce. A classic favorite.
                </p>
                <Link href="/menu">
                  <a className="text-primary font-medium flex items-center gap-2 text-sm group-hover:gap-3 transition-all cursor-pointer">
                    View Menu <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </motion.div>

             {/* Card 3 */}
             <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-64 overflow-hidden bg-neutral-100 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-primary/5"></div>
                 <Coffee className="w-20 h-20 text-primary/20" />
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                   From $4.30
                 </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-2xl font-bold text-neutral-900">Artisan Coffee</h3>
                  <span className="text-primary font-bold"></span>
                </div>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-3">
                  Latte, Cappuccino, Flat White, and more. Expertly brewed to perfection using premium beans.
                </p>
                <Link href="/menu">
                  <a className="text-primary font-medium flex items-center gap-2 text-sm group-hover:gap-3 transition-all cursor-pointer">
                    View Drinks <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Be there for the community.
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            At Hotts Café, it is more than just a meal. It is a moment to connect, recharge, and enjoy. We look forward to welcoming you soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
               <div className="bg-white/10 p-3 rounded-full">
                 <Clock className="w-6 h-6 text-primary" />
               </div>
               <div className="text-left">
                 <p className="font-bold text-sm">Open Mon-Fri</p>
                 <p className="text-neutral-400 text-xs">5:00am - 2:30pm</p>
               </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3">
               <div className="bg-white/10 p-3 rounded-full">
                 <Phone className="w-6 h-6 text-primary" />
               </div>
               <div className="text-left">
                 <p className="font-bold text-sm">Order Ahead</p>
                 <p className="text-neutral-400 text-xs">9369 6504</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
