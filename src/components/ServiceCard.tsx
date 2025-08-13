import React from 'react';
import { ServiceHeader } from './ServiceHeader';
import { PricingSection } from './PricingSection';
import { BookingButton } from './BookingButton';

interface ServiceCardProps {
  className?: string;
  onBook?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  className = "",
  onBook 
}) => {
  return (
    <article className={`self-stretch min-w-60 w-[373px] my-auto ${className}`}>
      <div className="flex min-h-[581px] w-full flex-col items-stretch">
        <ServiceHeader />
        
        <div className="flex w-full gap-[33px]">
          <div className="border w-px shrink-0 h-[473px] border-[rgba(239,235,233,1)] border-solid" role="separator" />
          
          <div className="min-w-60 w-[339px]">
            <div className="flex w-full flex-col items-stretch">
              <header className="flex w-full flex-col items-stretch">
                <div className="flex items-center gap-2.5 text-[31px] font-normal justify-center p-2.5">
                  <h1 className="self-stretch my-auto">
                    UX Audit
                  </h1>
                </div>
                <div className="flex w-full items-center gap-2.5 text-base font-bold justify-center p-2.5">
                  <h2 className="self-stretch my-auto">
                    Founders who want clarity, not confusion
                  </h2>
                </div>
              </header>
              
              <section className="flex items-center gap-2.5 text-base font-bold justify-center mt-[33px] pl-[15px]" aria-labelledby="service-features">
                <div className="self-stretch my-auto">
                  <h3 id="service-features" className="sr-only">Service Features</h3>
                  <ul className="list-none space-y-1">
                    <li>✓ Complete UX audit</li>
                    <li>✓ Conversion bottleneck analysis</li>
                    <li>✓ 3-day turnaround</li>
                  </ul>
                  <p className="mt-4">
                    This tier delivers clarity
                  </p>
                </div>
              </section>
            </div>
            
            <footer className="mt-[119px] max-md:mt-10">
              <PricingSection />
              <BookingButton 
                className="mt-[21px]"
                onBook={onBook}
              />
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
};
