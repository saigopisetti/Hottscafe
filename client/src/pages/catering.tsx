import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Catering() {
  return (
    <Layout>
      <div className="bg-neutral-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Events & Functions</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-6 text-neutral-900">
            Catering
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Corporate, Office & Business Catering. We provide fresh, delicious food for your meetings and events.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
               <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">What We Offer</h2>
               <ul className="space-y-4">
                 {[
                   "Morning Tea & Luncheons",
                   "Finger Food Platters",
                   "Fresh Gourmet Sandwiches",
                   "Hot Gourmet Savouries",
                   "Seasonal Fruit Platters",
                   "Sweets Selection",
                   "Delivery available till 2pm"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                     <span className="text-neutral-700">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-bold text-neutral-900">Perfect for Business</h3>
              <p className="text-neutral-600 leading-relaxed">
                Make your next office meeting or corporate event a success with our professional catering services. We offer a wide range of options to suit every taste and dietary requirement.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our platters are freshly prepared and presented beautifully, ensuring a great impression for your guests or colleagues.
              </p>
              <div className="pt-4">
                 <Link href="/contact">
                   <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                     Enquire Now
                   </Button>
                 </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-4">Ready to Order?</h2>
            <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
              Contact us to discuss your catering needs. We recommend placing orders 24 hours in advance for large groups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:orders@hottscafe.com.au" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors">
                Email Orders
              </a>
              <a href="tel:93696504" className="inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-900 font-bold rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                Call 9369 6504
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
