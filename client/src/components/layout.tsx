import { Link, useLocation } from "wouter";
import { Coffee, MapPin, Phone, Menu, X, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black text-primary">
                  Hotts Café
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    location === link.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-neutral-600"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium px-6 rounded-full">
                Visit Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 absolute w-full left-0 animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-neutral-600 hover:bg-neutral-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-100 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-black text-primary italic">Hotts Café</span>
            </div>
            <p className="text-neutral-900 text-sm leading-relaxed max-w-xs">
              More than just a meal. It is a moment to connect, recharge, and enjoy.
              Be there for the experience. Be there for the community.
            </p>
            <div className="flex gap-4 pt-2">
               <a href="#" className="text-primary hover:text-black transition-colors">
                  <Facebook className="h-5 w-5" />
               </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-neutral-600 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  Factory 10, 1–3 Kilmur Road,<br />
                  Hoppers Crossing (cnr Old Geelong Road)
                </span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>9369 6504</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>orders@hottscafe.com.au</span>
              </div>
              {/* <div className="text-neutral-400 text-sm pl-8">
                orders@hottscafe.com.au
              </div> */}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
             <h3 className="font-heading text-xl text-primary">Opening Hours</h3>
             <ul className="space-y-2 text-neutral-600 text-sm">
               <li className="flex justify-between max-w-[200px]">
                 <span>Mon – Fri</span>
                 <span className="text-neutral-500 font-bold">5.00am – 2.30pm</span>
               </li>
               <li className="pt-4 text-xs italic text-neutral-500">
                 Delivery available till 2pm ($3.00, Min $10)
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-xs">
         Designed by
          <Link href="https://www.aaria.com.au">
            <a href="https://www.aaria.com.au"> Aaria</a>
          </Link> © {new Date().getFullYear()} Hotts Café. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
