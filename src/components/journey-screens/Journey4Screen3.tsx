import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey4Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey4Screen3({ reducedMotion = false, onNext }: Journey4Screen3Props) {
  const [dobValue, setDobValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showForm) return;

    const dobTimer = setTimeout(() => {
      const target = '02/14/1998';
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= target.length) {
          setDobValue(target.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);

          const lastNameTimer = setTimeout(() => {
            const lastNameTarget = 'Rivers';
            let lastNameIndex = 0;
            const lastNameInterval = setInterval(() => {
              if (lastNameIndex <= lastNameTarget.length) {
                setLastNameValue(lastNameTarget.slice(0, lastNameIndex));
                lastNameIndex++;
              } else {
                clearInterval(lastNameInterval);
              }
            }, 100);
          }, 300);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }, 2000);

    return () => clearTimeout(dobTimer);
  }, [showForm]);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-6 pb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={showForm ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="space-y-6"
          >
            <button className="flex items-center gap-2 text-[#64748B] text-sm hover:text-[#475569] transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1E293B] mb-4">We value your privacy</h1>
              <p className="text-[#475569] text-base leading-relaxed px-2">
                Please verify your identity to continue
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    value={dobValue}
                    readOnly
                    placeholder="MM/DD/YYYY"
                    className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastNameValue}
                    readOnly
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                  />
                </div>

                <button
                  onClick={onNext}
                  className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
                >
                  Verify
                </button>

                <div className="flex items-center justify-center gap-2">
                  <img src="/images/lock.png" alt="Lock" className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Secure login</span>
                </div>
              </div>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
