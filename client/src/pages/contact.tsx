import { Layout } from "@/components/layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-neutral-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get in Touch</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed text-lg">
            We look forward to welcoming you soon. Find us in Hoppers Crossing for your daily dose of great coffee and food.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-8">
                Visit Hotts Café
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Whether you're looking for a quick takeaway, a relaxed dine-in experience, or catering for your next office event, we're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900">Address</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Factory 10, 1–3 Kilmur Road,<br />
                  Hoppers Crossing<br />
                  (cnr Old Geelong Road)
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900">Phone & Email</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Phone: 9369 6504<br />
                  orders@hottscafe.com.au
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900">Opening Hours</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Mon – Fri: 5.00am – 2.30pm<br />
                  <span className="text-primary text-xs font-medium">Delivery available till 2pm</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900">Catering</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Available for Corporate,<br />
                  Office & Business Catering
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-neutral-100 rounded-3xl h-[400px] lg:h-auto w-full flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-neutral-200 group-hover:bg-neutral-300 transition-colors"></div>
             <div className="relative z-10 text-center p-8">
               <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
               <h3 className="text-neutral-900 font-bold text-xl">Located in Hoppers Crossing</h3>
               <p className="text-neutral-500 mt-2">1–3 Kilmur Road (cnr Old Geelong Road)</p>
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block mt-6 px-6 py-2 bg-white text-neutral-900 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
               >
                 Get Directions
               </a>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
