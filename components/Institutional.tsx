"use client";

import { ShieldCheck, Eye, HeartHandshake, Users, Award, History } from "@/components/Icons";

export default function Institutional() {
  const values = [
    {
      title: "Missão",
      description: "Prestar assistência hospitalar e serviços de saúde com qualidade, segurança e acolhimento humanizado, promovendo o bem-estar da comunidade regional.",
      icon: HeartHandshake,
      color: "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-100/50 dark:border-red-900/30",
    },
    {
      title: "Visão",
      description: "Ser reconhecido como referência em saúde e gestão filantrópica na região central do estado, mantendo o foco na excelência clínica e na sustentabilidade.",
      icon: Eye,
      color: "bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30",
    },
    {
      title: "Valores",
      description: "Nossas ações são pautadas na ética, humanização, transparência administrativa, empatia, responsabilidade social e segurança do paciente em todas as etapas.",
      icon: ShieldCheck,
      color: "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-100/50 dark:border-red-900/30",
    },
  ];

  const board = [
    { role: "Interventora", name: "Carla Boniatti" },
    { role: "Diretora Clínica/Técnica", name: "Dra. Laís Pauleski" },
  ];

  return (
    <section id="institucional" className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-red-600 dark:text-red-500 tracking-widest uppercase">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-zinc-50 tracking-tight mt-2 mb-6">
            Nossa História e Compromisso com a Vida
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-900 to-red-650 dark:from-blue-400 dark:to-red-400 mx-auto rounded-full" />
        </div>

        {/* History / Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 text-white p-2.5 rounded-xl">
                <History size={20} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-zinc-50">Décadas Atendendo a Comunidade de Jaguari e Região</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
              O <strong className="font-bold text-slate-950 dark:text-zinc-50">Hospital de Caridade de Jaguari</strong> foi fundado com o propósito de atender a necessidade de atendimento médico local e regional. Sendo uma instituição filantrópica, o principal foco sempre foi e continuará sendo o bem estar da comunidade.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
              Ao longo dos anos, modernizamos nossas instalações, ampliamos a capacidade de internação e otimizamos nosso Pronto Atendimento 24h, garantindo que os moradores de Jaguari receivem cuidados médicos de alta qualidade sem precisar se deslocar para grandes centros urbanos em momentos críticos.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="text-3xl font-extrabold text-blue-950 dark:text-zinc-50">60+</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mt-1">Anos de Fundação</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-3xl font-extrabold text-red-600 dark:text-zinc-50">Milhares</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mt-1">de Vidas Cuidadas</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-900 text-white p-2.5 rounded-xl">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-zinc-50">Gestão</h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
              Gestores e profissionais médicos que conduzem as atividades do Hospital de Caridade com responsabilidade social e ética profissional.
            </p>
            <div className="space-y-4">
              {board.map((member, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-850 last:border-0">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-50">{member.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-emerald-500/70 mt-0.5">{member.role}</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className={`p-4 rounded-2xl mb-6 ${val.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4">{val.title}</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
