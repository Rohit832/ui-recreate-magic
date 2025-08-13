import React from 'react';
import { toast } from 'sonner';

interface BookingButtonProps {
  className?: string;
  onBook?: () => void;
}

export const BookingButton: React.FC<BookingButtonProps> = ({ 
  className = "",
  onBook 
}) => {
  const handleBooking = () => {
    if (onBook) {
      onBook();
    } else {
      toast.success("Booking request submitted! We'll contact you soon.", {
        description: "Thank you for your interest in our UX audit service.",
      });
    }
  };

  return (
    <button
      onClick={handleBooking}
      className={`bg-[rgba(179,229,140,1)] flex min-h-11 w-[171px] max-w-full items-center gap-[11px] text-xl justify-center p-[11px] rounded-[5px] hover:bg-[rgba(179,229,140,0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(179,229,140,1)] focus:ring-offset-2 ${className}`}
      aria-label="Book UX audit service now"
    >
      <span className="self-stretch my-auto">
        Book Now
      </span>
    </button>
  );
};
