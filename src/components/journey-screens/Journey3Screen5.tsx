import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { WaveAnimation } from '../WaveAnimation';

interface Journey3Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen5({ reducedMotion = false, onNext }: Journey3Screen5Props) {
  return (
    <div className="h-full w-full flex flex-col bg-[#F8F9FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-5 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-4">
              <p className="text-sm font-medium text-slate-500 mb-2">Journey 3</p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Placeholder Screen 5
              </h2>
            </div>
            <div className="mb-6">
              <WaveAnimation className="w-full h-auto rounded-lg" />
            </div>
            <p className="text-slate-600 mb-6">
              Content will be added here.
            </p>
            <button
              onClick={onNext}
              className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3 px-6 rounded-lg transition-colors btnpulse"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <JourneyFooter />
    </div>
  );
}
