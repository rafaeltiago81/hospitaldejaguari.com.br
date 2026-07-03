import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Institutional from "@/components/Institutional";
import Transparency from "@/components/Transparency";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Institutional />
        <Transparency />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
