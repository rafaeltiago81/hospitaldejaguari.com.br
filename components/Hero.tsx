"use client";

import Image from "next/image";
import { Phone, ArrowRight, Clock, MapPin, Activity, Award } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 sm:pt-24 md:pt-28 pb-16 md:pb-20 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 dark:bg-blue-900/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-100/10 dark:bg-red-900/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width image banner (within container bounds) */}
        <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50">
          <Image
            src="/images/hcj_panoramico.jpg"
            alt="Hospital de Caridade de Jaguari Facade"
            fill
            priority
            className="object-cover"
            sizes="(max-w-1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-slate-950/20 dark:bg-zinc-950/35" />

          {/* Text content badge/card overlay (bottom-right positioned & extra compact) */}
          <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 z-10 max-w-md md:max-w-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 py-3 px-5 sm:py-4 sm:px-6 md:py-5 md:px-8 rounded-2xl md:rounded-3xl shadow-xl space-y-2.5 md:space-y-3.5">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-950 dark:text-zinc-50 tracking-tight leading-tight">
              Cuidando da sua saúde <br className="hidden sm:inline" />
              com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-600">dedicação</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">carinho</span>
            </h1>
            
            <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-650 dark:text-zinc-300 leading-relaxed font-medium">
              Atuamos há décadas oferecendo atendimento médico hospitalar qualificado, acolhimento humanizado e serviços essenciais de saúde para toda a comunidade de Jaguari e região.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-0.5">
              <a
                href="#contato"
                className="flex items-center gap-1.5 w-full sm:w-auto justify-center bg-blue-900 hover:bg-blue-950 text-white px-3.5 py-1.5 rounded-xl font-bold transition-all duration-200 shadow-md shadow-blue-900/10 hover:shadow-blue-900/20 group text-[10px] sm:text-[11px] md:text-xs"
              >
                Fale Conosco
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#transparencia"
                className="flex items-center justify-center w-full sm:w-auto px-3.5 py-1.5 rounded-xl font-bold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-slate-700 dark:text-zinc-300 transition-all duration-200 text-[10px] sm:text-[11px] md:text-xs"
              >
                Portal da Transparência
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16 relative z-10">
          {/* Card 1 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 dark:bg-red-950/30 p-3.5 rounded-2xl text-red-600 dark:text-red-400">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 dark:text-zinc-50">Plantão de Urgência</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">Disponível 24h por dia para emergências médicas.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a href="tel:+555532551882" className="text-base font-bold text-red-650 dark:text-red-400 hover:text-red-750 flex items-center gap-1 group">
                (55) 3255-1882
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-3.5 rounded-2xl text-blue-900 dark:text-blue-400">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 dark:text-zinc-50">Horário de Visitas</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">Visitas diárias para pacientes internados no hospital.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                Todos os dias: 14h às 16h | 19h às 20h
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 dark:bg-red-950/30 p-3.5 rounded-2xl text-red-600 dark:text-red-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 dark:text-zinc-50">Endereço</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">Av. Sete de Setembro, 910 - Centro - Jaguari, RS CEP 97760-000</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a href="#contato" className="text-sm font-bold text-blue-900 dark:text-blue-400 hover:underline">
                Como chegar (Ver Mapa)
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
