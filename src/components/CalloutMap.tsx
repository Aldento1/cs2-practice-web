"use client";
import { useState } from "react";
import { ancientCallouts } from "../lib/mapData";

export default function CalloutMap() {
  const [target, setTarget] = useState(ancientCallouts[0]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"neutral" | "success" | "error">("neutral");

  const nextRound = () => {
    const random = ancientCallouts[Math.floor(Math.random() * ancientCallouts.length)];
    setTarget(random);
    setFeedback("neutral");
  };

  const handleSpotClick = (id: string) => {
    if (id === target.id) {
      setScore(s => s + 1);
      setFeedback("success");
      setTimeout(nextRound, 800);
    } else {
      setFeedback("error");
      setTimeout(() => setFeedback("neutral"), 500);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 text-white">
      <div className="text-center mb-6">
        <p className="text-gray-400 uppercase text-xs tracking-widest">Znajdź na mapie:</p>
        <h2 className="text-3xl font-black text-yellow-400 uppercase italic">{target.name}</h2>
        <p className="mt-2 text-sm font-mono">Streak: {score}</p>
      </div>
      
      <div className={`relative w-full aspect-square bg-gray-800 rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
        feedback === 'success' ? 'border-green-500 scale-105' : feedback === 'error' ? 'border-red-500 shake' : 'border-gray-700'
      }`}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{ backgroundImage: "url('/maps/ancient-radar.jpg')" }} 
        />
        
        {ancientCallouts.map((area) => (
          <button
            key={area.id}
            onClick={() => handleSpotClick(area.id)}
            className="absolute bg-white/5 active:bg-yellow-400/40 transition-colors"
            style={{ top: `${area.top}%`, left: `${area.left}%`, width: `${area.width}%`, height: `${area.height}%` }}
          />
        ))}
      </div>
      
      <p className="mt-6 text-gray-500 text-xs text-center px-4">
        Kliknij w odpowiedni obszar na radarze Ancient.
      </p>
    </div>
  );
}