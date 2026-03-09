"use client";

import dynamic from "next/dynamic";

const AutoexecBuilder = dynamic(
  () => import("../../components/AutoexecBuilder"),
  { ssr: false }
);

export default function Page() {
  return (
    <div className="min-h-screen bg-black py-10">
      <AutoexecBuilder />
    </div>
  );
}