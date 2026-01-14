import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import festivalImage from "@/assets/festival-greeting.jpg";

const FestivalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("festivalPopupShown");
    if (!popupShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("festivalPopupShown", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-0 border-0 bg-transparent shadow-none">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        <img
          src={festivalImage}
          alt="UV Test Solutions wishes you a Happy Makar Sankranti"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default FestivalPopup;
