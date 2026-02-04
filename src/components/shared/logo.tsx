import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 400, height = 100 }: LogoProps) {
  return (
    <div className={className} style={{ position: 'relative', width, height }}>
      <Image
        src="/logo.png"
        alt="J&G Exports Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
}
