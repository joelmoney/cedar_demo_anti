import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Step } from '../config/steps';

interface LeftPanelProps {
  step: Step;
  reducedMotion: boolean;
  showLookDeeper?: boolean;
  onLookDeeperClick?: () => void;
  journeyNumber?: number;
  journeyScore?: number;
  showNavigation?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  currentStep?: number;
  totalSteps?: number;
  showSubmitButton?: boolean;
  submitButtonLabel?: string;
  onSubmit?: () => void;
  onRestart?: () => void;
  backgroundImage?: string;
  eyebrow?: string;
}

export function LeftPanel({ step, reducedMotion, showLookDeeper, onLookDeeperClick, journeyNumber, journeyScore, showNavigation, onNext, onPrevious, currentStep, totalSteps, showSubmitButton, submitButtonLabel, onSubmit, onRestart, backgroundImage, eyebrow }: LeftPanelProps) {
  const variants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
      };

  const transition = {
    duration: reducedMotion ? 0.15 : 0.22,
    ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
  };

  return (
    <div className="w-2/5 h-screen flex items-center justify-center p-12" style={{ backgroundColor: '#F9F8F1' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="w-full text-left"
        >
          <div className="max-w-lg">
            {(journeyNumber || eyebrow) && (
              <p className="eyebrow mb-3">
                {eyebrow || `Journey ${journeyNumber}${journeyScore !== undefined ? ` (Score: ${Math.round(journeyScore)})` : ''}`}
              </p>
            )}

            <h1 className="headline mt-4 mb-6">
              {step.headline}
            </h1>

            <p className="bodycopy mt-6 mb-6">
              {step.body}
            </p>

            {step.bullets && step.bullets.length > 0 && (
              <ul className="space-y-3 mb-8">
                {step.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: '#2D3A20' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg" style={{ fontFamily: 'Rethink Sans, sans-serif', color: '#2D3A20' }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {showLookDeeper && onLookDeeperClick && (
              <motion.button
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={onLookDeeperClick}
                className="border-2 rounded-xl px-8 py-4 flex items-center gap-3 transition-all font-semibold text-lg mb-8"
                style={{
                  borderColor: '#2D3A20',
                  color: '#2D3A20',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2D3A20';
                  e.currentTarget.style.color = '#F9F8F1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2D3A20';
                }}
              >
                <Eye className="w-6 h-6" />
                <span>Look Deeper</span>
              </motion.button>
            )}

            {showSubmitButton && submitButtonLabel && onSubmit && (
              <motion.button
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={onSubmit}
                className="w-full rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all font-semibold text-lg mb-8"
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                }}
              >
                <span>{submitButtonLabel}</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            )}
          </div>

          {showNavigation && onNext && onPrevious && currentStep !== undefined && totalSteps !== undefined && (
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
              style={{ maxWidth: '90%' }}
            >
              <button
                onClick={onPrevious}
                disabled={currentStep === 0}
                className="outlinebutton flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <div className="flex-1 text-center">
                <p className="text-sm font-medium" style={{ color: '#6E6E6E' }}>
                  {currentStep + 1} / {totalSteps}
                </p>
              </div>

              <button
                onClick={onNext}
                className="outlinebutton flex items-center gap-2"
              >
                <span>{currentStep === totalSteps - 1 ? 'Complete Journey' : 'Next'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          <div className="max-w-lg">
            {journeyNumber && onRestart ? (
              <motion.button
                onClick={onRestart}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="text-sm uppercase tracking-wider text-slate-400 font-medium hover:text-slate-600 transition-colors"
              >
                RESTART
              </motion.button>
            ) : step.instruction && (
              <motion.p
                animate={
                  step.id === 0 && !reducedMotion
                    ? { opacity: [0.5, 1, 0.5] }
                    : { opacity: 0.7 }
                }
                transition={
                  step.id === 0 && !reducedMotion
                    ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                    : {}
                }
                className="text-sm uppercase tracking-wider text-slate-400 font-medium"
              >
                {step.instruction}
              </motion.p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
