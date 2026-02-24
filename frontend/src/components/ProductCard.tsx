import React from "react";
import Link from "next/link";
import { Heart, Eye, ShoppingBasket } from "lucide-react";

interface ProductCardProps {
  title: string;
  seller: string;
  image: string;
  tags: string[];
  price: string;
  usdPrice: string;
  link: string;
}

export default function ProductCard({
  title,
  seller,
  image,
  tags,
  price,
  usdPrice,
  link,
}: ProductCardProps) {
  return (
    <div className="animate-fadeIn">
      <div className="rounded-3xl p-6 from-[#0d1020] via-[#0a0d18] to-[#0d1020] shadow-2xl ease-out hover:border-[rgba(138,61,255,0.6)] h-full flex flex-col group cursor-pointer overflow-hidden relative transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(138,61,255,0.3)] border border-white/10 bg-[#0d1020]/80 backdrop-blur-sm">
        <Link
          aria-label={`View details for ${title}`}
          href={link}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,234,255,0.03)] via-transparent to-[rgba(138,61,255,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative overflow-hidden aspect-[4/3] rounded-2xl mb-4">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1020] via-transparent to-transparent opacity-80" />
          <img
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            src={image}
          />

          <button className="absolute top-3 right-3 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#ff4fd8]/20 hover:border-[#ff4fd8] transition-all duration-300 group/wishlist">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 transition-all text-white group-hover/wishlist:text-[#ff4fd8]" />
          </button>

          <div className="absolute top-3 left-3 z-30">
            <div className="px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md border flex items-center gap-1.5 bg-green-500/20 border-green-500/40">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                In Stock
              </span>
            </div>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100">
            <button className="px-5 py-2.5 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0">
              <Eye className="w-4 h-4" /> Quick View
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5 relative z-10 flex-1">
          <div className="flex justify-between items-start gap-2">
            <h3 className="uppercase tracking-wide bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent text-base sm:text-lg leading-tight mb-1 group-hover:text-[#00eaff] transition-colors duration-300 font-bold line-clamp-1">
              {title}
            </h3>
          </div>
          <p className="text-[11px] sm:text-xs font-medium text-[#a9b0ff] line-clamp-1 uppercase">
            {seller}
          </p>

          <div className="mb-4 mt-2">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-[#a9b0ff] bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-3 border-t border-white/5">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[10px] text-[#a9b0ff] mb-0.5">
                  Starting from
                </p>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-white">
                    ₹{price}
                  </span>
                  <span className="text-sm font-bold text-[#00eaff]">
                    {price} BDT
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#00eaff]/10 border border-[#00eaff]/20">
                <ShoppingBasket className="w-3 h-3 text-[#00eaff]" />
                <span className="text-[10px] font-bold text-[#00eaff]">
                  {usdPrice} USDT
                </span>
              </div>
            </div>
          </div>

          <Link
            href={link}
            className="w-full mt-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,61,255,0.4)] hover:opacity-90 relative overflow-hidden flex items-center justify-center gap-2 z-10 group/btn"
          >
            <span>View Details</span>
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
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
