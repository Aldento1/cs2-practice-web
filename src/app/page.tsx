import Link from 'next/link'; 
export default function Home() { 
  return ( 
    <main className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center gap-4"> 
      <h1 className="text-4xl font-black text-orange-500">CS2 HUB</h1> 
      <Link href="/callouts" className="p-6 bg-gray-800 rounded-xl w-64 text-center border border-gray-700 hover:border-orange-500">Callout Trainer</Link> 
      <Link href="/autoexec" className="p-6 bg-gray-800 rounded-xl w-64 text-center border border-gray-700 hover:border-orange-500">Autoexec Creator</Link> 
    </main> 
  ); 
} 
