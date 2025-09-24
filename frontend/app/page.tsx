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



export default function TWAMMLandingPage() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
             {/* Hero Section */}
       <section className="pt-24 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white relative overflow-hidden">
         {/* Animated background elements */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
         </div>
         
         {/* DeFi/Trading related background icons */}
         <div className="absolute inset-0 opacity-5">
           {/* Trading/Chart Icons */}
           <div className="absolute top-20 left-20 text-6xl">📈</div>
           <div className="absolute top-40 right-32 text-4xl">📊</div>
           <div className="absolute bottom-32 left-32 text-5xl">💹</div>
           
           {/* Blockchain/DeFi Icons */}
           <div className="absolute top-32 left-1/3 text-5xl">⛓️</div>
           <div className="absolute bottom-20 right-1/4 text-4xl">🔗</div>
           
           {/* Trading Icons */}
           <div className="absolute top-1/2 right-20 text-4xl">⚖️</div>
           <div className="absolute bottom-1/3 left-1/4 text-5xl">💰</div>
           
           {/* Technology Icons */}
           <div className="absolute top-1/3 right-1/3 text-4xl">⚡</div>
           <div className="absolute bottom-1/2 right-1/2 text-5xl">🔧</div>
           
           {/* Security Icons */}
           <div className="absolute top-1/4 right-1/4 text-4xl">🛡️</div>
           <div className="absolute bottom-1/4 left-1/2 text-4xl">🔒</div>
           
           {/* Network Icons */}
           <div className="absolute top-1/2 left-1/2 text-4xl">🌐</div>
           <div className="absolute bottom-1/3 right-1/3 text-5xl">🔄</div>
           
           {/* Time/Clock Icons */}
           <div className="absolute top-1/3 left-1/4 text-4xl">⏰</div>
           <div className="absolute bottom-1/2 left-1/3 text-4xl">⏱️</div>
           
           {/* Arbitrum Icons */}
           <div className="absolute top-1/2 left-1/4 text-4xl">🔵</div>
           <div className="absolute bottom-1/4 right-1/2 text-5xl">💎</div>
         </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 drop-shadow-lg">
                  TWAMM <span className="text-cyan-400 drop-shadow-2xl">Stylus</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-2 opacity-95 font-semibold">
                  Time-Weighted Average Market Maker on Arbitrum
                </p>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl mb-8 opacity-95 font-medium leading-relaxed">
                Institutional-grade DeFi trading that eliminates MEV and reduces price impact through time-weighted execution. 
                Built on Arbitrum Stylus for maximum efficiency and security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/user-profile"
                  className="group bg-cyan-400 text-[#1a1a2e] px-6 py-3 rounded-xl font-bold text-base hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center border-2 border-transparent hover:border-cyan-300"
                >
                  Start Trading 
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <button 
                  onClick={() => scrollToSection('roadmap')}
                  className="group border-2 border-white text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-white hover:text-[#1a1a2e] transition-all duration-300"
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
                  alt="TWAMM trading interface on Arbitrum Stylus" 
                  className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl shadow-2xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-2xl -z-10 blur-xl"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
              Revolutionizing DeFi Trading with Time-Weighted Execution
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Large traders and institutions face massive price impact and MEV attacks when executing large orders. TWAMM eliminates these problems 
              by splitting orders across time, providing better execution prices and protecting against front-running attacks.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Zap, title: "MEV Protection", desc: "Eliminate front-running and sandwich attacks through time-weighted execution" },
              { icon: Eye, title: "Price Impact Reduction", desc: "Minimize market impact by spreading large orders over time" },
              { icon: Globe, title: "Institutional Grade", desc: "Built for large traders, DAOs, and institutions requiring optimal execution" }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4 leading-tight">
              The DeFi Trading Problem
            </h2>
            <p className="text-red-600 text-lg font-bold text-xl">
              Current AMMs fail large traders and institutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: DollarSign,
                title: "Massive Price Impact",
                stat: "5-20%",
                desc: "Large orders on traditional AMMs cause significant price slippage, with traders losing substantial value on execution."
              },
              {
                icon: Clock,
                title: "MEV Attacks",
                stat: "Front-running",
                desc: "Sophisticated bots front-run large trades, sandwiching users and extracting value through arbitrage opportunities."
              },
              {
                icon: Eye,
                title: "Poor Execution",
                stat: "Suboptimal prices",
                desc: "Traditional AMMs provide poor execution for large orders, forcing traders to split orders manually across multiple transactions."
              }
            ].map(({ icon: Icon, title, stat, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mr-4 shadow-md">
                    <Icon size={28} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-1">{title}</h3>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
              Development Roadmap
            </h2>
            <p className="text-cyan-600 text-base md:text-lg font-semibold">
              From core TWAMM to institutional DeFi infrastructure
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1",
                  title: "Core TWAMM Protocol",
                  desc: "Launch fundamental TWAMM smart contract on Arbitrum Stylus with basic time-weighted execution and MEV protection.",
                  status: "current",
                  features: ["Time-weighted order execution", "MEV protection", "Arbitrum Stylus deployment", "Basic trading interface"]
                },
                {
                  phase: "Phase 2", 
                  title: "Advanced Features",
                  desc: "Add sophisticated order types, multi-pool support, and institutional-grade analytics and reporting.",
                  status: "planned",
                  features: ["Limit orders", "Multi-pool routing", "Advanced analytics", "API integration"]
                },
                {
                  phase: "Phase 3",
                  title: "Institutional Platform", 
                  desc: "Build comprehensive institutional trading platform with custody integration, compliance tools, and enterprise features.",
                  status: "future",
                  features: ["Institutional custody", "Compliance tools", "White-label solutions", "Enterprise APIs"]
                }
              ].map((phase, index) => (
                <div key={phase.phase} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`p-6 rounded-xl ${
                      phase.status === 'current' 
                        ? 'bg-[#1a1a2e] text-white ring-4 ring-cyan-400' 
                        : 'bg-white shadow-lg'
                    }`}>
                      <div className="flex items-center mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          phase.status === 'current' ? 'bg-cyan-400 text-[#1a1a2e]' : 'bg-cyan-400 text-white'
                        }`}>
                          {phase.phase}
                        </span>

                      </div>
                      <h3 className={`text-lg font-bold mb-3 ${phase.status === 'current' ? 'text-white' : 'text-[#1a1a2e]'}`}>
                        {phase.title}
                      </h3>
                      <p className={`mb-4 ${phase.status === 'current' ? 'text-gray-200' : 'text-gray-600'}`}>
                        {phase.desc}
                      </p>
                      <ul className="space-y-1">
                        {phase.features.map((feature) => (
                          <li key={feature} className={`text-sm flex items-center ${phase.status === 'current' ? 'text-gray-200' : 'text-gray-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${phase.status === 'current' ? 'bg-cyan-400' : 'bg-cyan-400'}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 rounded-full ${
                      phase.status === 'current' ? 'bg-cyan-400 ring-4 ring-cyan-400/30' : 'bg-gray-400'
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Massive DeFi Market Opportunity
            </h2>
            <p className="text-cyan-600 text-lg font-semibold">
              At the intersection of institutional trading and DeFi innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                icon: Users,
                title: "DeFi TVL",
                value: "$200B+",
                subtitle: "Total Value Locked",
                desc: "Massive DeFi ecosystem with growing institutional participation and large trade volumes"
              },
              {
                icon: TrendingUp,
                title: "MEV Extraction", 
                value: "$1.5B+",
                subtitle: "Annual MEV",
                desc: "Billions in MEV extraction highlighting the need for better execution mechanisms"
              },
              {
                icon: Globe,
                title: "Institutional Adoption",
                value: "Growing",
                subtitle: "Enterprise DeFi",
                desc: "Increasing institutional demand for sophisticated DeFi trading infrastructure"
              }
            ].map(({ icon: Icon, title, value, subtitle, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-[#1a1a2e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{title}</h3>
                <div className="mb-3">
                  <p className="text-3xl font-bold text-cyan-600">{value}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Transparent Fee Structure
            </h2>
            <p className="text-cyan-600 text-lg font-semibold">
              Competitive fees with superior execution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Traditional AMMs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Trading Fees</span>
                  <span className="text-red-600 font-bold">0.3-1%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Price Impact</span>
                  <span className="text-red-600 font-bold">5-20%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">MEV Losses</span>
                  <span className="text-red-600 font-bold">1-5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Gas Costs</span>
                  <span className="text-red-600 font-bold">$10-100</span>
                </div>
                <div className="flex justify-between items-center py-3 font-bold text-lg">
                  <span className="text-gray-900">Total Cost</span>
                  <span className="text-red-600">6-26%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">TWAMM Stylus</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Trading Fees</span>
                  <span className="text-cyan-400 font-bold">0.1%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Price Impact</span>
                  <span className="text-cyan-400 font-bold">Minimal</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>MEV Protection</span>
                  <span className="text-cyan-400 font-bold">Built-in</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Gas Costs</span>
                  <span className="text-cyan-400 font-bold">Low</span>
                </div>
                <div className="flex justify-between items-center py-3 font-bold text-lg">
                  <span>Total Cost</span>
                  <span className="text-cyan-400 text-2xl">0.1%</span>
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