import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { Smartphone } from 'lucide-react';

interface Journey5Screen16Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen16({ reducedMotion = false, onNext }: Journey5Screen16Props) {
  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8 flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="mb-6 flex justify-center">
              <img src="/images/J5_16_illustration.png" alt="All set" className="w-[120px] h-[120px] object-contain" />
            </div>
            <h1 className="text-[28px] font-bold text-slate-900 mb-4 leading-tight">
              You're all set!
            </h1>
            <p className="text-slate-600 text-base mb-2">
              You'll receive all notifications at
            </p>
            <p className="text-slate-900 font-semibold text-base">
              p.sterling.exec@globalcorp.com
            </p>
          </div>

          <button className="w-full bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 font-medium py-3.5 px-6 rounded-lg transition-colors text-base mb-4 flex items-center justify-center gap-2">
            <Smartphone size={20} />
            <span>Receive notifications via phone</span>
          </button>

          <button
            onClick={onNext}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-8 btnpulse"
          >
            Go to main dashboard
          </button>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
