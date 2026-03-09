"use client"; 
import { useState } from "react"; 
import { ancientCallouts } from "@/lib/mapData"; 
export default function CalloutMap() { 
  const [target, setTarget] = useState(ancientCallouts[0]); 
  const [score, setScore] = useState(0); 
  const [fb, setFb] = useState("neutral"); 
  const next = () => { 
    const r = ancientCallouts[Math.floor(Math.random() * ancientCallouts.length)]; 
    setTarget(r); setFb("neutral"); 
  }; 
  return ( 
    <div className="p-4 bg-gray-900 text-white min-h-screen"> 
      <h2 className="text-xl font-bold">Gdzie jest: <span className="text-yellow-400">{target.name}</span>?</h2> 
      <div className={`relative mt-4 aspect-square bg-gray-800 border-4 ${fb==='success'?'border-green-500':fb==='error'?'border-red-500':'border-gray-700'}`}> 
        <div className="absolute inset-0 bg-cover" style={{backgroundImage:"url('/maps/ancient-radar.jpg')"}} /> 
        {ancientCallouts.map(a => ( 
          <button key={a.id} onClick={()=>{if(a.id===target.id){setScore(s=>s+1);setFb("success");setTimeout(next,800);}else{setFb("error");}} }  
            className="absolute bg-white/10" style={{top:a.top+'%', left:a.left+'%', width:a.width+'%', height:a.height+'%'}} /> 
        ))} 
      </div><p className="mt-4 text-center">Score: {score}</p> 
    </div> 
  ); 
} 
