import { Layout } from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, ChevronRight, ChevronLeft, Quote, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import slide1 from "@/assets/catering-new-1.jpg";
import slide2 from "@/assets/catering-new-2.jpg";
import slide3 from "@/assets/catering-new-3.jpg";
import gallery1 from "@/assets/gallery-corp-1.jpg";
import gallery2 from "@/assets/gallery-corp-2.jpg";
import gallery3 from "@/assets/gallery-corp-3.jpg";

export default function Catering() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: slide1,
      title: "Corporate Lunches",
      desc: "Impress your team with fresh, gourmet platters."
    },
    {
      url: slide2,
      title: "Private Events",
      desc: "Tailored menus for birthdays and celebrations."
    },
    {
      url: slide3,
      title: "Fresh Platters",
      desc: "Beautifully presented and delivered to your door."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="bg-white pb-24">
        {/* Hero Slider */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide].url} 
                className="w-full h-full object-cover opacity-60"
                alt="Catering"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
              >
                Hotts Catering
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-lg md:text-xl font-medium"
              >
                {slides[currentSlide].desc}
              </motion.p>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-12 h-1 rounded-full transition-all ${idx === currentSlide ? 'bg-primary' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-4xl font-black text-[#201839] mb-6">Professional Catering <br/><span className="text-primary italic">for every occasion.</span></h2>
                <p className="text-black/60 text-lg leading-relaxed mb-8">
                  Whether you're hosting a corporate meeting, a private function, or just need to feed a hungry crowd, Hotts Café provides high-quality catering solutions tailored to your needs.
                </p>
                <div className="space-y-4">
                  {[
                    "Gourmet Sandwich & Wrap Platters",
                    "Hot Food & Finger Food Selections",
                    "Fresh Salads & Fruit Platters",
                    "Morning & Afternoon Tea Options"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </div>
                      <span className="font-bold text-[#201839]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="relative">
                <img 
                  src={slide2} 
                  className="rounded-[2rem] shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
                  alt="Catering Platter"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full -z-0 animate-pulse opacity-50" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-0 blur-2xl" />
              </div>
            </div>

          {/* Sharp Edged Gallery Grid */}
          <section className="mb-24 px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-[#201839] mb-4 uppercase tracking-tighter">Catering <span className="text-primary italic">Excellence</span></h2>
              <p className="text-black/60 text-lg max-w-2xl mx-auto">A visual journey through our most successful corporate events and gourmet presentations.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { img: gallery1, label: "Corporate Lunch" },
                { img: gallery2, label: "Team Building" },
                { img: gallery3, label: "Event Setup" },
                { img: slide1, label: "Fresh Platters" },
                { img: slide2, label: "Gourmet Wraps" },
                { img: slide3, label: "Sweet Treats" },
                { img: "/src/assets/gallery-grid-food_1.jpg", label: "Executive Dining" },
                { img: "/src/assets/gallery-grid-people_1.jpg", label: "Networking" },
                { img: "/src/assets/gallery-grid-party_1.jpg", label: "Office Party" },
                { img: "/src/assets/gallery-grid-food_2.jpg", label: "Boardroom Menu" },
                { img: "/src/assets/gallery-grid-people_2.jpg", label: "Client Meeting" },
                { img: "/src/assets/gallery-grid-party_2.jpg", label: "Celebration" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group aspect-square overflow-hidden bg-neutral-200"
                >
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={item.label} 
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white font-black text-center text-xs md:text-sm uppercase tracking-widest">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonial Slider */}
          <section className="py-24 bg-neutral-50 rounded-[3rem] overflow-hidden mb-24 px-8">
            <div className="text-center mb-16">
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              <h2 className="font-heading text-4xl font-black text-[#201839] uppercase tracking-tighter">Client <span className="text-primary italic">Feedback</span></h2>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    text: "Hotts Café catered our office launch and the feedback was incredible. The platters were fresh and beautifully presented.",
                    author: "Tech Solutions Hub"
                  },
                  {
                    text: "Best corporate lunch we've had in years. The mix of hot food and fresh wraps was perfect for our diverse team.",
                    author: "Logistics Victoria"
                  },
                  {
                    text: "Reliable, professional, and delicious. They handled our last-minute event with grace and amazing flavor.",
                    author: "Hoppers Health Clinic"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 rounded-[2rem] shadow-lg border border-neutral-100 flex flex-col justify-between"
                  >
                    <p className="text-lg text-[#201839] italic mb-6 leading-relaxed">
                      "{item.text}"
                    </p>
                    <div className="font-bold text-primary uppercase tracking-widest text-xs">
                      {item.author}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ready to Order Section */}
          <section className="relative overflow-hidden rounded-[3rem] bg-[#201839] p-12 md:p-24 text-center text-white">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-6xl font-black mb-6">Ready to <span className="text-primary italic">Order?</span></h2>
              <p className="text-xl text-white/70 mb-12">
                Download our catering menu or get in touch with our team to discuss your specific requirements. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:93696504" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl transition-all hover:scale-105">
                    <Phone className="w-5 h-5 mr-2" /> Call 9369 6504
                  </Button>
                </a>
                <a href="mailto:orders@hottscafe.com.au" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full px-10 h-16 text-lg font-bold backdrop-blur-md transition-all hover:scale-105">
                    <Mail className="w-5 h-5 mr-2" /> Email Us
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
