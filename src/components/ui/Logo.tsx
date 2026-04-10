import React from 'react';

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSlogan = false, variant = 'default' }) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#000000';
  const brandYellow = '#FDB913';

  return (
    <div className={`flex flex-col ${className}`}>
      <svg
        viewBox="0 0 400 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Semi-circle Sun - Shifted up slightly */}
        <path
          d="M80 100C80 44.7715 124.772 0 180 0C235.228 0 280 44.7715 280 100H80Z"
          fill={brandYellow}
        />
        
        {/* Muller Text - Positioned to not overlap Empreendimentos */}
        <text
          x="20"
          y="110"
          fontFamily="Inter, sans-serif"
          fontWeight="900"
          fontSize="95"
          letterSpacing="-0.03em"
        >
          <tspan fill={brandYellow}>M</tspan>
          <tspan fill={textColor}>uller</tspan>
        </text>

        {/* Empreendimentos Text - Moved down to avoid overlap */}
        <text
          x="200"
          y="150"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="24"
          letterSpacing="0.35em"
          fill={brandYellow}
          textAnchor="middle"
        >
          EMPREENDIMENTOS
        </text>
      </svg>
      
      {showSlogan && (
        <div className="mt-1 text-center">
          <span className="text-brand-yellow font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase block">
            Investimentos para a vida.
          </span>
        </div>
      )}
    </div>
  );
};
