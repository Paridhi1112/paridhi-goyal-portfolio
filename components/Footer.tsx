import { portfolio } from "@/app/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-accent tracking-tight" style={{ letterSpacing: "-0.02em" }}>
          PG
        </div>
        <p className="text-xs font-mono text-muted text-center">
          © {new Date().getFullYear()} {portfolio.name} · Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex gap-6">
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-accent transition-colors uppercase tracking-widest">
            GitHub
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-accent transition-colors uppercase tracking-widest">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
