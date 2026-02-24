import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Search, ShoppingBasket, Funnel, Heart, View } from "lucide-react";

export default function Home() {
  const products = [
    {
      title: "DRIP CLIENT MOD MENU APK",
      seller: "RANDOM CHEAT SELLING",
      image: "/Drip clint.jpg",
      tags: ["🎚️ Aim Kill", "🎚️ Silent Aim", "+7"],
      price: "300",
      usdPrice: "3",
      link: "/products/drip-client-mobile",
    },
    // Add more products here if needed, keeping one as example for now
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[90px]">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8a3dff]/10 rounded-full blur-[100px] -z-10" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#00eaff] animate-pulse"></span>
              <span className="text-xs font-bold text-[#00eaff] uppercase tracking-widest">
                Premium Collection
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-white">
              Our Products
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our premium collection of gaming solutions. Each product
              is carefully selected for quality and performance.
            </p>
          </div>

          <div className="mb-12 space-y-8">
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00eaff]/20 to-[#8a3dff]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#00eaff] transition-colors z-10" />
              <input
                className="flex border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(0,234,255,0.3)] pl-14 pr-6 w-full h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:border-[#00eaff]/50 focus:bg-white/10 transition-all duration-300 shadow-xl backdrop-blur-sm"
                placeholder="Search products..."
                type="text"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group glass-card text-gray-400 hover:text-white hover:bg-white/10">
                <ShoppingBasket className="w-4 h-4 text-[#00eaff] group-hover:text-white transition-colors" />
                <span>All Products</span>
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group bg-[#00eaff] text-black shadow-[0_0_20px_rgba(0,234,255,0.4)] scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-black"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>Mobile</span>
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group glass-card text-gray-400 hover:text-white hover:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00eaff] group-hover:text-white transition-colors"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>PC</span>
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group glass-card text-gray-400 hover:text-white hover:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00eaff] group-hover:text-white transition-colors"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>Root</span>
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group glass-card text-gray-400 hover:text-white hover:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00eaff] group-hover:text-white transition-colors"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>iOS</span>
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group glass-card text-gray-400 hover:text-white hover:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00eaff] group-hover:text-white transition-colors"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>Bypass</span>
              </button>
              <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group glass-card text-gray-400 hover:text-white hover:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00eaff] group-hover:text-white transition-colors"
                >
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>Silent Aim</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Decorative top bar indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[200] bg-transparent pointer-events-none">
        <div className="h-full bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] w-full" />
        <div className="absolute top-0 left-0 h-full blur-sm bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] opacity-70 w-full" />
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="relative group">
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/15 animate-pulse" />
          <a
            href="https://wa.me/8801629933030"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_45px_rgba(37,211,102,0.85)] transition-all duration-300 hover:scale-110 border-2 border-white/20 cursor-pointer group-hover:bg-[#20C95A]"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white fill-white drop-shadow-md" />
          </a>
        </div>
      </div>
    </div>
  );
}
