"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { Container } from "@/src/components/layout/container";

const navLinks = [
  { href: "/solutions", label: "What We Build" },
  { href: "/catalog", label: "How It Works" },
  { href: "/quality", label: "Quality" },
  { href: "/contributors", label: "Contributors" },
  { href: "/languages", label: "Languages" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  isActive,
  onClick,
  className,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative rounded-sm px-0.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200",
        "hover:text-white hover:after:scale-x-100",
        isActive ? "text-white after:scale-x-100" : "text-[#8FA0B5]",
        className
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const normalizedPath = useMemo(() => pathname ?? "/", [pathname]);

  function isLinkActive(href: string) {
    if (href.startsWith("/#")) return normalizedPath === "/";
    return normalizedPath === href;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-[#09111B]/92 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-[#09111B]/68 backdrop-blur-xl"
      )}
    >
      <nav>
        <Container className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex flex-col gap-1">
            <span className="text-lg font-semibold tracking-tight text-white">
              Qali
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8FA0B5]">
              Local truth for AI systems
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
              />
            ))}
            <Button asChild>
              <Link href="/#pilot">Get Pilot</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button asChild size="sm">
              <Link href="/#pilot">Get Pilot</Link>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="text-white hover:text-white/80"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 border-white/10 bg-[#0D1825]"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      isActive={isLinkActive(link.href)}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-base"
                    />
                  ))}
                  <Button asChild className="mt-4 w-full">
                    <Link
                      href="/#pilot"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get Pilot
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </nav>
    </header>
  );
}
