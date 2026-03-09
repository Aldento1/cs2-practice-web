import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        <header>
          <h1 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
            CS2 PRO HUB
          </h1>
          <p className="text-gray-400 mt-2">Trenuj jak profesjonalista</p>
        </header>

        <nav className="flex flex-col gap-4">
          <Link href="/callouts" className="group p-6 bg-gray-900 rounded-3xl border border-gray-800 hover:border-yellow-500 transition-all">
            <h2 className="text-xl font-bold group-hover:text-yellow-400">🗺️ Callout Trainer</h2>
            <p className="text-sm text-gray-500">Naucz się nazw miejscówek na mapach.</p>
          </Link>

          <Link href="/autoexec" className="group p-6 bg-gray-900 rounded-3xl border border-gray-800 hover:border-orange-500 transition-all">
            <h2 className="text-xl font-bold group-hover:text-orange-400">⚙️ Autoexec Creator</h2>
            <p className="text-sm text-gray-500">Wygeneruj idealny config w 5 sekund.</p>
          </Link>
        </nav>

        <footer className="text-[10px] text-gray-600 uppercase tracking-widest">
          Designed for TikTok Players
        </footer>
      </div>
    </main>
  );
}