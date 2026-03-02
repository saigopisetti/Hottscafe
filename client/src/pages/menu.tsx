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
      <div className="bg-background py-12 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <span className="text-secondary font-black tracking-widest uppercase text-xs mb-2 block">Flavor Town</span>
          <h1 className="font-heading text-5xl md:text-7xl font-black text-primary leading-tight tracking-tighter">
            THE <br /><span className="text-primary opacity-50 italic">LINEUP</span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue={defaultCategory} className="w-full">
            <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
              <TabsList className="flex h-auto p-1.5 bg-white/80 backdrop-blur-md rounded-full border border-neutral-200 shadow-lg gap-1">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-5 py-2 transition-all text-xs font-bold uppercase tracking-wider text-black hover:text-primary data-[state=active]:hover:text-white whitespace-nowrap"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.title} value={category.title} className="focus:outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-neutral-100 relative"
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center rotate-12 shadow-md">
                    <span className="font-black text-accent-foreground text-[10px] text-center leading-none uppercase">FRESH<br/>DAILY</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="text-center md:text-left">
                      <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-1">{category.title}</h2>
                      {category.note && (
                        <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{category.note}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
                    {category.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="group relative"
                      >
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.name}
                          </h3>
                          <span className="font-black text-lg text-primary whitespace-nowrap ml-4">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-black/60 text-sm leading-relaxed mb-3 font-medium">
                            {item.description}
                          </p>
                        )}
                        {item.comboPrice && (
                          <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-0.5 rounded-full border border-accent/20">
                            <span className="text-[9px] font-black text-accent-foreground tracking-widest uppercase">Combo</span>
                            <span className="text-xs font-black text-foreground">{item.comboPrice}</span>
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
