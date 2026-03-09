@echo off
setlocal enabledelayedexpansion

echo [1/5] Tworzenie struktury folderów...
mkdir public\maps 2>nul
mkdir public\videos 2>nul
mkdir src\app\callouts 2>nul
mkdir src\app\autoexec 2>nul
mkdir src\components 2>nul
mkdir src\lib 2>nul

echo [2/5] Generowanie danych map (lib/mapData.ts)...
(
echo export const ancientCallouts = [
echo   { id: "aldento", name: "Aldento (T-Spawn/Ruins)", top: 80, left: 45, width: 15, height: 10 },
echo   { id: "cave", name: "Cave (Donut)", top: 40, left: 25, width: 10, height: 10 },
echo   { id: "mid", name: "Mid Doors", top: 45, left: 50, width: 12, height: 8 },
echo   { id: "b_site", name: "B Site", top: 30, left: 15, width: 15, height: 15 },
echo ];
) > src\lib\mapData.ts

echo [3/5] Generowanie komponentu CalloutMap...
(
echo "use client";
echo import { useState } from "react";
echo import { ancientCallouts } from "@/lib/mapData";
echo.
echo export default function CalloutMap^(^) {
echo   const [target, setTarget] = useState^(ancientCallouts[0]^);
echo   const [score, setScore] = useState^(0^);
echo   const [feedback, setFeedback] = useState^("neutral"^);
echo.
echo   const pickNewTarget = ^(^) =^> {
echo     const random = ancientCallouts[Math.floor^(Math.random^(^) * ancientCallouts.length^)];
echo     setTarget^(random^);
echo     setFeedback^("neutral"^);
echo   };
echo.
echo   const handleAreaClick = ^(clickedId: string^) =^> {
echo     if ^(clickedId === target.id^) {
echo       setScore^((s^) =^> s + 1^);
echo       setFeedback^("success"^);
echo       setTimeout^(pickNewTarget, 800^);
echo     } else {
echo       setFeedback^("error"^);
echo     }
echo   };
echo.
echo   return ^(
echo     ^<div className="flex flex-col items-center w-full max-w-md mx-auto p-4 bg-gray-900 text-white"^>
echo       ^<h2 className="text-xl font-bold mb-2"^>Gdzie jest: ^<span className="text-yellow-400 text-2xl"^>{target.name}^</span^>?^</h2^>
echo       ^<p className="mb-4 text-gray-400"^>Wynik: {score}^</p^>
echo       ^<div className={`relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden border-4 transition-colors ${feedback === 'success' ? 'border-green-500' : feedback === 'error' ? 'border-red-500' : 'border-gray-700'}`}^>
echo         ^<div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('/maps/ancient-radar.jpg')" }} /^>
echo         {ancientCallouts.map^((area^) =^> ^(
echo           ^<button key={area.id} onClick={^(^) =^> handleAreaClick^(area.id^)} className="absolute bg-white/5 hover:bg-white/20 transition-colors cursor-pointer" style={{ top: `${area.top}%%`, left: `${area.left}%%`, width: `${area.width}%%`, height: `${area.height}%%` }} /^>
echo         ^)^)}
echo       ^</div^>
echo     ^</div^>
echo   ^);
echo }
) > src\components\CalloutMap.tsx

echo [4/5] Generowanie komponentu AutoexecBuilder...
(
echo "use client";
echo import { useState } from "react";
echo.
echo const options = [
echo   { id: "fps", label: "Odblokuj FPS (fps_max 0)", command: 'fps_max "0"' },
echo   { id: "music", label: "Wylacz muzyke", command: 'snd_menumusic_volume "0"; snd_roundend_volume "0"' },
echo   { id: "telemetry", label: "Pokaz FPS i PING", command: 'cq_netgraph "1"' },
echo ];
echo.
echo export default function AutoexecBuilder^(^) {
echo   const [selected, setSelected] = useState^({ fps: true }^);
echo   const [copied, setCopied] = useState^(false^);
echo.
echo   const generateConfig = ^(^) =^> {
echo     let lines = ["// CS2 Config"];
echo     options.forEach^(opt =^> { if ^(selected[opt.id as keyof typeof selected]^) lines.push^(opt.command^); }^);
echo     return lines.join^("\n"^);
echo   };
echo.
echo   return ^(
echo     ^<div className="p-4 bg-gray-900 text-white max-w-md mx-auto"^>
echo       ^<h2 className="text-2xl font-bold mb-4 text-orange-500"^>Autoexec Creator^</h2^>
echo       ^<div className="space-y-2 mb-6"^>
echo         {options.map^(opt =^> ^(
echo           ^<label key={opt.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700"^>
echo             ^<span^>{opt.label}^</span^>
echo             ^<input type="checkbox" checked={!!selected[opt.id as keyof typeof selected]} onChange={^(^) =^> setSelected^(prev =^> ^({...prev, [opt.id]: !prev[opt.id as keyof typeof selected]}^)^)} /^>
echo           ^</label^>
echo         ^)^)}
echo       ^</div^>
echo       ^<pre className="bg-black p-4 rounded text-xs text-green-400 mb-4"^>{generateConfig^(^)}^</pre^>
echo       ^<button onClick={^(^) =^> { navigator.clipboard.writeText^(generateConfig^(^)^); setCopied^(true^); }} className="w-full py-3 bg-orange-500 rounded-xl font-bold"^>
echo         {copied ? "SKOPIOWANO!" : "SKOPIUJ CONFIG"}
echo       ^</button^>
echo     ^</div^>
echo   ^);
echo }
) > src\components\AutoexecBuilder.tsx

echo [5/5] Tworzenie stron (app/page.tsx)...
(
echo import Link from 'next/link';
echo.
echo export default function Home^(^) {
echo   return ^(
echo     ^<main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center space-y-4"^>
echo       ^<h1 className="text-4xl font-black text-orange-500 mb-8"^>CS2 TRAINER^</h1^>
echo       ^<Link href="/callouts" className="w-full max-w-xs p-6 bg-gray-800 rounded-2xl text-center border border-gray-700 hover:border-orange-500 transition-all"^>
echo         ^<h2 className="text-xl font-bold"^>Nauka Calloutow^</h2^>
echo         ^<p className="text-gray-400 text-sm"^>Ancient, Mirage, Anubis...^</p^>
echo       ^</Link^>
echo       ^<Link href="/autoexec" className="w-full max-w-xs p-6 bg-gray-800 rounded-2xl text-center border border-gray-700 hover:border-orange-500 transition-all"^>
echo         ^<h2 className="text-xl font-bold"^>Generator Autoexec^</h2^>
echo         ^<p className="text-gray-400 text-sm"^>Zoptymalizuj swoja gre^</p^>
echo       ^</Link^>
echo     ^</main^>
echo   ^);
echo }
) > src\app\page.tsx

:: Tworzenie prostych wrapperów stron
(echo import CalloutMap from '@/components/CalloutMap'; export default function Page^(^) { return ^<CalloutMap /^>; }) > src\app\callouts\page.tsx
(echo import AutoexecBuilder from '@/components/AutoexecBuilder'; export default function Page^(^) { return ^<AutoexecBuilder /^>; }) > src\app\autoexec\page.tsx

echo.
echo DONE! Teraz wrzuc plik 'ancient-radar.jpg' do folderu 'public/maps/'.
echo Odpal: npm run dev
pause