"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
        "fixed bottom-0 left-0 right-0 z-40 transform border-t border-[#1F2937] bg-[#0B0F19] p-4 shadow-lg transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Button asChild className="flex-1">
          <Link href="/#request-sample">Request Sample</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-[#374151] text-[#E5E7EB] hover:bg-[#1E293B]"
        >
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
