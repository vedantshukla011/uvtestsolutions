import { useState, useEffect } from "react";
import { X } from "lucide-react";
import holiBanner from "@/assets/festival-greeting.jpg";

const HOLI_POPUP_KEY = "uvts_holi_greeting_2026";

const HoliGreetingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(HOLI_POPUP_KEY);
    if (!seen) {
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(HOLI_POPUP_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Happy Holi Greeting"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-2xl animate-in zoom-in-95 fade-in duration-300">
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-20 p-2 rounded-full bg-background border border-border shadow-lg hover:bg-accent transition-colors"
          aria-label="Close greeting"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <img
          src={holiBanner}
          alt="Wishing You A Very Happy Holi from UV Test Solutions"
          className="w-full rounded-xl shadow-2xl cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default HoliGreetingPopup;
