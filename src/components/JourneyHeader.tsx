import { Menu, MessageCircle } from 'lucide-react';

export function JourneyHeader() {
  return (
    <header className="bg-white px-5 py-2 flex items-center justify-between border-b border-slate-200 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button className="text-slate-600 hover:text-slate-900 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <img
          src="/images/abc_logo.png"
          alt="ABC Health System"
          className="h-16 w-auto object-contain"
        />
      </div>
      <button className="flex items-center gap-1.5 text-[#4169E1] hover:text-[#3557C5] transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium text-sm">Chat</span>
      </button>
    </header>
  );
}
