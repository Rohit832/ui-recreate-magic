import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { toast } from 'sonner';
const Index = () => {
  const handleBooking = () => {
    toast.success("Booking request submitted successfully!", {
      description: "Our team will contact you within 24 hours to discuss your UX audit requirements.",
      duration: 5000
    });
  };
  return <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <section className="flex items-center gap-[21px] text-black flex-wrap justify-center">
          <ServiceCard onBook={handleBooking} />
          
          <aside className="flex-shrink-0">
            <img src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/1a9f888a0af0f024eb88cc288046c254d210bd82?placeholderIfAbsent=true" alt="UX audit process visualization showing user interface analysis and optimization" className="aspect-[0.94] object-contain w-[546px] self-stretch min-w-60 my-auto max-md:max-w-full" />
          </aside>
        </section>
        
        <section className="mt-16 text-center max-w-4xl mx-auto" aria-labelledby="about-section">
          
          
        </section>
        
        
      </div>
    </main>;
};
export default Index;