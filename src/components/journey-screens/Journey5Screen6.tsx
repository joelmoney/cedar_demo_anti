import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { Download, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Journey5Screen6Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

function CountUpAnimation({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>${count.toLocaleString('en-US')}.00</>;
}

export function Journey5Screen6({ reducedMotion = false, onNext }: Journey5Screen6Props) {
  return (
    <div className="h-full w-full flex flex-col bg-[#F5F7FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 py-8 pb-6">
          <h1 className="text-3xl font-bold text-[#1E293B] text-center mb-3">
            Review estimate
          </h1>
          <p className="text-center text-[#64748B] text-sm mb-8">
            You may also get another bill later for additional services or tests.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
            <div className="w-full">
              <img
                src="/images/J5_6_illustration.png"
                alt="Estimate illustration"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-base text-[#475569] mb-2">Your estimate is</p>
                <p className="text-5xl font-bold text-[#1E293B] mb-4">
                  <CountUpAnimation target={6600} />
                </p>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  We know medical expenses are hard on uninsured patients which is why we're offering you a discount to help you save{' '}
                  <span className="font-bold text-[#1E293B]">$5,400.00</span>{' '}
                  <span className="text-[#64748B]">(45%)</span>
                </p>
              </div>

              <button
                className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold text-base py-4 rounded-xl transition-colors shadow-sm mb-3"
              >
                Continue
              </button>

              <button onClick={onNext} className="w-full bg-white hover:bg-slate-50 text-[#4169E1] font-medium text-base py-4 rounded-xl transition-colors border-2 border-[#4169E1] btnpulse">
                Need help paying your estimate?
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
            <h2 className="text-2xl font-bold text-[#1E293B] text-center mb-2">
              Estimate breakdown
            </h2>
            <button className="text-[#4169E1] text-sm font-medium hover:text-[#3557C5] transition-colors mx-auto block mb-6">
              Learn more about estimates
            </button>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start">
                <p className="text-sm text-[#475569]">24 Hour Video EEG Monitoring</p>
                <p className="text-sm font-semibold text-[#1E293B]">$12,000.00</p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-[#1E293B]">Total billed</p>
                  <p className="text-sm font-semibold text-[#1E293B]">$12,000.00</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-[#1E293B]">Discount (-45%)</p>
                  <p className="text-sm font-semibold text-[#1E293B]">-$5,400.00</p>
                </div>
                <div className="border-t border-slate-300 pt-2 mt-2 flex justify-between items-center">
                  <p className="text-base font-bold text-[#1E293B]">Total expected cost</p>
                  <p className="text-base font-bold text-[#1E293B]">$6,600.00</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-white hover:bg-slate-50 text-[#4169E1] font-medium text-base py-3 rounded-xl transition-colors border border-slate-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download detailed estimate
            </button>
          </div>

          <div className="bg-[#EFF6FF] rounded-xl p-4 border border-[#DBEAFE] flex gap-3 mb-6">
            <AlertCircle className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#475569]">
              Unable to pay your bills?{' '}
              <button className="text-[#4169E1] font-medium hover:text-[#3557C5] transition-colors">
                See options.
              </button>
            </p>
          </div>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
