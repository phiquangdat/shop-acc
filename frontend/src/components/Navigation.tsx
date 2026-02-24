import React from "react";
import Link from "next/link";
import {
  ShoppingBasket,
  Info,
  Mail,
  CircleHelp,
  CreditCard,
  Heart,
  Menu,
  X,
  Globe,
  MessageCircle,
  MessageSquare,
} from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-[#00eaff]/20 rounded-full blur-lg group-hover:bg-[#00eaff]/40 transition-all duration-500"></div>
              <img
                alt="Logo"
                width="48"
                height="48"
                className="w-full h-full relative z-10 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-300"
                src="/logo.svg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-none group-hover:text-[#00eaff] transition-colors duration-300">
                RANDOM CHEAT
              </span>
              <span className="text-xs font-bold text-[#00eaff] tracking-[0.2em] leading-none uppercase">
                Selling
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm">
            <Link
              href="/"
              className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/products"
              className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden text-black bg-[#00eaff] shadow-[0_0_20px_rgba(0,234,255,0.4)]"
            >
              <ShoppingBasket className="w-3.5 h-3.5 transition-transform group-hover:scale-110 animate-pulse" />
              <span>Products</span>
            </Link>
            <Link
              href="/about"
              className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
            >
              <Info className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
            >
              <Mail className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Contact</span>
            </Link>
            <Link
              href="/faq"
              className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
            >
              <CircleHelp className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>FAQ</span>
            </Link>
            <Link
              href="/payment"
              className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
            >
              <CreditCard className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Payment</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00eaff] hover:bg-[#00eaff]/10 transition-all duration-200 text-white font-semibold text-sm"
              title="Translate page"
            >
              <Globe className="w-4 h-4 text-[#00eaff]" />
              <span>Translate</span>
            </button>
            <div className="h-8 w-px bg-white/10 mx-1"></div>
            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-full hover:bg-white/5 transition-colors group"
            >
              <Heart className="w-5 h-5 transition-colors text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full hover:bg-white/5 transition-colors group"
            >
              <ShoppingBasket className="w-5 h-5 transition-colors text-gray-400 group-hover:text-white" />
            </Link>
            <a
              href="https://wa.me/8801629933030"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center text-sm ring-offset-background hover:text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] h-10 py-2 px-4 ml-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold border-0 shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ShoppingBasket className="w-6 h-6" />
            </Link>
            <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
