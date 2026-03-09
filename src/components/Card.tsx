import Link from "next/link";

type Props = {
  href: string;
  title: string;
  desc: string;
};

export default function Card({ href, title, desc }: Props) {
  return (
    <Link
      href={href}
      className="group p-6 bg-gray-900 rounded-3xl border border-gray-800 hover:border-yellow-500 transition-all"
    >
      <h2 className="text-xl font-bold group-hover:text-yellow-400">
        {title}
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        {desc}
      </p>
    </Link>
  );
}