import Link from "next/link";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#analyse", label: "Analyze" },
  { href: "#word2vec", label: "Word2Vec" },
  { href: "#modele", label: "Model" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-white">
          Sentiment<span className="text-violet-400">AI</span>
        </Link>

        <ul className="hidden gap-8 text-sm text-white/70 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#analyse"
          className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
        >
          Try it
        </a>
      </nav>
    </header>
  );
}
