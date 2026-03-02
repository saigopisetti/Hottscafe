import { Layout } from "@/components/layout";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  
  // Simple Mock Captcha
  const mockCaptcha = "HT7K2";

  return (
    <Layout>
      <div className="bg-white text-black py-16 px-4 relative overflow-hidden border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Get in Touch</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#201839] mb-4 uppercase tracking-tighter leading-tight">
            Contact <span className="text-primary italic">Us</span>
          </h1>
          <p className="text-black/60 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
            We look forward to welcoming you soon. Find us in Hoppers Crossing for your daily dose of great coffee and food.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Section */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-3xl font-black text-[#201839] mb-6 uppercase tracking-tight">
                Visit <span className="text-primary italic">Hotts Café</span>
              </h2>
              <p className="text-black/60 leading-relaxed mb-8 text-lg">
                Whether you're looking for a quick takeaway, a relaxed dine-in experience, or catering for your next office event, we're here to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Address</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Factory 10, 1–3 Kilmur Road,<br />
                  Hoppers Crossing (cnr Old Geelong Road)
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Phone & Email</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Phone: 9369 6504<br />
                  orders@hottscafe.com.au
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Opening Hours</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Mon – Fri: 5.00am – 2.30pm<br />
                  <span className="text-primary text-xs font-bold uppercase">Delivery till 2pm</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Catering</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Corporate, Office & Business Catering Available
                </p>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100 h-[350px] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.97123456789!2d144.700123456789!3d-37.890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUzJzI0LjQiUyAxNDTCsDQyJzAwLjQiRQ!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotts Cafe Location"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Contact Form with Captcha */}
          <div className="bg-neutral-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-neutral-100 shadow-sm">
            <h2 className="font-heading text-3xl font-black text-[#201839] mb-8 uppercase tracking-tight">
              Send a <span className="text-primary italic">Message</span>
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as any;
              const email = target.email.value;
              const phone = target.phone.value;
              
              // Email validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
              }

              // Basic phone validation (at least 8 digits)
              const phoneRegex = /^\d{8,15}$/;
              const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
              if (cleanPhone && !phoneRegex.test(cleanPhone)) {
                alert("Please enter a valid phone number (at least 8 digits).");
                return;
              }

              alert("Message sent! (Mockup)");
            }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Name</label>
                  <Input name="name" required placeholder="Your name" className="rounded-xl border-neutral-200 focus:border-primary bg-white h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Email</label>
                  <Input name="email" type="email" required placeholder="Your email" className="rounded-xl border-neutral-200 focus:border-primary bg-white h-12" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Phone Number</label>
                  <Input name="phone" type="tel" placeholder="Your phone (optional)" className="rounded-xl border-neutral-200 focus:border-primary bg-white h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Subject</label>
                  <Input name="subject" required placeholder="What's this about?" className="rounded-xl border-neutral-200 focus:border-primary bg-white h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Message</label>
                <Textarea name="message" required placeholder="How can we help?" className="min-h-[150px] rounded-2xl border-neutral-200 focus:border-primary bg-white p-4" />
              </div>

              {/* Mock Captcha */}
              <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-black/60">Security Check</span>
                  </div>
                  <div className="bg-neutral-100 px-4 py-2 rounded font-heading font-black tracking-[0.5em] text-primary select-none italic text-lg">
                    {mockCaptcha}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Enter the code above</label>
                  <Input 
                    value={captchaValue}
                    onChange={(e) => {
                      setCaptchaValue(e.target.value);
                      setIsVerified(e.target.value.toUpperCase() === mockCaptcha);
                    }}
                    placeholder="Type code here" 
                    className="rounded-lg border-neutral-100 bg-neutral-50 h-10 text-center font-bold tracking-widest" 
                  />
                </div>
              </div>

              <Button 
                disabled={!isVerified}
                className="w-full bg-[#201839] hover:bg-primary text-white rounded-full h-14 text-lg font-black transition-all group disabled:opacity-50"
              >
                {isVerified ? "Send Message" : "Verify to Send"}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
