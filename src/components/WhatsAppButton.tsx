import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919643295120";
const DEFAULT_MESSAGE = "Hi, I'm interested in your test & measuring instruments. Can you help me?";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#1ebe57] transition-all duration-200 hover:scale-105 hover:shadow-xl group"
    >
      <MessageCircle className="h-6 w-6 fill-white stroke-white" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
