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
      <div className="bg-background py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-24 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 block">Flavor Town</span>
          <h1 className="font-heading text-7xl md:text-9xl font-black text-foreground leading-none tracking-tighter">
            THE <br /><span className="text-stroke text-secondary">LINEUP</span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue={defaultCategory} className="w-full">
            <div className="flex justify-center mb-20 overflow-x-auto pb-4 scrollbar-hide">
              <TabsList className="flex h-auto p-2 bg-white/50 backdrop-blur-md rounded-full border border-foreground/5 shadow-xl">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-8 py-3 transition-all text-sm font-black uppercase tracking-wider"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.title} value={category.title} className="focus:outline-none">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[3rem] p-10 md:p-20 shadow-3xl border border-foreground/5 relative"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center rotate-12 shadow-lg">
                    <span className="font-black text-accent-foreground text-xs text-center leading-none">FRESH<br/>DAILY</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="text-center md:text-left">
                      <h2 className="font-heading text-5xl font-black text-foreground mb-2">{category.title}</h2>
                      {category.note && (
                        <p className="text-primary font-bold uppercase tracking-widest text-xs">{category.note}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
                    {category.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative"
                      >
                        <div className="flex justify-between items-end mb-3">
                          <h3 className="font-black text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.name}
                          </h3>
                          <span className="font-black text-2xl text-secondary whitespace-nowrap ml-4">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-foreground/50 text-base leading-relaxed mb-4 font-medium">
                            {item.description}
                          </p>
                        )}
                        {item.comboPrice && (
                          <div className="inline-flex items-center gap-3 bg-accent/10 px-4 py-1 rounded-full border border-accent/20">
                            <span className="text-[10px] font-black text-accent-foreground tracking-widest uppercase">Combo</span>
                            <span className="text-sm font-black text-foreground">{item.comboPrice}</span>
                          </div>
                        )}
                        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
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
