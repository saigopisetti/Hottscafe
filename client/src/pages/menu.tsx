import { Layout } from "@/components/layout";
import { menuData } from "@/lib/menu-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/australian-cafe-hero-morning.png";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);
  const categories = menuData.map(c => c.title);

  return (
    <Layout>
      {/* Small Heading Section */}
      <section className="relative py-10 md:py-12 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Hotts Cafe Menu" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter">
              The <span className="text-primary italic">Menu</span>
            </h1>
            <p className="text-white/50 text-xs md:text-sm max-w-lg mx-auto uppercase tracking-widest font-bold">
              Fresh • Bold • Made with Soul
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories Navigation - Black with Red Active Tab */}
      <section className="sticky top-20 z-40 bg-black border-b border-neutral-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex overflow-x-auto no-scrollbar py-2 gap-1 md:gap-2 snap-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  document.getElementById('menu-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-xs transition-all whitespace-nowrap snap-start cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="menu-content" className="py-10 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {menuData.find(c => c.title === activeCategory)?.items.map((item, idx) => (
              <motion.div
                key={`${activeCategory}-${idx}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                className="group p-4 rounded-xl border border-neutral-100 hover:border-primary/20 hover:shadow-sm transition-all bg-neutral-50/50"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-xs md:text-sm text-[#201839] group-hover:text-primary transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-black text-primary text-xs md:text-sm ml-4 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-neutral-500 text-[11px] md:text-xs leading-tight line-clamp-2">
                    {item.description}
                  </p>
                )}
                {item.comboPrice && (
                  <div className="mt-2 pt-2 border-t border-dashed border-neutral-200 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Combo</span>
                    <span className="text-[10px] font-bold text-primary">{item.comboPrice}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
