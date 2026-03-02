import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Coffee, Heart, Users, Clock, MapPin, ChevronRight } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import experienceImg from "@/assets/steak-sandwich-new.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="Hotts Cafe Community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">Our Story</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              More Than Just <br className="sm:hidden" /> <span className="italic text-5xl sm:text-6xl md:text-8xl text-[#ef0000]">Coffee.</span>
            </h1>
          </motion.div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-[#201839] mb-6 sm:mb-8 uppercase tracking-tight leading-none">
                A Space Where <br />
                <span className="italic text-[#ef0000]">Community</span> Comes Together
              </h2>
              <div className="space-y-4 sm:space-y-6 text-black/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  At Hotts Café, we believe a café is more than just a place to grab a cup of coffee. It is a space where community comes together.
                </p>
                <p>
                  Start your morning with a freshly brewed coffee and a satisfying breakfast made with quality ingredients. Whether you prefer something light and wholesome or a hearty meal to fuel your day, we have options to suit every appetite.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 sm:p-8 bg-primary/5 rounded-[1.5rem] sm:rounded-[2rem] border border-primary/10 text-center">
                <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-black text-[#201839] uppercase text-[10px] sm:text-sm tracking-widest mb-2">Quality</h4>
                <p className="text-[10px] sm:text-xs text-black/60 font-medium leading-tight">Brewed with passion using the finest beans.</p>
              </div>
              <div className="p-6 sm:p-8 bg-secondary/5 rounded-[1.5rem] sm:rounded-[2rem] border border-secondary/10 text-center mt-4 sm:mt-8">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-black text-[#201839] uppercase text-[10px] sm:text-sm tracking-widest mb-2">Passion</h4>
                <p className="text-[10px] sm:text-xs text-black/60 font-medium leading-tight">Every meal prepared with care and love.</p>
              </div>
              <div className="p-6 sm:p-8 bg-accent/5 rounded-[1.5rem] sm:rounded-[2rem] border border-accent/10 text-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-3 sm:mb-4" />
                <h4 className="font-black text-[#201839] uppercase text-[10px] sm:text-sm tracking-widest mb-2">Community</h4>
                <p className="text-[10px] sm:text-xs text-black/60 font-medium leading-tight">A welcoming space for everyone to gather.</p>
              </div>
              <div className="p-6 sm:p-8 bg-primary/5 rounded-[1.5rem] sm:rounded-[2rem] border border-primary/10 text-center mt-4 sm:mt-8">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-black text-[#201839] uppercase text-[10px] sm:text-sm tracking-widest mb-2">Fresh</h4>
                <p className="text-[10px] sm:text-xs text-black/60 font-medium leading-tight">Quality ingredients served daily from 5am.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NEW: The Culinary Craft Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 px-4 sm:px-0"
            >
              <div className="relative max-w-[500px] mx-auto lg:ml-auto">
                <div className="absolute -inset-4 bg-secondary/5 rounded-[3rem] -rotate-2"></div>
                <img 
                  src={experienceImg} 
                  alt="Hotts Cafe Signature Dishes" 
                  className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-video border-8 border-white"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-[#201839] mb-6 uppercase tracking-tight leading-none">
                The <span className="text-secondary italic">Culinary</span> Craft
              </h2>
              <p className="text-black/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Our kitchen is the heart of Hotts Café. We take pride in sourcing the freshest local ingredients to create dishes that don't just fill you up, but fuel your soul. From our signature steak sandwiches to our vibrant seasonal salads, every plate is a testament to our commitment to quality.
              </p>
              <ul className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
                {[
                  "Sourced from local Hoppers Crossing suppliers",
                  "Chef-prepared daily specials",
                  "Bold flavors with a modern Australian twist"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/80 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#201839] mb-12 uppercase tracking-tight">
              The <span className="text-primary italic">Lunchtime</span> Break
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-neutral-100">
                <p className="text-black/70 text-lg leading-relaxed">
                  When lunchtime arrives, step away from the office and enjoy a relaxed setting where you can unwind, catch up with colleagues, or hold an informal meeting over a delicious meal.
                </p>
              </div>
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-neutral-100">
                <p className="text-black/70 text-lg leading-relaxed">
                  Our lunch menu offers fresh, flavourful dishes prepared with care and served promptly so you can make the most of your break. It is a moment to connect, recharge, and enjoy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#201839] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
                Be There for <br />
                <span className="text-primary italic">The Experience.</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium text-white/80">
                Be there for the community. Be there at Hotts Café. We look forward to welcoming you soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/menu">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl shadow-2xl transition-all cursor-pointer">
                    See the Menu
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 rounded-full px-12 h-16 text-xl backdrop-blur-md transition-all cursor-pointer">
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
