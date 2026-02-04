import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function HeroLogo({ className, width = 1606, height = 400 }: LogoProps) {
  return (
    <Image
      src="/JGExportsLogo_white_certificados.png"
      alt="J&G Exports Logo"
      width={width}
      height={height}
      className={className}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
      }}
      priority
    />
  );
} 
