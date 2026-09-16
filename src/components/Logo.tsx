import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'card';
  showText?: boolean;
  textColor?: 'red' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true,
  textColor = 'red' 
}) => {
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { width: 42, height: 26, viewBox: '0 0 120 70' };
      case 'card':
        return { width: 84, height: 50, viewBox: '0 0 120 70' };
      case 'lg':
        return { width: 90, height: 54, viewBox: '0 0 120 70' };
      case 'md':
      default:
        return { width: 58, height: 36, viewBox: '0 0 120 70' };
    }
  };

  const dim = getDimensions();

  return (
    <div className="flex items-center gap-2.5 select-none" id="venus-hardware-logo-container">
      {/* Oval emblem with red stroke and stylized VH letters matching the business card */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={dim.width}
          height={dim.height}
          viewBox={dim.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xs transition-transform duration-200 hover:scale-105"
        >
          {/* Oval border with red stroke */}
          <ellipse
            cx="60"
            cy="35"
            rx="56"
            ry="31"
            fill="#FFFFFF"
            stroke="#C92A2A"
            strokeWidth="3.5"
          />
          {/* Subtle inner accent ring */}
          <ellipse
            cx="60"
            cy="35"
            rx="52"
            ry="27.5"
            fill="none"
            stroke="#E0E7FF"
            strokeWidth="0.75"
          />

          {/* Letter 'V' in vibrant bold red with dynamic angled cut */}
          <path
            d="M26 21 H37.5 L46.5 45.5 L48 45.5 L58 21 H68.5 L53 52 H40 Z"
            fill="#C92A2A"
          />

          {/* Letter 'H' in deep navy blue (#1E255E) with bold crossbar */}
          <path
            d="M62 21 H72.5 V33 H84.5 V21 H95 V52 H84.5 V40 H72.5 V52 H62 Z"
            fill="#1E2B58"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-black tracking-wider uppercase leading-none font-sans ${
              size === 'lg' ? 'text-2xl sm:text-3xl' : size === 'sm' ? 'text-lg' : 'text-xl sm:text-2xl'
            } ${textColor === 'white' ? 'text-white' : 'text-[#C92A2A]'}`}
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            VENUS HARDWARE
          </span>
          <span 
            className={`text-[9px] sm:text-[10px] tracking-wide font-bold uppercase mt-0.5 ${
              textColor === 'white' ? 'text-stone-300' : 'text-[#1E2B58]'
            }`}
          >
            Fancy Interior Kitchen & Hardware
          </span>
        </div>
      )}
    </div>
  );
};
