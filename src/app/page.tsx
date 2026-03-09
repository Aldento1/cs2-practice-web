import Link from 'next/link';
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        <header>
          <h1 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-yellow-400">
            CS2 PRO HUB
          </h1>
          <p className="text-gray-400 mt-2">Trenuj jak profesjonalista</p>
        </header>

        <nav className="flex flex-col gap-4">
          <Card
            href="/callouts"
            title="Callout Trainer"
            desc="Naucz się calloutów na mapach"
          />
            
          <Card
            href="/autoexec"
            title="Autoexec Builder"
            desc="Stwórz profesjonalny config"
          />
        </nav>

        <footer className="text-[10px] text-gray-600 uppercase tracking-widest">
        </footer>
      </div>
    </main>
  );
}