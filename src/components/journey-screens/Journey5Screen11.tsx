import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey5Screen11Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen11({ reducedMotion = false, onNext }: Journey5Screen11Props) {
  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-8">
            <ProgressBar currentStep={4} totalSteps={8} />
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-8 text-center">
            <div className="mb-6 flex justify-center">
              <img src="/images/J5_11_celebrate.png" alt="Celebrate" className="w-[120px] h-[120px] object-contain" />
            </div>
            <h1 className="text-[28px] font-bold text-[#00796B] mb-4 leading-tight">
              Great news! You're likely eligible for Medicaid!
            </h1>
          </div>

          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <span className="text-lg font-semibold text-slate-900">You</span>
              <span className="px-4 py-1 bg-green-50 text-[#00796B] text-sm font-medium rounded-full border border-green-200">
                Likely Eligible
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 flex items-start gap-3">
              <img src="/images/J5_diamond_icon.png" alt="Diamond" className="w-[40px] h-[40px] flex-shrink-0" />
              <div>
                <p className="text-slate-700 text-base">
                  Continue to enrollment to claim your benefits and get your medical bills covered, <span className="font-semibold">free of charge!</span>
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-8 btnpulse"
          >
            Next
          </button>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
