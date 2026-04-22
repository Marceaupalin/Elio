"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";

interface AnchorPillsProps {
  items: { id: string; label: string }[];
}

export function AnchorPills({ items }: AnchorPillsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust based on header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-[80px] z-30 bg-elio-ink/95 backdrop-blur-sm border-b border-white/10 py-4 overflow-x-auto no-scrollbar">
      <Container>
        <div className="flex items-center gap-2 md:gap-4 min-w-max">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-mono tracking-wider uppercase transition-all duration-300 border ${
                activeId === item.id
                  ? "bg-elio-coral border-elio-coral text-white shadow-lg shadow-elio-coral/20"
                  : "bg-white/5 border-white/10 text-white/70 hover:border-elio-coral hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
