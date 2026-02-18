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
      <div className="bg-neutral-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Delicious Choices</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-6 text-neutral-900">
            Our Menu
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            From hearty breakfasts to gourmet lunches, we prepare everything with fresh, quality ingredients.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue={defaultCategory} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center max-w-3xl">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2 border border-neutral-200 bg-white hover:bg-neutral-50 transition-all text-sm font-medium"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.title} value={category.title} className="focus:outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100"
                >
                  <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-neutral-100 pb-6">
                    <div>
                      <h2 className="font-heading text-3xl font-bold text-neutral-900">{category.title}</h2>
                      {category.note && (
                        <p className="text-primary font-medium mt-2 text-sm">{category.note}</p>
                      )}
                    </div>
                    <Badge variant="outline" className="mt-4 md:mt-0 border-primary/20 text-primary bg-primary/5">
                      {category.items.length} Items
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="font-bold text-lg text-neutral-800 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <div className="border-b border-dotted border-neutral-300 flex-grow mx-4 relative top-[-4px]"></div>
                          <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-neutral-500 text-sm leading-relaxed mb-2">
                            {item.description}
                          </p>
                        )}
                        {item.comboPrice && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-white bg-primary px-2 py-0.5 rounded-full">Combo</span>
                            <span className="text-sm font-medium text-neutral-700">{item.comboPrice}</span>
                          </div>
                        )}
                      </div>
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
