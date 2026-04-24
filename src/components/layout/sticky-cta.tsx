"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600 && window.innerWidth < 768);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 transform border-t border-white/10 bg-[#09111B]/96 p-4 shadow-[0_-24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Button asChild className="flex-1">
          <Link href="/#pilot">Get Pilot</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-white/10 text-[#E5EDF7] hover:bg-white/[0.06]"
        >
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
