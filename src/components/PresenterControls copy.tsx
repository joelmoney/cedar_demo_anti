import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface PresenterControlsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onJumpTo: (step: number) => void;
  onReset: () => void;
}

export function PresenterControls({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onJumpTo,
  onReset,
}: PresenterControlsProps) {
  const [visible] = useState(true);

  const handleInteraction = (action: () => void) => {
    action();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 bg-slate-900 text-white rounded-xl shadow-2xl p-4 flex items-center gap-3 z-50"
        >
          <button
            onClick={() => handleInteraction(onPrevious)}
            disabled={currentStep === 0}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <select
            value={currentStep}
            onChange={(e) => handleInteraction(() => onJumpTo(Number(e.target.value)))}
            className="bg-slate-800 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer"
          >
            {Array.from({ length: totalSteps }, (_, i) => (
              <option key={i} value={i}>
                Step {i + 1}
              </option>
            ))}
          </select>

          <button
            onClick={() => handleInteraction(onNext)}
            disabled={currentStep === totalSteps - 1}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-slate-700 mx-1"></div>

          <button
            onClick={() => handleInteraction(onReset)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            title="Reset (R)"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <div className="ml-2 text-xs text-slate-400">
            Presenter Mode
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
