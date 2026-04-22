import Image from "next/image";

interface MascotAnimatedProps {
  className?: string;
}

export function MascotAnimated({ className = "" }: MascotAnimatedProps) {
  return (
    <div className={`relative aspect-[3/4] w-full max-w-[500px] flex items-end justify-center ${className}`}>
      {/* Floor Shadow */}
      <div 
        className="absolute left-1/2 bottom-[3%] -translate-x-1/2 w-[44%] h-[22px] rounded-full animate-elio-shadow pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(43,27,14,.28), rgba(43,27,14,0) 70%)'
        }}
        aria-hidden="true"
      />
      
      {/* Belly Glow */}
      <div 
        className="absolute left-1/2 bottom-[14%] -translate-x-1/2 w-[28%] aspect-square bg-elio-coral/55 blur-[4px] pointer-events-none animate-elio-glow mix-blend-screen z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,170,80,.55) 0%, rgba(255,170,80,0) 65%)'
        }}
        aria-hidden="true"
      />

      {/* The Mascot */}
      <div className="relative z-10 w-full h-full animate-elio drop-shadow-[0_18px_20px_rgba(224,85,16,0.18)]">
        <Image
          src="/mascot.webp"
          alt="Elio Mascot"
          fill
          className="object-contain object-bottom"
          priority
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
