"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "@/components/Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Institucional", href: "#institucional" },
    { label: "Transparência", href: "#transparencia" },
    { label: "Contato", href: "#contato" },
    { label: "Webmail", href: "https://webmail.hospitaldejaguari.com.br", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center gap-3 md:gap-4 group">
              <div className="relative w-24 h-12 flex items-center justify-center bg-white rounded-xl p-1.5 shadow-sm border border-zinc-200/50 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Image
                  src="/images/logo_hcj.png"
                  alt="Logotipo Hospital de Caridade de Jaguari"
                  width={90}
                  height={45}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs min-[360px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black tracking-tighter text-blue-950 dark:text-zinc-50 font-inter leading-none uppercase whitespace-nowrap">
                  HOSPITAL DE CARIDADE DE JAGUARI
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+555532551882"
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 whitespace-nowrap shrink-0"
            >
              <Phone size={16} />
              (55) 3255-1882
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible border-b border-zinc-200 dark:border-zinc-800"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        } bg-white dark:bg-zinc-950`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-zinc-300 hover:bg-red-50 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 px-4">
            <a
              href="tel:+555532551882"
              className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white px-5 py-3 rounded-xl text-base font-semibold shadow-lg shadow-blue-900/10 hover:bg-blue-950 transition-colors whitespace-nowrap"
            >
              <Phone size={18} />
              Ligar: (55) 3255-1882
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
