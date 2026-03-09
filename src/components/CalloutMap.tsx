"use client";
import { useState } from "react";
import { ancientCallouts } from "../lib/mapData";

export default function CalloutMap() {
  const [target, setTarget] = useState(ancientCallouts[0]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"neutral" | "success" | "error">("neutral");

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
      setTimeout(nextRound, 600);
    } else {
      setScore(0);
      setFeedback("error");
      setTimeout(() => setFeedback("neutral"), 400);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full max-w-[95vw] mx-auto p-2">
      
      {/* NAGŁÓWEK - Kompaktowy, żeby nie zabierał miejsca */}
      <div className="w-full max-w-md text-center mb-4">
        <div className="flex justify-between items-end px-2 mb-1">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Ancient Training</span>
            <span className="text-[10px] font-mono text-orange-500">STREAK: {score}</span>
        </div>
        <div className="glass-card py-4 rounded-2xl border-b-4 border-orange-500/50">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Znajdź Callout:</p>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                {target.name}
            </h2>
        </div>
      </div>
      
{/* KONTENER MAPY - Zmienione parametry na większe */}
<div className={`relative w-full max-w-2xl aspect-square max-h-[85vh] bg-black rounded-4xl overflow-hidden border-4 transition-all duration-300 shadow-[0_0_60px_rgba(0,0,0,0.6)] ${
  feedback === 'success' ? 'border-green-500 scale-[1.02]' : 
  feedback === 'error' ? 'border-red-500 animate-shake' : 
  'border-white/10'
}`}>
  
  <img 
    src="/maps/ancient.webp" 
    alt="Radar" 
    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none bg-[#0a0a0a]"
  />

  {/* Reszta kodu nakładki z przyciskami pozostaje bez zmian */}
  <div className="absolute inset-0">
      {ancientCallouts.map((area) => (
      <button
          key={area.id}
          onClick={() => handleSpotClick(area.id)}
          className="absolute transition-all cursor-crosshair border border-transparent active:bg-orange-500/20 active:border-orange-500/40"
          style={{ 
              top: `${area.top}%`, 
              left: `${area.left}%`, 
              width: `${area.width}%`, 
              height: `${area.height}%`,
              borderRadius: '15%'
          }}
      />
      ))}
  </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.7)] rounded-[2.3rem]" />
      </div>
      
      {/* STOPKA */}
      <div className="mt-6 flex gap-2">
         <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
         <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">Live Radar System v1.0</p>
      </div>

    </div>
  );
}