import { motion } from 'framer-motion';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface Journey2Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey2Screen3({ reducedMotion = false, onNext }: Journey2Screen3Props) {
  const [expandedSection, setExpandedSection] = useState<number | null>(1);
  const [isDoneChecked, setIsDoneChecked] = useState(false);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-6 pb-6">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-6"
          >
            <button className="flex items-center gap-2 text-[#64748B] text-sm hover:text-[#475569] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#1E293B] mb-3">Let's get started</h1>
              <p className="text-[#475569] text-base leading-relaxed">
                It's just a few steps to get your claim covered. If you need help, <a href="#" className="text-[#4169E1] font-medium hover:underline">contact us</a>.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 1 ? null : 1)}
                  className="w-full px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#475569] text-sm font-semibold">
                      1
                    </div>
                    <span className="text-[#1E293B] font-semibold text-base">Gather insurance info</span>
                  </div>
                  {expandedSection === 1 ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </button>

                {expandedSection === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 border-t border-slate-200"
                  >
                    <div className="pt-5 space-y-4">
                      <p className="text-[#475569] text-sm leading-relaxed">
                        Double check that the Blue Star Insurance plan we have on file was active during your visit on Dec 31, 2024.
                      </p>
                      <p className="text-[#475569] text-sm leading-relaxed">
                        Make sure you have all of your insurance cards nearby. They'll likely need:
                      </p>
                      <ul className="space-y-2 pl-1">
                        <li className="flex items-start gap-2 text-[#1E293B] text-sm">
                          <span className="text-[#4169E1] mt-0.5">•</span>
                          <span>Your Member ID number for each plan (check your insurance card)</span>
                        </li>
                        <li className="flex items-start gap-2 text-[#1E293B] text-sm">
                          <span className="text-[#4169E1] mt-0.5">•</span>
                          <span>The full name and birthday of the policyholder for each plan</span>
                        </li>
                      </ul>
                      <div className="pt-4 flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="done-check"
                          checked={isDoneChecked}
                          onChange={(e) => setIsDoneChecked(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded border-slate-300 text-[#4169E1] focus:ring-[#4169E1]"
                        />
                        <label htmlFor="done-check" className="text-[#1E293B] text-sm font-medium cursor-pointer">
                          I've done this
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {isDoneChecked && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={onNext}
                  className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
                >
                  Next
                </motion.button>
              )}

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 2 ? null : 2)}
                  className="w-full px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#475569] text-sm font-semibold">
                      2
                    </div>
                    <span className="text-[#1E293B] font-semibold text-base">Contact your insurance</span>
                  </div>
                  {expandedSection === 2 ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </button>

                {expandedSection === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 border-t border-slate-200"
                  >
                    <div className="pt-5">
                      <p className="text-[#475569] text-sm">
                        We'll walk you through this part.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 3 ? null : 3)}
                  className="w-full px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#475569] text-sm font-semibold">
                      3
                    </div>
                    <span className="text-[#1E293B] font-semibold text-base">Update ABC Health</span>
                  </div>
                  {expandedSection === 3 ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-[#EEF2FF] rounded-2xl px-6 py-8 border border-transparent">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <img
                    src="/images/J2_buoy_icon.png"
                    alt="Help"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-[#1E293B] font-bold text-lg mb-2">We're here to help</h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">
                  We're available Mon-Fri, 8am-5pm ET to help with your account.
                </p>
                <button
                  onClick={onNext}
                  className="bg-white text-[#4169E1] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-slate-200 btnpulse"
                >
                  Call 1 (123) 456-7890
                </button>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Frequently asked questions</h2>
              <div className="space-y-3">
                {[
                  "Why didn't my insurance pay?",
                  "Can ABC Health fix this for me?",
                  "What happens if I don't update my insurance company?",
                  "How long do I have to do this?",
                  "Which bills will be affected?",
                  "What if I had more than one visit during this time period?",
                  "Will this apply to my whole family?",
                  "What should I do if my insurance company won't pay?"
                ].map((question, idx) => (
                  <button
                    key={idx}
                    className="w-full bg-white rounded-xl px-5 py-4 flex items-center justify-between text-left shadow-sm border border-slate-200 hover:border-[#4169E1] transition-colors"
                  >
                    <span className="text-[#1E293B] text-sm font-medium">{question}</span>
                    <ChevronDown className="w-5 h-5 text-[#64748B] flex-shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
