import { motion, AnimatePresence } from 'framer-motion';
import { Journey } from '../config/journeys';
import { StartScreen } from './screens/StartScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { PreambleScreen } from './screens/PreambleScreen';
import { SliderScreen } from './screens/SliderScreen';
import { PersonaScreen } from './screens/PersonaScreen';
import { JourneyScreen } from './screens/JourneyScreen';
import { JourneyRecapScreen } from './screens/JourneyRecapScreen';
import { JourneyCongratsScreen } from './screens/JourneyCongratsScreen';
import { useState } from 'react';

type FlowState = 'start' | 'welcome' | 'preamble' | 'sliders' | 'persona' | 'journey' | 'journeyRecap' | 'recap';

interface MobileShellProps {
  flowState: FlowState;
  currentJourney: Journey | null;
  currentJourneyStep: number;
  onStartToWelcome?: () => void;
  onStartWithPreamble: () => void;
  onStartWithoutPreamble: () => void;
  onPreambleComplete: () => void;
  onSlidersComplete: (values: Record<string, number>) => void;
  onPersonaComplete?: () => void;
  onJourneyNext: () => void;
  onJourneyRecapContinue: () => void;
  onReturnToSliders: () => void;
  onRestart: () => void;
  reducedMotion: boolean;
  fullScreen?: boolean;
  backgroundImage?: string;
  userSliderValues?: Record<string, number> | null;
}

export function MobileShell({
  flowState,
  currentJourney,
  currentJourneyStep,
  onStartToWelcome,
  onStartWithPreamble,
  onStartWithoutPreamble,
  onPreambleComplete,
  onSlidersComplete,
  onPersonaComplete,
  onJourneyNext,
  onJourneyRecapContinue,
  onReturnToSliders,
  onRestart,
  reducedMotion,
  fullScreen = false,
  backgroundImage,
  userSliderValues,
}: MobileShellProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.closest('button') || target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' || target.closest('input')) {
      return;
    }

    if (flowState !== 'journey') return;

    // Don't handle tap for Journey 1-6 - individual components handle navigation
    if (currentJourney?.id === 'journey1' ||
        currentJourney?.id === 'journey2' ||
        currentJourney?.id === 'journey3' ||
        currentJourney?.id === 'journey4' ||
        currentJourney?.id === 'journey5' ||
        currentJourney?.id === 'journey6') return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rippleId = Date.now();
    setRipples((prev) => [...prev, { id: rippleId, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 300);

    onJourneyNext();
  };

  const renderScreen = () => {
    switch (flowState) {
      case 'start':
        return (
          <StartScreen
            onStart={onStartToWelcome || onStartWithPreamble}
            reducedMotion={reducedMotion}
          />
        );
      case 'welcome':
        return (
          <WelcomeScreen
            onStartWithPreamble={onStartWithPreamble}
            onStartWithoutPreamble={onStartWithoutPreamble}
            reducedMotion={reducedMotion}
          />
        );
      case 'preamble':
        return <PreambleScreen onContinue={onSlidersComplete} reducedMotion={reducedMotion} />;
      case 'sliders':
        return <SliderScreen onComplete={onSlidersComplete} reducedMotion={reducedMotion} />;
      case 'persona':
        if (!currentJourney || !onPersonaComplete) return null;
        console.log('MobileShell rendering PersonaScreen with userSliderValues:', userSliderValues);
        return (
          <PersonaScreen
            persona={currentJourney.persona}
            leftPanelContent={currentJourney.personaScreenContent}
            onContinue={onPersonaComplete}
            reducedMotion={reducedMotion}
            userSliderValues={userSliderValues}
          />
        );
      case 'journey':
        if (!currentJourney) return null;
        return (
          <JourneyScreen
            step={currentJourney.steps[currentJourneyStep]}
            stepNumber={currentJourneyStep + 1}
            totalSteps={currentJourney.steps.length}
            reducedMotion={reducedMotion}
            journeyId={currentJourney.id}
            onNext={onJourneyNext}
          />
        );
      case 'journeyRecap':
        if (!currentJourney) return null;
        return (
          <JourneyRecapScreen
            recapTitle={currentJourney.recapTitle}
            recapDescription={currentJourney.recapDescription}
            recapHighlights={currentJourney.recapHighlights}
            recapGradient={currentJourney.recapGradient}
            eyebrowTitle={currentJourney.eyebrowTitle}
            onReturnToSliders={onReturnToSliders}
            onRestart={onRestart}
            reducedMotion={reducedMotion}
          />
        );
      case 'recap':
        return (
          <JourneyCongratsScreen
            journeyName={currentJourney?.name || 'Unknown Journey'}
            onReturnToSliders={onReturnToSliders}
            onRestart={onRestart}
            reducedMotion={reducedMotion}
            onExit={onRestart}
          />
        );
      default:
        return null;
    }
  };

  if (fullScreen) {
    return (
      <div className="w-full h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={flowState}
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="w-full h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  const shouldAnimateShell = flowState === 'journey' && currentJourneyStep === 0;

  return (
    <div className="w-3/5 h-screen flex items-center justify-center p-8 relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
          }}
        />
      )}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(70, 90, 49, 0.6)' }} />
      <motion.div
        className="relative z-10"
        initial={shouldAnimateShell && !reducedMotion ? { opacity: 0, y: 60 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <div
          className="absolute inset-0 rounded-[3rem] shadow-2xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            margin: '-25px'
          }}
        ></div>

        <div
          className="w-[402px] h-[874px] bg-white rounded-[2.5rem] overflow-hidden relative cursor-pointer"
          onClick={handleTap}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${flowState}-${currentJourneyStep}`}
              initial={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              className="w-full h-full overflow-y-auto scrollbar-hide"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>

          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="absolute rounded-full bg-blue-400 pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 0,
                height: 0,
              }}
              initial={{ scale: 0, opacity: 0.25 }}
              animate={{ scale: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
