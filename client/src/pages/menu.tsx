import { Layout } from "@/components/layout";
import { menuData } from "@/lib/menu-data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function Menu() {
  const categories = menuData.map(c => c.title);
  const defaultCategory = categories[0];

  return (
    <Layout>
      <div className="bg-background py-32 px-4 overflow-hidden min-h-screen">
        <div className="max-w-6xl mx-auto text-center mb-32 relative">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -z-10"></div>
          <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-6 block neon-glow">Flavor Town</span>
          <h1 className="font-heading text-8xl md:text-[12rem] font-black text-foreground leading-none tracking-tighter">
            THE <br /><span className="text-stroke">LINEUP</span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue={defaultCategory} className="w-full">
            <div className="flex justify-center mb-24 overflow-x-auto pb-6 scrollbar-hide px-4">
              <TabsList className="flex h-auto p-3 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-secondary data-[state=active]:text-background rounded-full px-10 py-4 transition-all text-sm font-black uppercase tracking-widest whitespace-nowrap"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.title} value={category.title} className="focus:outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-card rounded-[4rem] p-12 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px]"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                    <div className="text-center md:text-left">
                      <h2 className="font-heading text-6xl md:text-8xl font-black text-foreground mb-4 leading-none">{category.title}</h2>
                      {category.note && (
                        <p className="text-secondary font-black uppercase tracking-[0.4em] text-sm neon-glow">{category.note}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16">
                    {category.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative"
                      >
                        <div className="flex justify-between items-end mb-4">
                          <h3 className="font-black text-3xl text-foreground group-hover:text-secondary transition-colors leading-tight tracking-tight">
                            {item.name}
                          </h3>
                          <div className="h-px bg-white/10 flex-grow mx-6 mb-2 group-hover:bg-secondary/30 transition-colors"></div>
                          <span className="font-black text-3xl text-primary whitespace-nowrap">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-foreground/50 text-xl leading-relaxed mb-6 font-medium">
                            {item.description}
                          </p>
                        )}
                        {item.comboPrice && (
                          <div className="inline-flex items-center gap-4 bg-secondary/10 px-6 py-2 rounded-full border border-secondary/20">
                            <span className="text-xs font-black text-secondary tracking-widest uppercase">Combo Deal</span>
                            <span className="text-xl font-black text-foreground">{item.comboPrice}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
