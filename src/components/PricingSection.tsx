import React from 'react';

interface PricingSectionProps {
  className?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  return (
    <section className={`w-[213px] max-w-full font-normal ${className}`} aria-labelledby="pricing-heading">
      <h3 id="pricing-heading" className="sr-only">Pricing Information</h3>
      <div className="flex w-full flex-col items-stretch whitespace-nowrap">
        <div className="flex w-full gap-3.5">
          <span className="text-[32px]" aria-label="Current price in Indian Rupees">
            ₹80,750
          </span>
          <span className="text-base line-through" aria-label="Original price in Indian Rupees">
            ₹102,000
          </span>
        </div>
        <div className="flex items-center gap-[15px] mt-[19px]">
          <span className="text-[32px] self-stretch my-auto" aria-label="Current price in US Dollars">
            $950
          </span>
          <span className="text-base line-through self-stretch my-auto" aria-label="Original price in US Dollars">
            $1,200
          </span>
        </div>
      </div>
    </section>
  );
};
