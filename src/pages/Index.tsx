import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { toast } from 'sonner';

const Index = () => {
  const handleBooking = () => {
    toast.success("Booking request submitted successfully!", {
      description: "Our team will contact you within 24 hours to discuss your UX audit requirements.",
      duration: 5000,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <section className="flex items-center gap-[21px] text-black flex-wrap justify-center">
          <ServiceCard onBook={handleBooking} />
          
          <aside className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/1a9f888a0af0f024eb88cc288046c254d210bd82?placeholderIfAbsent=true"
              alt="UX audit process visualization showing user interface analysis and optimization"
              className="aspect-[0.94] object-contain w-[546px] self-stretch min-w-60 my-auto max-md:max-w-full"
            />
          </aside>
        </section>
        
        <section className="mt-16 text-center max-w-4xl mx-auto" aria-labelledby="about-section">
          <h2 id="about-section" className="text-2xl font-bold mb-4 text-gray-800">
            Why Choose Our UX Audit Service?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our comprehensive UX audit service helps founders identify and eliminate conversion bottlenecks 
            in their digital products. With our expert analysis and actionable recommendations, you'll gain 
            the clarity needed to make informed design decisions that drive business growth.
          </p>
        </section>
        
        <section className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" aria-labelledby="features-section">
          <h2 id="features-section" className="sr-only">Service Features</h2>
          
          <article className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Complete Analysis</h3>
            <p className="text-gray-600">
              Thorough examination of your user interface, user experience, and conversion funnel 
              to identify areas for improvement.
            </p>
          </article>
          
          <article className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Turnaround</h3>
            <p className="text-gray-600">
              Get your detailed UX audit report within 3 days, allowing you to implement 
              improvements quickly and efficiently.
            </p>
          </article>
          
          <article className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Actionable Insights</h3>
            <p className="text-gray-600">
              Receive specific, prioritized recommendations that you can implement immediately 
              to improve user experience and conversions.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Index;
