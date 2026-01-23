import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import republicDayImage from "@/assets/republic-day-greeting.png";

const RepublicDayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown = sessionStorage.getItem("republicDayPopupShown");
    if (!hasShown) {
      // Small delay to let the page load first
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("republicDayPopupShown", "true");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl p-0 border-0 bg-transparent shadow-none">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 z-50 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        <img
          src={republicDayImage}
          alt="Happy Republic Day - UV Test Solutions"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default RepublicDayPopup;
