export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-white/50 sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Djahid Aoudia — Sentiment analysis project.</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Djahid2?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a href="mailto:aoudiadjahid8@gmail.com" className="transition hover:text-white">
            aoudiadjahid8@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
