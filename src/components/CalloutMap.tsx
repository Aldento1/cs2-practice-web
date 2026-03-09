"use client";
import { useState, useMemo } from "react";
import { ancientCallouts, Callout } from "../lib/mapData";

export default function CalloutMap() {
  const [target, setTarget] = useState<Callout>(ancientCallouts[0]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"neutral" | "success" | "error">("neutral");
  const [debugMode, setDebugMode] = useState(false);

  const nextRound = () => {
    const remaining = ancientCallouts.filter(c => c.id !== target.id);
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    setTarget(random || ancientCallouts[0]);
    setFeedback("neutral");
  };

  const handleSpotClick = (id: string) => {
    if (id === target.id) {
      setScore(s => s + 1);
      setFeedback("success");
      setTimeout(nextRound, 500);
    } else if (!debugMode) {
      setScore(0);
      setFeedback("error");
      setTimeout(() => setFeedback("neutral"), 400);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Background System Layers */}
      <div className="bg-layers" />
      <div className="bg-grid absolute inset-0 z-[-1]" />
      <div className="bg-noise absolute inset-0 z-[-1]" />
      <div className="light-blob top-[-10%] left-[-10%]" />
      <div className="light-blob bottom-[-10%] right-[-10%] [animation-delay:2s]" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT PANEL: Branding & Target (Bento Large) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent shadow-[0_0_15px_rgba(94,106,210,0.4)] flex items-center justify-center font-black italic">A</div>
              <span className="text-xs font-mono tracking-[0.3em] text-foreground-muted uppercase">Ancient Tactical Radar</span>
            </div>
            <button 
              onClick={() => setDebugMode(!debugMode)}
              className={`text-[10px] font-bold px-4 py-1.5 rounded-full border transition-all ${
                debugMode ? 'bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(94,106,210,0.2)]' : 'border-white/10 text-white/40 hover:text-white'
              }`}
            >
              DEBUG {debugMode ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="glass-card rounded-[2rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Current Objective</p>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent italic">
              {target.name}
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/5 text-xs font-mono">
                Streak: <span className="text-accent font-bold">{score}</span>
              </div>
            </div>
          </div>

          {/* MAP CONTAINER */}
          <div className="flex justify-center w-full">
            <div className={`relative w-full max-w-[min(100%,75vh)] aspect-square glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-2xl ${
              feedback === 'success' ? 'border-green-500/50 scale-[1.02] shadow-[0_0_50px_rgba(34,197,94,0.1)]' : 
              feedback === 'error' ? 'border-red-500/50 animate-shake' : 'border-white/10'
            }`}>
              <img 
                src="/maps/ancient.webp" 
                alt="Ancient Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.3] contrast-[1.1]"
              />

              <div className="absolute inset-0">
                {ancientCallouts.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleSpotClick(area.id)}
                    className={`absolute transition-all ${
                      debugMode ? 'bg-accent/20 border border-accent/40' : 'hover:bg-accent/10'
                    } ${target.id === area.id && debugMode ? 'bg-accent/60 z-10 border-white' : ''}`}
                    style={{ top: `${area.top}%`, left: `${area.left}%`, width: `${area.width}%`, height: `${area.height}%`, borderRadius: '4px' }}
                  >
                    {debugMode && <span className="text-[8px] font-bold text-white opacity-50">{area.id.slice(0,3)}</span>}
                  </button>
                ))}
              </div>
              
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Sidebar (Bento Small) */}
        <div className="lg:col-span-4 h-full">
          <div className="glass-card rounded-[2rem] flex flex-col h-[85vh] sticky top-8">
            <div className="p-6 border-b border-white/5">
              <h2 className="text-sm font-semibold text-white/90">Navigation</h2>
              <p className="text-xs text-white/40">Select callout to inspect</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
              {ancientCallouts.map((area) => (
                <button
                  key={area.id}
                  onClick={() => { setTarget(area); setFeedback("neutral"); }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                    target.id === area.id ? 'bg-accent/10 text-accent border border-accent/20' : 'text-white/40 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <span className="text-[11px] font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform">
                    {area.name}
                  </span>
                  {target.id === area.id && <div className="w-1 h-1 rounded-full bg-accent shadow-[0_0_10px_rgba(94,106,210,1)]" />}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}