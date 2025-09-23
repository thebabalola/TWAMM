"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Eye, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp
} from 'lucide-react';

// Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView] as const;
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [setRef, isInView] = useInView(0.1);
  
  return (
    <div 
      ref={setRef} 
      className={`transition-all duration-1000 ease-out ${
        isInView 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};



export default function MannaLandingPage() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
             {/* Hero Section */}
       <section className="pt-24 bg-gradient-to-br from-[#144489] via-[#1a5ba8] to-[#EFAC20] text-white relative overflow-hidden">
         {/* Animated background elements */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EFAC20] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
         </div>
         
         {/* Project-related background icons */}
         <div className="absolute inset-0 opacity-5">
           {/* Korean Won Symbol */}
           <div className="absolute top-20 left-20 text-6xl">₩</div>
           <div className="absolute top-40 right-32 text-4xl">₩</div>
           <div className="absolute bottom-32 left-32 text-5xl">₩</div>
           
           {/* Webtoon/Art Icons */}
           <div className="absolute top-32 left-1/3 text-5xl">🎨</div>
           <div className="absolute bottom-20 right-1/4 text-4xl">📱</div>
           
           {/* Music Icons */}
           <div className="absolute top-1/2 right-20 text-4xl">🎵</div>
           <div className="absolute bottom-1/3 left-1/4 text-5xl">🎤</div>
           
           {/* Streaming/Content Icons */}
           <div className="absolute top-1/3 right-1/3 text-4xl">📺</div>
           <div className="absolute bottom-1/2 right-1/2 text-5xl">🎬</div>
           
           {/* Education Icons */}
           <div className="absolute top-1/4 right-1/4 text-4xl">📚</div>
           <div className="absolute bottom-1/4 left-1/2 text-4xl">✏️</div>
           
           {/* Blockchain/Technology Icons */}
           <div className="absolute top-1/2 left-1/2 text-4xl">🔗</div>
           <div className="absolute bottom-1/3 right-1/3 text-5xl">⚡</div>
           
           {/* Global/Connection Icons */}
           <div className="absolute top-1/3 left-1/4 text-4xl">🌍</div>
           <div className="absolute bottom-1/2 left-1/3 text-4xl">🤝</div>
           
           {/* Korean Culture Icons */}
           <div className="absolute top-1/2 left-1/4 text-4xl">🇰🇷</div>
           <div className="absolute bottom-1/4 right-1/2 text-5xl">💝</div>
         </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#EFAC20] drop-shadow-lg">
                  Manna <span className="text-[#EFAC20] drop-shadow-2xl">(만나)</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-2 opacity-95 font-semibold">
                  Bridging Global Passion to Korean Creativity
                </p>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl mb-8 opacity-95 font-medium leading-relaxed">
                              Instant, transparent, and low-fee fan-to-creator support powered by KRW Stablecoin. 
              Eliminate the 15-30% fees that drain creator earnings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/user-profile"
                  className="group bg-[#EFAC20] text-[#144489] px-6 py-3 rounded-xl font-bold text-base hover:bg-[#f4c050] transition-all duration-300 flex items-center justify-center border-2 border-transparent hover:border-[#f4c050]"
                >
                  Try Prototype 
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <button 
                  onClick={() => scrollToSection('roadmap')}
                  className="group border-2 border-white text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-white hover:text-[#144489] transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/hero-img.png" 
                  alt="Global fans supporting Korean creators through Manna" 
                  className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl shadow-2xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EFAC20]/20 to-transparent rounded-2xl -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Wave decoration */}
        <div className="relative">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white animate-pulse">
            <path d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,128C672,149,768,139,864,122.7C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#144489] mb-6 leading-tight">
              Revolutionizing Global K-Culture Support
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Millions of global fans want to directly support Korean webtoon artists, musicians, streamers, and educators, but existing payment systems 
              charge exorbitant fees and create weeks-long delays. Manna eliminates these barriers with 
              blockchain-powered instant transfers.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Zap, title: "Instant Support", desc: "Support arrives in seconds, not weeks" },
              { icon: Eye, title: "Transparent", desc: "See exactly where your money goes" },
              { icon: Globe, title: "Global Access", desc: "Support your Favourite Korean creators,artists, musicians, streamers, and educators from anywhere in the world" }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-[#EFAC20] to-[#f4c050] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#144489] mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-blue-50 to-[#144489]/5">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#144489] mb-4 leading-tight">
              The Broken System for Global Passion
            </h2>
            <p className="text-[#EFAC20] text-lg font-bold text-xl">
              Current payment methods are failing Korean creators,artists, musicians, streamers, and educators
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: DollarSign,
                title: "Exorbitant Fees",
                stat: "15-30%",
                desc: "Traditional payment processors charge massive fees, with Korean creators, artists, musicians, streamers, and educators losing up to 40% of fan support to intermediaries."
              },
              {
                icon: Clock,
                title: "Slow Settlements",
                stat: "3-14 days",
                desc: "International wire transfers take weeks to clear, creating severe cash flow problems for independent Korean creators, artists, musicians, streamers, and educators."
              },
              {
                icon: Eye,
                title: "Opaque Systems",
                stat: "Zero visibility",
                desc: "Fans can't see how much actually reaches Korean creators, artists, musicians, streamers, and educators, undermining trust and the personal connection."
              }
            ].map(({ icon: Icon, title, stat, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mr-4 shadow-md">
                    <Icon size={28} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#144489] mb-1">{title}</h3>
                    <p className="text-red-600 font-bold text-2xl">{stat}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#144489] mb-4">
              Strategic Roadmap
            </h2>
            <p className="text-[#EFAC20] text-base md:text-lg font-semibold">
              From creator bridge to universal K-culture economy
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1",
                  title: "Direct Creator Bridge",
                  desc: "Launch core fan-to-creator KRW-S payment platform targeting independent artists, webtoonists, musicians, and streamers.",
                  status: "current",
                  features: ["Instant KRW-S transfers", "Web3 wallet integration", "Real-time balance updates", "1% transaction fee"]
                },
                {
                  phase: "Phase 2", 
                  title: "K-Culture Ecosystem",
                  desc: "Expand to comprehensive marketplace for digital goods, merchandise, event tickets, and indie gaming integration.",
                  status: "planned",
                  features: ["Creator's Market", "NFT & digital goods", "Gaming currency", "Premium creator tools"]
                },
                {
                  phase: "Phase 3",
                  title: "KRW-S Super App", 
                  desc: "Universal payment network for Korean tourism, retail, and community-driven creative funding.",
                  status: "future",
                  features: ["K-Loyalty program", "Tourism payments", "P2P creative funding", "Retail integration"]
                }
              ].map((phase, index) => (
                <div key={phase.phase} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`p-6 rounded-xl ${
                      phase.status === 'current' 
                        ? 'bg-[#144489] text-white ring-4 ring-[#EFAC20]' 
                        : 'bg-white shadow-lg'
                    }`}>
                      <div className="flex items-center mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          phase.status === 'current' ? 'bg-[#EFAC20] text-[#144489]' : 'bg-[#EFAC20] text-white'
                        }`}>
                          {phase.phase}
                        </span>

                      </div>
                      <h3 className={`text-lg font-bold mb-3 ${phase.status === 'current' ? 'text-white' : 'text-[#144489]'}`}>
                        {phase.title}
                      </h3>
                      <p className={`mb-4 ${phase.status === 'current' ? 'text-gray-200' : 'text-gray-600'}`}>
                        {phase.desc}
                      </p>
                      <ul className="space-y-1">
                        {phase.features.map((feature) => (
                          <li key={feature} className={`text-sm flex items-center ${phase.status === 'current' ? 'text-gray-200' : 'text-gray-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${phase.status === 'current' ? 'bg-[#EFAC20]' : 'bg-[#EFAC20]'}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 rounded-full ${
                      phase.status === 'current' ? 'bg-[#EFAC20] ring-4 ring-[#EFAC20]/30' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  
                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Market Opportunity */}
       <section id="market" className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#144489] mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-[#EFAC20] text-lg font-semibold">
              At the intersection of creator economy and Korean Wave
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                icon: Users,
                title: "Creator Economy",
                value: "$500B",
                subtitle: "By 2027",
                desc: "Global creator economy driven by direct fan engagement and micro-transactions"
              },
              {
                icon: TrendingUp,
                title: "Korean Wave Growth", 
                value: "40%+",
                subtitle: "YoY Growth",
                desc: "K-content exports seeing explosive international demand and engagement"
              },
              {
                icon: Globe,
                title: "Cross-Border Payments",
                value: "Underserved",
                subtitle: "Niche Market",
                desc: "High-volume, low-value international creator support lacks efficient infrastructure"
              }
            ].map(({ icon: Icon, title, value, subtitle, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-[#144489] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#144489] mb-2">{title}</h3>
                <div className="mb-3">
                  <p className="text-3xl font-bold text-[#EFAC20]">{value}</p>
                  <p className="text-sm text-gray-600">{subtitle}</p>
                </div>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#144489] mb-4">
              Fair & Transparent Business Model
            </h2>
            <p className="text-[#EFAC20] text-lg font-semibold">
              Creators keep 99% of fan support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#144489] mb-6">Traditional Platforms</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Support Processing</span>
                  <span className="text-red-600 font-bold">5-8%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Currency Conversion</span>
                  <span className="text-red-600 font-bold">3-5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Platform Commission</span>
                  <span className="text-red-600 font-bold">5-10%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="text-red-600 font-bold">2-7%</span>
                </div>
                <div className="flex justify-between items-center py-3 font-bold text-lg">
                  <span className="text-gray-900">Total Fees</span>
                  <span className="text-red-600">15-30%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#144489] to-[#1a5ba8] text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Manna Platform</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Support Processing</span>
                  <span className="text-[#EFAC20] font-bold">~$0.001</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Currency Conversion</span>
                  <span className="text-[#EFAC20] font-bold">Built-in</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Platform Fee</span>
                  <span className="text-[#EFAC20] font-bold">1%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Hidden Fees</span>
                  <span className="text-[#EFAC20] font-bold">None</span>
                </div>
                <div className="flex justify-between items-center py-3 font-bold text-lg">
                  <span>Total Fees</span>
                  <span className="text-[#EFAC20] text-2xl">1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <AnimatedSection>
        <Footer scrollToSection={scrollToSection} />
      </AnimatedSection>
    </div>
  );
}