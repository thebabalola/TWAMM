"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, BookOpen, Github } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TW</span>
              </div>
              <span className="text-xl font-bold">TWAMM Stylus</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Institutional-grade DeFi trading that eliminates MEV and reduces price impact through time-weighted execution. 
              Built on Arbitrum Stylus for maximum efficiency and security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/user-profile"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Trading Interface
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('roadmap')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <Link 
                  href="/user-profile"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Start Trading
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('market')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Market Opportunity
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/thebabalola/TWAMM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FileText size={16} />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <BookOpen size={16} />
                  <span>Technical Specs</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 TWAMM Stylus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
