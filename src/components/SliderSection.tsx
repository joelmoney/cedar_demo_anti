import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useRef, useEffect } from 'react';
import { RotateCcw, ArrowRight } from 'lucide-react';
import { sliderOptions } from '../config/journeys';
import { selectJourneyByScore } from '../config/journeyScoring';

interface SliderSectionProps {
  onComplete?: (values: Record<string, number>) => void;
  reducedMotion: boolean;
  onSliderChange?: (selectedJourney: number, score: number, overrideApplied: boolean, overrideName?: string) => void;
  showLeftPanel?: boolean;
  hasCompletedJourney?: boolean;
  onJumpToJourney?: (journeyNumber: number) => void;
  onRestart?: () => void;
}

export function SliderSection({
  onComplete,
  reducedMotion,
  onSliderChange,
  showLeftPanel = false,
  hasCompletedJourney = false,
  onJumpToJourney,
  onRestart
}: SliderSectionProps) {
  const segmentToPercentage = (segment: number, segmentCount: number): number => {
    const segmentSize = 100 / segmentCount;
    return (segment * segmentSize) + (segmentSize / 2);
  };

  const [sliderValues, setSliderValues] = useState<Record<string, number>>(
    sliderOptions.reduce((acc, option) => {
      const percentage = segmentToPercentage(option.defaultValue, option.segmentLabels.length);
      acc[option.id] = percentage;
      return acc;
    }, {} as Record<string, number>)
  );

  const percentageToSegment = (percentage: number, segmentCount: number): number => {
    const segmentSize = 100 / segmentCount;
    const segment = Math.floor(percentage / segmentSize);
    return percentage === 100 ? segmentCount - 1 : Math.max(0, Math.min(segment, segmentCount - 1));
  };

  const segmentValues = useMemo(() => {
    return Object.entries(sliderValues).reduce((acc, [id, percentage]) => {
      const option = sliderOptions.find(opt => opt.id === id);
      if (option) {
        acc[id] = percentageToSegment(percentage, option.segmentLabels.length);
      }
      return acc;
    }, {} as Record<string, number>);
  }, [sliderValues]);

  const handleSliderChange = (id: string, percentage: number) => {
    setSliderValues((prev) => {
      const newValues = { ...prev, [id]: percentage };
      const newSegmentValues = Object.entries(newValues).reduce((acc, [id, pct]) => {
        const option = sliderOptions.find(opt => opt.id === id);
        if (option) {
          acc[id] = percentageToSegment(pct, option.segmentLabels.length);
        }
        return acc;
      }, {} as Record<string, number>);

      const result = selectJourneyByScore(newSegmentValues);
      const journeyNumber = parseInt(result.journeyId.replace('journey', ''));
      onSliderChange?.(journeyNumber, result.score, result.overrideApplied, result.overrideName);
      return newValues;
    });
  };

  const selectedJourney = useMemo(() => {
    const result = selectJourneyByScore(segmentValues);
    const journeyNumber = parseInt(result.journeyId.replace('journey', ''));
    return journeyNumber;
  }, [segmentValues]);

  useEffect(() => {
    if (onSliderChange) {
      const result = selectJourneyByScore(segmentValues);
      const journeyNumber = parseInt(result.journeyId.replace('journey', ''));
      onSliderChange(journeyNumber, result.score, result.overrideApplied, result.overrideName);
    }
  }, [segmentValues]);

  const handleSubmit = () => {
    if (onComplete) {
      console.log('SliderSection handleSubmit called with values:', segmentValues);
      console.log('Selected journey:', selectedJourney);
      onComplete(segmentValues);
    }
  };

  const handleReset = () => {
    setSliderValues(
      sliderOptions.reduce((acc, option) => {
        const percentage = (option.defaultValue / (option.segmentLabels.length - 1)) * 100;
        acc[option.id] = percentage;
        return acc;
      }, {} as Record<string, number>)
    );
  };

  const trackRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleTrackInteraction = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
    optionId: string,
    trackElement: HTMLElement
  ) => {
    const rect = trackElement.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    handleSliderChange(optionId, percentage);
  };

  const sliderContent = (
    <div className="h-full flex flex-col items-center justify-center p-8" style={{ backgroundColor: '#F9F8F1' }}>
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleReset();
          }}
          className="absolute top-6 right-6 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>

        <div className="space-y-4 mt-4">
          {sliderOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="px-4 py-2"
            >
                <label className="block">
                  <div className="flex justify-between items-center gap-3 mb-3">
                    <span className="eyebrow">{option.label}</span>
                    <div className="flex items-center gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${option.id}-seg-${percentageToSegment(sliderValues[option.id], option.segmentLabels.length)}`}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"
                        >
                          {option.segmentLabels[percentageToSegment(sliderValues[option.id], option.segmentLabels.length)]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="relative pt-2">
                    <div className="relative mb-6 px-3.5 py-3">
                      <div className="absolute left-3.5 right-3.5 top-1/2 -translate-y-1/2 h-3.5 rounded-full bg-[#D9D9D9]" />

                      <div
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 rounded-full overflow-hidden"
                        style={{
                          width: `calc((100% - 28px) * ${sliderValues[option.id] / 100})`
                        }}
                      >
                        <div
                          className="h-full rounded-full absolute left-0 top-0 bottom-0"
                          style={{
                            width: `${sliderValues[option.id] > 0 ? (100 / sliderValues[option.id]) * 100 : 0}%`,
                            background: 'linear-gradient(90deg, #81796A 0%, #58AFC8 19.71%, #D5EE8A 62.5%, #E1F7C6 96.15%)',
                          }}
                        />
                      </div>

                      <div
                        ref={(el) => trackRefs.current[option.id] = el}
                        className="absolute left-3.5 right-3.5 top-1/2 -translate-y-1/2 h-8 cursor-pointer"
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          const target = e.currentTarget;
                          handleTrackInteraction(e, option.id, target);
                        }}
                        onTouchStart={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          const target = e.currentTarget;
                          handleTrackInteraction(e, option.id, target);
                        }}
                      />

                      <div className="relative">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 cursor-grab active:cursor-grabbing"
                          style={{
                            left: `${sliderValues[option.id]}%`
                          }}
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            const trackElement = trackRefs.current[option.id];
                            if (!trackElement) return;

                            const handleMouseMove = (moveEvent: MouseEvent) => {
                              moveEvent.preventDefault();
                              handleTrackInteraction(
                                moveEvent,
                                option.id,
                                trackElement
                              );
                            };

                            const handleMouseUp = () => {
                              document.removeEventListener('mousemove', handleMouseMove);
                              document.removeEventListener('mouseup', handleMouseUp);
                            };

                            document.addEventListener('mousemove', handleMouseMove);
                            document.addEventListener('mouseup', handleMouseUp);
                          }}
                          onTouchStart={(e) => {
                            e.stopPropagation();
                            const trackElement = trackRefs.current[option.id];
                            if (!trackElement) return;

                            const handleTouchMove = (moveEvent: TouchEvent) => {
                              moveEvent.preventDefault();
                              handleTrackInteraction(
                                moveEvent,
                                option.id,
                                trackElement
                              );
                            };

                            const handleTouchEnd = () => {
                              document.removeEventListener('touchmove', handleTouchMove);
                              document.removeEventListener('touchend', handleTouchEnd);
                            };

                            document.addEventListener('touchmove', handleTouchMove, { passive: false });
                            document.addEventListener('touchend', handleTouchEnd);
                          }}
                        >
                          <div className="w-9 h-9 bg-white border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );

  if (showLeftPanel) {
    const result = selectJourneyByScore(segmentValues);
    const journeyNumber = parseInt(result.journeyId.replace('journey', ''));

    const [randomThumbnails] = useState(() => {
      const allJourneys = [1, 2, 3, 4, 5, 6];
      const available = allJourneys.filter(j => j !== journeyNumber);
      const shuffled = available.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    });

    return (
      <div className="w-full h-screen flex">
        <div className="h-screen flex items-center justify-center px-16 py-12" style={{ backgroundColor: '#F9F8F1', width: '48%' }}>
          <div className="max-w-2xl text-left">
            <p className="eyebrow">
              INTELLIGENCE IN ACTION
            </p>

            <h1 className="headline mt-4">
              The one-of-one experience.
            </h1>

            <p className="bodycopy mt-6 mb-6">
              Use the sliders to adjust key patient attributes—like payment history, bill complexity, and engagement preferences—and watch how the system tailors a unique financial journey in real time. Each movement refines the experience, demonstrating how Cedar goes beyond averages and assumptions to deliver a one-of-one approach for every patient.
            </p>

            <p className="bodycopy mb-8">
              The result? Smarter interactions, higher patient satisfaction, and better payment outcomes that scale across your entire patient population.
            </p>

            <motion.button
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={handleSubmit}
              className="outlinebutton px-10 py-2 flex items-center justify-center gap-3 text-base mb-6"
            >
              <span>Go to Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* ADMIN FUNCTIONS - Set display: none in CSS to hide for production */}
            <div className="admin-functions mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-xs uppercase tracking-wider font-bold mb-3 text-gray-600">
                ADMIN FUNCTIONS
              </p>
              {/* Hidden for now - can be unhidden later */}
              <div className="space-y-2 mb-4" style={{ display: 'none' }}>
                <p className="text-sm font-mono text-gray-700">
                  <span className="font-semibold">Score:</span> {result.score}
                </p>
                <p className="text-sm font-mono text-gray-700">
                  <span className="font-semibold">Journey:</span> {journeyNumber}
                </p>
                <p className="text-sm font-mono text-gray-700">
                  <span className="font-semibold">Override:</span> {result.overrideApplied ? `Yes (${result.overrideName})` : 'No'}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((jNum) => (
                  <button
                    key={jNum}
                    onClick={() => onJumpToJourney?.(jNum)}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      jNum === journeyNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    J{jNum}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={onRestart}
              className="text-sm uppercase tracking-wider font-medium transition-colors mb-8"
              style={{
                color: '#94A3B8',
                letterSpacing: '0.1em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#64748B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              Restart
            </button>

            {hasCompletedJourney && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="bodycopy text-center text-sm mb-4">
                  Jump to another patient profile:
                </p>
                <div className="flex justify-center gap-4">
                  {randomThumbnails.map((journeyNum) => (
                    <motion.button
                      key={journeyNum}
                      onClick={() => onJumpToJourney?.(journeyNum)}
                      className="rounded-3xl overflow-hidden transition-all"
                      style={{
                        width: '120px',
                        height: '120px',
                        border: '8px solid rgba(255, 255, 255, 0.5)'
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(255, 255, 255, 0.9)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={`/images/j${journeyNum}_thumb.png`}
                        alt={`Journey ${journeyNum}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex-1">
          {sliderContent}
        </div>
      </div>
    );
  }

  return sliderContent;
}
