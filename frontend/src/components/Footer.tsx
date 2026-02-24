import React from "react";
import Link from "next/link";
import { Send, MessageCircle, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />
      <div className="absolute top-0 left-0 right-0 h-px w-full overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00eaff]/50 to-transparent animate-beam w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h5 className="font-heading font-black text-3xl mb-12 bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent inline-block">
            CONNECT WITH US
          </h5>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://t.me/hibigibi123"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#2AABEE] hover:border-[#2AABEE] shadow-lg hover:shadow-[#2AABEE]/50"
              aria-label="Telegram"
            >
              <Send className="w-8 h-8 text-[#2AABEE] group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://wa.me/8801629933030"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#25D366] hover:border-[#25D366] shadow-lg hover:shadow-[#25D366]/50"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://discord.gg/vsAavHVEe2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#5865F2] hover:border-[#5865F2] shadow-lg hover:shadow-[#5865F2]/50"
              aria-label="Discord"
            >
              <svg
                className="w-8 h-8 text-[#5865F2] group-hover:text-white transition-colors"
                viewBox="0 0 71 55"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@cloudengineff"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#FF0000] hover:border-[#FF0000] shadow-lg hover:shadow-[#FF0000]/50"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8 text-[#FF0000] group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 border-t border-b border-white/10">
            {/* Features implementation removed for brevity... */}
          </div>

          <div className="border-t border-white/10 pt-8 mt-12">
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <Link
                href="/privacy"
                className="text-sm font-medium text-gray-400 hover:text-[#00eaff] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="text-sm font-medium text-gray-400 hover:text-[#00eaff] transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-gray-400 hover:text-[#00eaff] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-400 font-medium">
                © 2025 RANDOM CHEAT SELLING | All Rights Reserved
              </p>
              <p className="text-sm text-gray-600">
                Premium Gaming Solutions • Trusted Reseller • 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
