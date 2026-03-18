import { motion } from 'framer-motion';
import { ChevronLeft, Archive, Trash2, Mail, MoreVertical, Reply, MoreHorizontal, MessageCircle } from 'lucide-react';

interface Journey6Screen2Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey6Screen2({ reducedMotion = false, onNext }: Journey6Screen2Props) {
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
              You have a new bill
            </h1>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4169E1] flex items-center justify-center text-white font-semibold text-base flex-shrink-0">
                  A
                </div>
                <div>
                  <div className="text-[#1E293B] font-semibold text-sm">ABC Health System</div>
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

              <div className="text-[#64748B] text-xs mb-4 space-y-0.5">
                <div><span className="font-semibold">Bill ID:</span> 1447 - 2366 - 1713</div>
                <div><span className="font-semibold">Acct. number:</span> XXXXXXXX7365</div>
                <div><span className="font-semibold">Next bill due:</span> Jan 5, 2026</div>
              </div>

              <div className="mb-6">
                <p className="text-[#1E293B] text-sm mb-4">Hi Chris,</p>
              </div>

              <h2 className="text-[#1E3A5F] font-bold text-2xl leading-tight mb-4">
                Pay instantly with your saved card
              </h2>

              <div className="space-y-4 text-[#1E293B] text-[15px] leading-relaxed mb-6">
                <p>
                  You have a <span className="font-bold">$80.00</span> balance from your visit to ABC Healthcare at ABC Health Northern California on Nov 21, 2025. <a href="#" className="text-[#4169E1] hover:underline">View bill</a>
                </p>
              </div>

              <button
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm mb-3 btnpulse"
              >
                Pay with Visa •••• 1234
              </button>

              <button className="w-full text-[#4169E1] font-semibold text-base py-3 hover:underline">
                Pay a different way
              </button>

              <p className="text-[#64748B] text-xs text-center leading-relaxed mt-4">
                We support credit/debit card, ACH, Apple Pay/Google Pay, and HSA/FSA.
              </p>
            </div>

            <div className="px-6 py-6 bg-[#F8FAFC] border-t border-slate-200">
              <div className="flex items-start gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[#1E293B] font-semibold text-base mb-2">
                    Need help with your bill?
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-3">
                    We're available Mon-Fri, 8am-8pm MDT to answer any questions you have about your account.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-[#1E293B] font-semibold text-sm mb-1">Give us a call</div>
                      <a href="tel:1234567890" className="text-[#4169E1] text-sm hover:underline">(123) 456-7890</a>
                    </div>
                    <div>
                      <div className="text-[#1E293B] font-semibold text-sm mb-1">Chat with us online</div>
                      <a href="#" className="text-[#4169E1] text-sm hover:underline">Start a conversation</a>
                    </div>
                  </div>
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
