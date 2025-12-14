"use client";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I'd like to inquire about your UPVC products."
    );
    window.open(`https://wa.me/919913044830?text=${message}`, "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+919913044830";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <Button
        variant="default"
        size="icon"
        className="w-14 h-14 rounded-full shadow-xl animate-float"
        onClick={handlePhone}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </Button>

      {/* WhatsApp Button */}
      <Button
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 rounded-full shadow-xl animate-float"
        style={{ animationDelay: "0.5s" }}
        onClick={handleWhatsApp}
        aria-label="WhatsApp inquiry"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingButtons;
