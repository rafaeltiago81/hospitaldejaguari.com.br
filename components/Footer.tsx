"use client";

import Image from "next/image";
import { Phone, MapPin, Clock, ArrowUp } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-24 h-12 flex items-center justify-center bg-white rounded-xl p-1.5 shadow-sm border border-slate-800 shrink-0">
                <Image
                  src="/images/logo_hcj.png"
                  alt="Logotipo Hospital de Caridade de Jaguari"
                  width={90}
                  height={45}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tighter text-white font-inter leading-none uppercase max-w-[240px] sm:max-w-sm">
                  HOSPITAL DE CARIDADE DE JAGUARI
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Instituição hospitalar filantrópica de utilidade pública sem fins lucrativos, dedicada ao atendimento à saúde da população do município de Jaguari/RS e região.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>CNPJ: 90.993.456/0001-89</p>
              <p>CEBAS nº 25000.089456/2024-11</p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-red-500 transition-colors">Início</a>
              </li>
              <li>
                <a href="#institucional" className="hover:text-red-500 transition-colors">Institucional</a>
              </li>
              <li>
                <a href="#transparencia" className="hover:text-red-500 transition-colors">Transparência</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-red-500 transition-colors">Contato e Ouvidoria</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contato & Atendimento</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-red-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white font-semibold">Plantão Emergências: (55) 3255-1200</p>
                  <p className="text-xs text-slate-500 mt-0.5">Disponível 24h por dia, 7 dias por semana</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white font-semibold">Hospital de Caridade de Jaguari</p>
                  <p className="text-xs text-slate-500 mt-0.5">Av. Sete de Setembro, 910 - Centro - Jaguari, RS CEP 97760-000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-red-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white font-semibold">Horário Administrativo</p>
                  <p className="text-xs text-slate-500 mt-0.5">Segunda a Sexta: 08:00 às 12:00 e 13:30 às 17:30</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Hospital de Caridade de Jaguari. Todos os direitos reservados.
          </div>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white px-4 py-2.5 rounded-xl border border-slate-800 transition-all font-semibold cursor-pointer"
            aria-label="Voltar ao topo"
          >
            Voltar ao Topo
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
