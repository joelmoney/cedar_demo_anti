export function JourneyFooter() {
  return (
    <footer className="px-5 pb-6 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <img
          src="/images/abc_logo.png"
          alt="ABC Health System"
          className="h-16 w-auto object-contain"
        />
        <div className="flex gap-4 text-[#64748B] text-xs">
          <button className="hover:text-[#1E293B] transition-colors">About</button>
          <button className="hover:text-[#1E293B] transition-colors">Terms</button>
          <button className="hover:text-[#1E293B] transition-colors">Privacy</button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/images/poweredby.png"
          alt="Powered by Cedar"
          className="h-5 w-auto object-contain"
        />
      </div>
    </footer>
  );
}
