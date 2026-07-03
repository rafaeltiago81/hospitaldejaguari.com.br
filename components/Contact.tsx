"use client";

import { useState } from "react";
import { PhoneCall, Mail, MapPin, Clock, Send, Check, Loader2 } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Geral",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      tempErrors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "E-mail inválido.";
    }
    if (!formData.message.trim()) tempErrors.message = "Mensagem é obrigatória.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Geral",
        message: "",
      });
    }, 2000);
  };

  const contacts = [
    {
      title: "Pronto Socorro / Emergência",
      number: "(55) 3255-1200",
      href: "tel:+555532551200",
      description: "Plantão 24 horas - Casos urgentes",
      highlight: true,
    },
    {
      title: "Recepção Geral",
      number: "(55) 3255-1882",
      href: "tel:+555532551882",
      description: "Informações gerais e visitas",
      highlight: false,
    },
    {
      title: "Setor Administrativo",
      number: "(55) 3255-1145",
      href: "tel:+555532551145",
      description: "Assuntos comerciais e convênios",
      highlight: false,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight mt-2 mb-6">
            Canais de Comunicação e Localização
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-900 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact list cards */}
            <div className="space-y-4">
              {contacts.map((contact, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-200 ${
                    contact.highlight
                      ? "bg-red-50/30 border-red-200/55 shadow-sm"
                      : "bg-white border-zinc-200/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl shrink-0 ${
                        contact.highlight
                          ? "bg-rose-600 text-white"
                          : "bg-blue-50 text-blue-900"
                      }`}
                    >
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-blue-900/80 uppercase tracking-widest">
                        {contact.title}
                      </h4>
                      <a
                        href={contact.href}
                        className={`text-xl font-extrabold block mt-1 hover:underline ${
                          contact.highlight ? "text-red-650" : "text-blue-950"
                        }`}
                      >
                        {contact.number}
                      </a>
                      <p className="text-xs text-slate-500 mt-1 font-medium">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Information */}
            <div className="bg-white border border-zinc-200/50 rounded-3xl p-6 space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-red-600 shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-blue-950">Localização</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Av. Sete de Setembro, 910 - Centro<br />
                    Jaguari - RS, CEP 97760-000
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-zinc-100 pt-4">
                <Mail className="text-red-600 shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-blue-950">E-mail e Ouvidoria</h4>
                  <p className="text-sm text-slate-500 mt-1 font-medium">
                    contato@hospitaldejaguari.com.br
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Map Mockup */}
            <div className="bg-white border border-zinc-200/50 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              {/* Map background mockup */}
              <div className="h-48 bg-zinc-200 relative flex items-center justify-center overflow-hidden">
                {/* Simulated Grid / Map Pattern */}
                <div className="absolute inset-0 opacity-15 grid grid-cols-6 grid-rows-6 border border-slate-900">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-slate-900" />
                  ))}
                </div>
                {/* Simulated river curve (Jaguari river is a famous landmark) */}
                <svg className="absolute inset-0 w-full h-full text-blue-200" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M-10,30 Q30,80 60,40 T110,60" stroke="currentColor" strokeWidth="8" />
                </svg>
                {/* Simulated streets */}
                <svg className="absolute inset-0 w-full h-full text-zinc-300" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="2" />
                  <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" />
                  <line x1="0" y1="15" x2="100" y2="15" stroke="currentColor" strokeWidth="1" />
                </svg>
                {/* Hospital Pin */}
                <div className="absolute top-[42%] left-[45%] z-10 flex flex-col items-center">
                  <div className="relative flex h-5 w-5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </div>
                  <div className="bg-blue-900 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md mt-1 border border-white whitespace-nowrap">
                    Hospital de Caridade
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex justify-between items-center bg-zinc-50">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Coordenadas:</span> 29.5003° S, 54.6898° W
                </div>
                <a
                  href="https://maps.google.com/?q=Hospital+de+Caridade+de+Jaguari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-900 hover:underline"
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/50 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">Envie uma Mensagem</h3>
              <p className="text-sm text-slate-500 mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais rápido possível. Para urgências, utilize os telefones de plantão.
              </p>

              {formStatus === "success" ? (
                <div className="bg-red-50 border border-red-200/40 p-8 rounded-2xl text-center space-y-4 my-10 animate-fade-in">
                  <div className="bg-red-600 text-white p-4 rounded-full w-fit mx-auto">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-red-800">Mensagem Enviada!</h4>
                  <p className="text-sm text-red-650 max-w-sm mx-auto">
                    Agradecemos seu contato. Sua mensagem foi encaminhada ao setor responsável e responderemos em breve.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 px-6 py-2.5 bg-blue-900 text-white font-semibold rounded-xl text-sm hover:bg-blue-950 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid for Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all ${
                          errors.name ? "border-rose-500 focus:ring-rose-500/10 focus:border-rose-500" : "border-zinc-200"
                        }`}
                        placeholder="Ex: João da Silva"
                      />
                      {errors.name && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all ${
                          errors.email ? "border-rose-500 focus:ring-rose-500/10 focus:border-rose-500" : "border-zinc-200"
                        }`}
                        placeholder="Ex: joao@email.com"
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Grid for Phone and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Telefone (Opcional)
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                        placeholder="Ex: (55) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                      >
                        <option value="Geral">Dúvidas Gerais</option>
                        <option value="Financeiro">Setor Financeiro</option>
                        <option value="Ouvidoria">Elogios, Sugestões ou Reclamações</option>
                        <option value="Trabalhe Conosco">Trabalhe Conosco</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all ${
                        errors.message ? "border-rose-500 focus:ring-rose-500/10 focus:border-rose-500" : "border-zinc-200"
                      }`}
                      placeholder="Escreva sua mensagem aqui..."
                    />
                    {errors.message && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="flex items-center justify-center gap-2 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/15 disabled:opacity-50 transition-all duration-200 cursor-pointer"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-2 text-xs text-slate-400 dark:text-zinc-500">
              <Clock size={14} />
              <span>Prazo de resposta de ouvidoria: até 5 dias úteis.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
