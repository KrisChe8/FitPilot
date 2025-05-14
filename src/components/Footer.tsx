import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-g)] bg-[var(--background)] backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-[var(--primary)] rounded">
                <ZapIcon className="w-4 h-4 " />
              </div>
              <span className="text-xl font-bold font-mono">
                code<span className="text-[var(--primary)]">fitPilot</span>.ai
              </span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)]">
              © {new Date().getFullYear()} fitPilot.ai - All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-muted-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Help
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-[var(--border-g)] rounded-md bg-[var(--background)]">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
