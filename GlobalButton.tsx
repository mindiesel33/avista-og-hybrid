import React from 'react';

type GlobalButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export const GlobalButton = ({ text, onClick, className = '', href }: GlobalButtonProps) => {
  const ButtonContent = (
    <>
      <span className="relative z-10 flex items-center gap-[20px]">
        {text}
        <i className="w-[29px] h-[28px] relative flex items-center justify-center">
            <img src="/reference_images/avista logo for button.svg" alt="" className="h-[20px] w-[20px] object-contain" />
        </i>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`global-btn group ${className}`}>
        {ButtonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`global-btn group ${className}`}>
      {ButtonContent}
    </button>
  );
};
