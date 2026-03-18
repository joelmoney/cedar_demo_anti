import { motion } from 'framer-motion';
import { ChevronLeft, Archive, Trash2, Mail, MoreVertical, Reply, MoreHorizontal, Calendar, ArrowLeftRight } from 'lucide-react';

interface Journey2Screen2Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey2Screen2({ reducedMotion = false, onNext }: Journey2Screen2Props) {
  return (
    <div className="h-full w-full bg-[#E5EBF4] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <div className="bg-white">
          <div className="px-4 py-3 flex items-center justify-between">
            <button className="text-[#1E293B]">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <button className="text-[#64748B]">
                <Archive className="w-5 h-5" />
              </button>
              <button className="text-[#64748B]">
                <Trash2 className="w-5 h-5" />
              </button>
              <button className="text-[#64748B]">
                <Mail className="w-5 h-5" />
              </button>
              <button className="text-[#64748B]">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="px-5 py-3">
            <h1 className="text-[#1E293B] font-semibold text-lg leading-tight mb-3">
              Action needed: Contact Your Insurance
            </h1>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4169E1] flex items-center justify-center text-white font-semibold text-base flex-shrink-0">
                  A
                </div>
                <div>
                  <div className="text-[#1E293B] font-semibold text-sm">ABC Health</div>
                  <div className="text-[#64748B] text-xs flex items-center gap-1">
                    to me <ChevronLeft className="w-3 h-3 rotate-[-90deg]" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-[#64748B]">
                  <Reply className="w-5 h-5" />
                </button>
                <button className="text-[#64748B]">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 px-4 py-4">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/images/abc_logo.png"
                  alt="ABC Health System"
                  className="h-12"
                />
              </div>

              <h2 className="text-[#1E3A5F] font-bold text-2xl leading-tight mb-4">
                Your visit on December 31st was not covered — we're here to help.
              </h2>

              <div className="space-y-4 text-[#1E293B] text-[15px] leading-relaxed mb-6">
                <p>
                  We billed <span className="font-semibold">Blue Star Insurance</span> for your visit on <span className="font-semibold">Dec 31, 2024</span>. But, they need more information from you before they will pay your claim.
                </p>

                <p>
                  We'll walk you through how to resolve this. It just takes a few steps.
                </p>
              </div>

              <button
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse mb-3"
              >
                Get started
              </button>

              <p className="text-[#64748B] text-xs text-center leading-relaxed">
                Please act within 14 days to avoid becoming responsible for the full bill
              </p>
            </div>

            <div className="px-6 py-6 border-t border-slate-200">
              <h3 className="text-[#1E293B] font-semibold text-base mb-4 text-center">
                Common reasons why insurers need more information
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/J2_shuffle_icon.png"
                      alt="Shuffle"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    They think a different insurance policy may be responsible for this bill, like auto insurance or Medicare.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/J2_calendar.png"
                      alt="Calendar"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    They may do a yearly check to see if you have additional coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 bg-[#F8FAFC] text-center">
              <img
                src="/images/abc_logo.png"
                alt="ABC Health System"
                className="h-10 mx-auto mb-3"
              />
              <p className="text-[#475569] text-sm mb-1">
                Thank you for letting us be a part of your care,
              </p>
              <p className="text-[#1E293B] font-semibold text-sm mb-4">
                The ABC Health team
              </p>

              <div className="flex items-center justify-center gap-2 text-[#4169E1] text-xs mb-4">
                <a href="#" className="hover:underline">About</a>
                <span className="text-[#CBD5E1]">·</span>
                <a href="#" className="hover:underline">Privacy</a>
                <span className="text-[#CBD5E1]">·</span>
                <a href="#" className="hover:underline">Terms</a>
              </div>

              <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">
                Your account information is included above to help you recognize this as an email from <span className="text-[#4169E1] font-medium">ABC Health</span>. We are located at 123 ABC St, New York, NY, 00000.
              </p>

              <p className="text-[#94A3B8] text-xs">
                To unsubscribe click <a href="#" className="text-[#4169E1] hover:underline">here</a>
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
