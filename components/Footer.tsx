"use client";

import { siteConfig } from "@/app/data/index";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-12 text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg border border-[#00FFA3]/30 bg-[#00FFA3]/10 flex items-center justify-center text-[#00FFA3] font-mono font-bold text-sm">
            PG
          </span>
          <div>
            <div className="font-display font-bold text-sm text-[var(--color-text)]">
              Paridhi Goyal
            </div>
            <div className="text-xs font-mono text-[var(--color-muted)]">
              Software Development Engineer · SDE-1
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-subtle)]">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FFA3] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <span>•</span>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FFA3] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
          <span>•</span>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FFA3] transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[var(--color-muted)]">
            © {new Date().getFullYear()} Paridhi Goyal
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
