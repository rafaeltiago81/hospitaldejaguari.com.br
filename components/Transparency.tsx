"use client";

import { useState } from "react";
import { Search, FileText, Download, TrendingUp, Coins, BarChart3, CheckCircle2 } from "@/components/Icons";

export default function Transparency() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastFile, setToastFile] = useState("");

  const categories = [
    { id: "all", label: "Todos os Documentos" },
    { id: "agreements", label: "Convênios e Repasses" },
    { id: "management", label: "Relatórios de Gestão" },
  ];

  const documents: Array<{
    id: number;
    title: string;
    category: string;
    date: string;
    size: string;
    format: string;
  }> = [];

  const handleDownload = (filename: string) => {
    setToastFile(filename);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="transparencia" className="py-24 bg-white dark:bg-zinc-900 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-blue-950 text-white px-5 py-4 rounded-2xl shadow-2xl border border-zinc-800/30 dark:border-blue-900/40 animate-slide-in">
          <CheckCircle2 className="text-red-500 shrink-0" size={20} />
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 dark:text-red-300">Download Iniciado</span>
            <span className="text-sm font-semibold truncate max-w-[250px]">{toastFile}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-red-600 dark:text-red-500 tracking-widest uppercase">
            Transparência
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-zinc-50 tracking-tight mt-2 mb-6">
            Portal da Transparência Filantrópica
          </h2>
          <p className="text-slate-600 dark:text-zinc-400">
            Prestação de contas do uso de recursos públicos e privados recebidos pelo Hospital de Caridade de Jaguari. Garantimos a correta aplicação de cada centavo na saúde dos cidadãos.
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-900 to-red-650 dark:from-blue-400 dark:to-red-400 mx-auto rounded-full mt-6" />
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-red-50/20 dark:bg-zinc-950/40 border border-red-100/30 dark:border-zinc-800/60 p-6 rounded-3xl flex items-center gap-5">
            <div className="bg-red-650 text-white p-4 rounded-2xl">
              <Coins size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Atendimentos</span>
              <h4 className="text-lg font-bold text-blue-950 dark:text-zinc-50 mt-0.5">SUS, Convênios e Particular</h4>
            </div>
          </div>
          <div className="bg-blue-50/20 dark:bg-zinc-950/40 border border-blue-100/30 dark:border-zinc-800/60 p-6 rounded-3xl flex items-center gap-5">
            <div className="bg-blue-900 text-white p-4 rounded-2xl">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Certificações</span>
              <h4 className="text-lg font-bold text-blue-950 dark:text-zinc-50 mt-0.5">CEBAS ATIVO</h4>
            </div>
          </div>
        </div>

        {/* Interactive Document Downloader */}
        <div className="bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/60 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Buscar por termo ou ano..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm"
              />
            </div>
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-blue-900 text-white shadow-md shadow-blue-900/10"
                      : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Document list */}
          {filteredDocs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/40 rounded-2xl p-5 hover:border-red-500/35 transition-all duration-200 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 p-3.5 rounded-xl shrink-0">
                      <FileText size={22} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-50 truncate">
                        {doc.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-zinc-500 mt-1.5 font-medium">
                        <span>{doc.date}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span className="text-rose-500 font-bold uppercase">{doc.format}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(doc.title)}
                    className="p-3 bg-zinc-50 hover:bg-red-50 dark:bg-zinc-800/60 dark:hover:bg-red-950/65 text-slate-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 rounded-xl transition-all duration-200 hover:scale-105 shrink-0"
                    title="Baixar Documento"
                  >
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500 dark:text-zinc-500">Nenhum documento encontrado para a pesquisa.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
