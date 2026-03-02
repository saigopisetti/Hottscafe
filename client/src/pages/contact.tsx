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
      {/* Hero Section - Themed */}
      <div className="bg-[#201839] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Get in Touch</span>
          <h1 className="font-heading text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">
            Contact <span className="text-primary italic">Us</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed text-base md:text-lg font-medium">
            We're here to fuel your day. Reach out for bookings, catering, or just to say hello.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-4xl font-black text-[#201839] mb-6 uppercase tracking-tight leading-none">
                Visit <br /><span className="text-primary italic">Hotts Café</span>
              </h2>
              <p className="text-black/60 leading-relaxed mb-8 text-lg font-medium">
                Located in the heart of Hoppers Crossing. Stop by for the best beats and the boldest beans in town.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 transition-transform hover:rotate-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Address</h3>
                <p className="text-black/60 text-sm leading-relaxed font-semibold">
                  Factory 10, 1–3 Kilmur Road,<br />
                  Hoppers Crossing (cnr Old Geelong Road)
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 -rotate-3 transition-transform hover:rotate-0">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Hotline</h3>
                <p className="text-black/60 text-sm leading-relaxed font-semibold">
                  Phone: 9369 6504<br />
                  orders@hottscafe.com.au
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 rotate-6 transition-transform hover:rotate-0">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Hours</h3>
                <p className="text-black/60 text-sm leading-relaxed font-semibold">
                  Mon – Fri: 5.00am – 2.30pm<br />
                  <span className="text-primary font-black uppercase text-[10px] tracking-widest mt-1 block">Delivery till 2pm</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 -rotate-6 transition-transform hover:rotate-0">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-black text-[#201839] uppercase text-sm tracking-widest">Catering</h3>
                <p className="text-black/60 text-sm leading-relaxed font-semibold">
                  Corporate, Office & Business Catering Available
                </p>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[400px] relative group">
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
          <div className="bg-neutral-50 rounded-[4rem] p-10 md:p-16 border border-neutral-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <h2 className="font-heading text-4xl font-black text-[#201839] mb-10 uppercase tracking-tight">
              Send a <span className="text-primary italic">Message</span>
            </h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Name</label>
                  <Input placeholder="Your name" className="rounded-2xl border-neutral-200 focus:border-primary bg-white h-14 px-6 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Email</label>
                  <Input type="email" placeholder="Your email" className="rounded-2xl border-neutral-200 focus:border-primary bg-white h-14 px-6 font-medium" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Subject</label>
                <Input placeholder="What's this about?" className="rounded-2xl border-neutral-200 focus:border-primary bg-white h-14 px-6 font-medium" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-[#201839]">Message</label>
                <Textarea placeholder="How can we help?" className="min-h-[180px] rounded-[2rem] border-neutral-200 focus:border-primary bg-white p-8 font-medium" />
              </div>

              {/* Mock Captcha */}
              <div className="p-8 bg-white rounded-3xl border border-neutral-200 space-y-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-black/60">Security Check</span>
                  </div>
                  <div className="bg-neutral-100 px-6 py-3 rounded-xl font-heading font-black tracking-[0.5em] text-primary select-none italic text-2xl shadow-inner">
                    {mockCaptcha}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Enter the security code above</label>
                  <Input 
                    value={captchaValue}
                    onChange={(e) => {
                      setCaptchaValue(e.target.value);
                      setIsVerified(e.target.value.toUpperCase() === mockCaptcha);
                    }}
                    placeholder="Type code here" 
                    className="rounded-xl border-neutral-100 bg-neutral-50 h-12 text-center font-bold tracking-[0.3em] focus:border-primary uppercase text-lg" 
                  />
                </div>
              </div>

              <Button 
                disabled={!isVerified}
                className="w-full bg-[#201839] hover:bg-primary text-white rounded-full h-16 text-xl font-black transition-all group disabled:opacity-50 shadow-xl"
              >
                {isVerified ? "Send Message" : "Verify to Send"}
                <Send className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
