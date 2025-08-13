import React from 'react';

interface ServiceHeaderProps {
  className?: string;
}

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({ className = "" }) => {
  return (
    <header className={`flex items-center gap-[22px] text-base font-bold whitespace-nowrap ${className}`}>
      <div className="bg-[rgba(179,229,140,1)] self-stretch flex min-h-4 items-center gap-2.5 justify-center w-14 my-auto pl-0.5 pr-px py-[3px]">
        <span className="self-stretch my-auto">
          MASTER
        </span>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/e8500d95acd8e57909efebe69837b792e676207d?placeholderIfAbsent=true"
        alt="Company Logo"
        className="aspect-[1.08] object-contain w-[84px] self-stretch shrink-0 my-auto"
      />
    </header>
  );
};
