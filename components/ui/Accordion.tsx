"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-elio-cream border border-elio-border rounded-xl mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="font-serif text-xl text-elio-ink font-medium pr-8">{question}</h3>
        <ChevronDown 
          className={`text-elio-coral shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      
      <div 
        className="transition-[max-height,opacity] duration-300 ease-in-out"
        style={{ 
          maxHeight: `${height}px`,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div ref={contentRef} className="px-6 pb-6 pt-0">
          <p className="text-elio-text-muted leading-relaxed text-[17px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
