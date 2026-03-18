import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey1Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey1Screen5({ reducedMotion = false, onNext }: Journey1Screen5Props) {
  const [showContent, setShowContent] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState<'monthly' | 'biweekly'>('monthly');
  const [discountedTotal, setDiscountedTotal] = useState(500);
  const [installmentAmount, setInstallmentAmount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    const totalDuration = 1000;
    const steps = 60;
    const stepTime = totalDuration / steps;

    const totalTarget = 2271.60;
    const totalStart = 500;
    const totalIncrement = (totalTarget - totalStart) / steps;

    const installmentTarget = 189.30;
    const installmentStart = 0;
    const installmentIncrement = (installmentTarget - installmentStart) / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setDiscountedTotal(totalStart + totalIncrement * currentStep);
      setInstallmentAmount(installmentStart + installmentIncrement * currentStep);

      if (currentStep >= steps) {
        clearInterval(interval);
        setDiscountedTotal(totalTarget);
        setInstallmentAmount(installmentTarget);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [showContent]);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-6 pb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="space-y-6"
          >
            {/* Back Link */}
            <button className="flex items-center gap-2 text-[#64748B] text-sm hover:text-[#475569] transition-colors">
              <ChevronLeft className="w-4 h-4" />
              View all bills
            </button>

            {/* Title */}
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-[#0F1E3D] mb-4">Create a payment plan</h1>
              <p className="text-[#475569] text-base leading-relaxed">
                Our automatic payment plans are interest-free and can be cancelled anytime until the total{' '}
                <span className="font-semibold text-[#4169E1]">${discountedTotal.toFixed(2)}</span> is paid.
              </p>
            </div>

            {/* Discounted Total Box */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[#475569] text-base">Discounted total</span>
                <span className="text-2xl font-bold text-[#4169E1]">${discountedTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-start gap-2">
                <img src="/images/piggy-bank-spot.png" alt="Discount" className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="text-sm text-[#4169E1]">Valid through August 31, 2020</p>
                  <button className="text-sm text-[#4169E1] font-medium hover:underline">
                    See details
                  </button>
                </div>
              </div>
            </div>

            {/* Installment Terms Box */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#475569] text-base mb-1">Installment terms</p>
                  <p className="text-sm text-[#64748B]">0% interest</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#4169E1]">${installmentAmount.toFixed(2)}</span>
                  <p className="text-sm text-[#64748B] mt-1">monthly</p>
                </div>
              </div>
            </div>

            {/* Customize Plan Section */}
            <div className="space-y-6 pt-4">
              <h2 className="text-xl font-bold text-[#1E293B]">1. Customize your plan</h2>

              {/* Date of First Payment */}
              <div className="space-y-2">
                <label className="block text-[#475569] text-base font-medium">
                  Date of first payment
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 text-base text-[#1E293B] bg-white border-2 border-[#E2E8F0] rounded-xl appearance-none focus:outline-none focus:border-[#4169E1] transition-colors cursor-pointer">
                    <option>Sunday, Jan 19, 2020</option>
                    <option>Friday, Jan 24, 2020</option>
                    <option>Wednesday, Jan 29, 2020</option>
                    <option>Monday, Feb 3, 2020</option>
                    <option>Saturday, Feb 8, 2020</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              {/* How Often */}
              <div className="space-y-3">
                <label className="block text-[#475569] text-base font-medium">
                  How often?
                </label>

                {/* Monthly Option */}
                <button
                  onClick={() => setSelectedFrequency('monthly')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedFrequency === 'monthly'
                      ? 'border-[#4169E1] bg-[#F0F4FF]'
                      : 'border-[#E2E8F0] bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedFrequency === 'monthly'
                        ? 'border-[#4169E1] bg-[#4169E1]'
                        : 'border-[#CBD5E1] bg-white'
                    }`}>
                      {selectedFrequency === 'monthly' && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <p className={`font-semibold text-base mb-1 ${
                        selectedFrequency === 'monthly' ? 'text-[#4169E1]' : 'text-[#1E293B]'
                      }`}>
                        Monthly
                      </p>
                      <p className="text-sm text-[#64748B]">
                        You will be billed on the same day of every month.
                      </p>
                    </div>
                  </div>
                </button>

                {/* Biweekly Option */}
                <button
                  onClick={() => setSelectedFrequency('biweekly')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedFrequency === 'biweekly'
                      ? 'border-[#4169E1] bg-[#F0F4FF]'
                      : 'border-[#E2E8F0] bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedFrequency === 'biweekly'
                        ? 'border-[#4169E1] bg-[#4169E1]'
                        : 'border-[#CBD5E1] bg-white'
                    }`}>
                      {selectedFrequency === 'biweekly' && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <p className={`font-semibold text-base mb-1 ${
                        selectedFrequency === 'biweekly' ? 'text-[#4169E1]' : 'text-[#1E293B]'
                      }`}>
                        Biweekly
                      </p>
                      <p className="text-sm text-[#64748B]">
                        You will be billed every 2 weeks.
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Choose Payment Option */}
              <div className="space-y-2">
                <label className="block text-[#475569] text-base font-medium">
                  Choose payment option
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 text-base text-[#1E293B] bg-white border-2 border-[#E2E8F0] rounded-xl appearance-none focus:outline-none focus:border-[#4169E1] transition-colors cursor-pointer">
                    <option>12 payments of $189.30</option>
                    <option>6 payments of $378.60</option>
                    <option>3 payments of $757.20</option>
                    <option>24 payments of $94.65</option>
                    <option>18 payments of $126.20</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
              >
                Continue
              </button>

              {/* Additional Steps */}
              <div className="space-y-4 pt-2">
                <h2 className="text-xl font-bold text-[#64748B]">2. Select payment method</h2>
                <h2 className="text-xl font-bold text-[#64748B]">3. Review and confirm</h2>
              </div>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
