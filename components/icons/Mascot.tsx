export default function Mascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20,40 C20,25 35,15 50,15 C65,15 80,25 80,40 L80,75 C80,85 70,90 50,90 C30,90 20,85 20,75 Z" opacity="0.8"/>
      <rect x="35" y="45" width="30" height="10" rx="5" fill="var(--elio-cream)" opacity="0.9"/>
      <circle cx="50" cy="30" r="4" fill="var(--elio-cream)"/>
      <path d="M10,45 L20,45" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      <path d="M80,45 L90,45" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}
