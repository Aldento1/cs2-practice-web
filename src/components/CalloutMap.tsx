"use client";
import { useState } from "react";
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
      <div className="bg-layers" />
      <div className="bg-grid absolute inset-0 z-[-1]" />
      <div className="bg-noise absolute inset-0 z-[-1]" />
      <div className="light-blob top-[-10%] left-[-10%]" />
      <div className="light-blob bottom-[-10%] right-[-10%] [animation-delay:2s]" />

      {/* MAIN GRID: jedna kolumna normalnie, dwie (z sidebar) tylko w debug */}
      <div
        className={`w-full max-w-7xl grid grid-cols-1 ${
          debugMode ? "lg:grid-cols-[1fr_360px]" : "lg:grid-cols-1"
        } gap-6 items-start`}
      >
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-6">
          {/* HEADER */}
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent shadow-[0_0_15px_rgba(94,106,210,0.4)] flex items-center justify-center font-black italic">
                A
              </div>
              <span className="text-xs font-mono tracking-[0.3em] text-foreground-muted uppercase">
                Ancient Tactical Radar
              </span>
            </div>

            <button
              onClick={() => setDebugMode(!debugMode)}
              className={`debug-btn-fix text-[10px] font-bold rounded-full border transition-all ${
                debugMode
                  ? "bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(94,106,210,0.2)]"
                  : "px-4 py-1.5 border-white/10 text-white/40 hover:text-white"
              }`}
            >
              DEBUG {debugMode ? "ON" : "OFF"}
            </button>
          </div>

{/* OBJECTIVE PANEL */}
<div className="glass-card rounded-4xl panel-centered relative py-10"> {/* Dodałem py-10 dla lepszego oddechu przy dużym tekście */}
  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

  <p className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-4">
    Current Objective
  </p>

  <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter bg-linear-to-b from-white via-white/95 to-white/40 bg-clip-text text-transparent italic leading-none">
    {target?.name ?? "-"}
  </h1>

  <div className="mt-8 flex items-center gap-4">
    <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs font-mono">
      Streak: <span className="text-accent font-bold">{score}</span>
    </div>
  </div>
</div>

          {/* MAP */}
          <div className="flex justify-center w-full">
            <div
              className={`map-wrap glass-card rounded-[2rem] overflow-hidden transition-all duration-500 ${
                feedback === "success"
                  ? "border-green-500/50 scale-[1.02]"
                  : feedback === "error"
                  ? "border-red-500/50 animate-shake"
                  : "border-white/10"
              }`}
            >
              <img
                src="/maps/ancient.webp"
                alt="Ancient Map"
                className="absolute inset-0 w-full h-full opacity-55 grayscale-[0.35] contrast-[1.1]"
              />

              <div className="absolute inset-0">
                {ancientCallouts.map(area => (
                  <button
                    key={area.id}
                    onClick={() => handleSpotClick(area.id)}
className={`group absolute transition-all duration-150 flex items-center justify-center cursor-pointer

${debugMode 
  ? "bg-accent/15 border border-accent/40"
  : "hover:bg-accent/20 hover:border hover:border-accent/70"
}

hover:shadow-[0_0_10px_rgba(94,106,210,0.6)]

${
  target.id === area.id && debugMode
    ? "bg-accent/60 z-10 border-white ring-2 ring-accent scale-[1.05]"
    : ""
}
`}
                    style={{
                      top: `${area.top}%`,
                      left: `${area.left}%`,
                      width: `${area.width}%`,
                      height: `${area.height}%`,
                      transform: "translate(-50%, -50%)",
                      borderRadius: "4px"
                    }}
                  >
                    {debugMode && (
                      <span className="text-[10px] font-bold text-white/90 drop-shadow">
                        {area.id.slice(0, 3)}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: renderujemy tylko w debug mode */}
        {debugMode && (
          <div className="h-full">
            <div className="glass-card rounded-4xl sidebar-enhanced flex flex-col h-[85vh] sticky top-8">
              <div className="p-5 border-b border-white/5">
                <h2 className="text-sm font-semibold text-white/90">Navigation</h2>
                <p className="text-xs text-white/40">Select callout to inspect</p>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                {ancientCallouts.map(area => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setTarget(area);
                      setFeedback("neutral");
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition-all duration-200 ${
                      target.id === area.id
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "text-white/40 hover:bg-white/5 hover:text-white border border-transparent"
                    }`}
                  >
                    <span className="text-[11px] font-bold tracking-tight uppercase">
                      {area.name}
                    </span>

                    {target.id === area.id && (
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(94,106,210,1)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}