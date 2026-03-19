import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LeftPanel } from './components/LeftPanel';
import { MobileShell } from './components/MobileShell';
import { PreambleScreen } from './components/screens/PreambleScreen';
import { SliderScreen } from './components/screens/SliderScreen';
import { PresenterControls } from './components/PresenterControls';
import { DraggableModal } from './components/DraggableModal';
import { Journey, journeys, mapSlidersToJourney } from './config/journeys';
import { Journey3Screen1 } from './components/journey-screens/Journey3Screen1';
import { Journey3Screen2 } from './components/journey-screens/Journey3Screen2';
import { Journey3Screen3 } from './components/journey-screens/Journey3Screen3';
import { Journey3Screen4 } from './components/journey-screens/Journey3Screen4';

type FlowState = 'start' | 'welcome' | 'preamble' | 'sliders' | 'persona' | 'journey' | 'journeyRecap' | 'recap';

function App() {
  console.log('🚀 App.tsx - Component mounting/rendering');

  const [flowState, setFlowState] = useState<FlowState>('start');
  const [currentJourney, setCurrentJourney] = useState<Journey | null>(null);
  const [currentJourneyStep, setCurrentJourneyStep] = useState(0);
  const [presenterMode, setPresenterMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cornerTaps, setCornerTaps] = useState(0);
  const [cornerTapTimer, setCornerTapTimer] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJourneyNumber, setSelectedJourneyNumber] = useState(1);
  const [selectedJourneyScore, setSelectedJourneyScore] = useState(0);
  const [isOverrideActive, setIsOverrideActive] = useState(false);
  const [overrideName, setOverrideName] = useState<string | undefined>(undefined);
  const [completedJourneysCount, setCompletedJourneysCount] = useState(0);
  const [userSliderValues, setUserSliderValues] = useState<Record<string, number> | null>(null);

  console.log('📊 App.tsx - Current flowState:', flowState, 'userSliderValues:', userSliderValues);

  useEffect(() => {
    console.log('🔄 App.tsx - userSliderValues changed to:', userSliderValues);
  }, [userSliderValues]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);


  const handleStartToWelcome = useCallback(() => {
    setFlowState('welcome');
  }, []);

  const handleStartWithPreamble = useCallback(() => {
    setFlowState('preamble');
    }, []);

  const handleStartWithoutPreamble = useCallback(() => {
    setFlowState('sliders');
    }, []);

  const handlePreambleComplete = useCallback(() => {
    setFlowState('sliders');
    }, []);

  const handleSlidersComplete = useCallback((sliderValues: Record<string, number>) => {
    console.log('App.tsx handleSlidersComplete called with:', sliderValues);
    console.log('App.tsx - setting userSliderValues to:', sliderValues);
    const journey = mapSlidersToJourney(sliderValues);
    console.log('Mapped to journey:', journey);
    setUserSliderValues(sliderValues);
    console.log('App.tsx - userSliderValues state updated');
    setCurrentJourney(journey);
    setCurrentJourneyStep(0);
    setFlowState('persona');
    console.log('Flow state set to persona');
    }, []);

  const handleJumpToJourney = useCallback((journeyNumber: number) => {
    const journey = journeys[journeyNumber - 1];
    setCurrentJourney(journey);
    setCurrentJourneyStep(0);
    setUserSliderValues(journey.defaultSliderValues);
    setFlowState('persona');
  }, []);

  const [lastCompletedJourneyId, setLastCompletedJourneyId] = useState<string | null>(null);

  const handlePersonaComplete = useCallback(() => {
    setFlowState('journey');
  }, []);

  const handleJourneyNext = useCallback(() => {
    if (!currentJourney) return;

    if (currentJourneyStep === currentJourney.steps.length - 1) {
      setFlowState('journeyRecap');
      setCompletedJourneysCount((prev) => prev + 1);
      if (currentJourney) {
        setLastCompletedJourneyId(currentJourney.id);
      }
    } else {
      setCurrentJourneyStep((prev) => prev + 1);
    }
  }, [currentJourney, currentJourneyStep]);

  const handleJourneyRecapContinue = useCallback(() => {
    setFlowState('sliders');
    setCurrentJourney(null);
    setCurrentJourneyStep(0);
    }, []);

  const handleJourneyPrevious = useCallback(() => {
    if (currentJourneyStep > 0) {
      setCurrentJourneyStep((prev) => prev - 1);
    }
  }, [currentJourneyStep]);

  const handleJumpTo = useCallback((step: number) => {
    setCurrentJourneyStep(step);
    }, []);

  const handleReturnToSliders = useCallback(() => {
    setFlowState('sliders');
    setCurrentJourney(null);
    setCurrentJourneyStep(0);
    }, []);

  const handleRestart = useCallback(() => {
    setFlowState('start');
    setCurrentJourney(null);
    setCurrentJourneyStep(0);
    setCompletedJourneysCount(0);
    }, []);

  const handleRestartToWelcome = useCallback(() => {
    setFlowState('welcome');
    setCurrentJourney(null);
    setCurrentJourneyStep(0);
    setCompletedJourneysCount(0);
    setUserSliderValues(null);
    }, []);

  const handleCornerTap = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x > rect.width - 100 && y < 100) {
      setCornerTaps((prev) => prev + 1);

      if (cornerTapTimer) {
        clearTimeout(cornerTapTimer);
      }

      const timeout = window.setTimeout(() => {
        setCornerTaps(0);
      }, 2000);

      setCornerTapTimer(timeout);
    }
  }, [cornerTapTimer]);

  useEffect(() => {
    if (cornerTaps >= 5) {
      setPresenterMode((prev) => !prev);
      setCornerTaps(0);
    }
  }, [cornerTaps]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P') {
        setPresenterMode((prev) => !prev);
      }

      if (presenterMode && flowState === 'journey') {
        const totalSteps = currentJourney?.steps.length || 0;
        switch (e.key) {
          case 'ArrowRight':
            e.preventDefault();
            if (currentJourneyStep < totalSteps - 1) {
              handleJourneyNext();
            }
            break;
          case 'ArrowLeft':
            e.preventDefault();
            if (currentJourneyStep > 0) {
              handleJourneyPrevious();
            }
            break;
          case 'r':
          case 'R':
            e.preventDefault();
            handleRestart();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [presenterMode, flowState, currentJourneyStep, currentJourney, handleJourneyNext, handleJourneyPrevious, handleRestart]);

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('selectstart', preventDefault);
    document.addEventListener('gesturestart', preventDefault);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('selectstart', preventDefault);
      document.removeEventListener('gesturestart', preventDefault);
    };
  }, []);

  const handleLookDeeperClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleSliderChange = useCallback((journeyNumber: number, score: number, overrideApplied: boolean, overrideName?: string) => {
    setSelectedJourneyNumber(journeyNumber);
    setSelectedJourneyScore(score);
    setIsOverrideActive(overrideApplied);
    setOverrideName(overrideName);
  }, []);

  const getLeftPanelContent = () => {
    if (flowState === 'journey' && currentJourney) {
      const leftPanelStep = currentJourney.leftPanelContent[currentJourneyStep];
      return {
        headline: leftPanelStep.headline,
        body: leftPanelStep.body,
        bullets: leftPanelStep.bullets,
        instruction: leftPanelStep.instruction,
      };
    }

    switch (flowState) {
      case 'start':
        return {
          headline: 'Start',
          body: 'Welcome to your personalized journey experience.',
          instruction: 'Tap Start to begin',
        };
      case 'welcome':
        return {
          headline: 'Welcome',
          body: 'Choose how you would like to begin your personalized journey experience.',
          instruction: 'Select an option to continue',
        };
      case 'preamble':
        return {
          headline: 'Preamble',
          body: 'Learn about the experience before diving in.',
          instruction: 'Tap to continue',
        };
      case 'sliders':
        return {
          headline: 'Customize Your Journey',
          body: 'Adjust the sliders to match your preferences and needs. Your selections will guide you to a personalized experience.',
          instruction: 'Complete the sliders to begin',
        };
      case 'persona':
        return {
          headline: 'Meet Your Patient',
          body: currentJourney ? `Learn about ${currentJourney.persona.name} and their healthcare journey.` : 'Meet the patient profile for this journey.',
          instruction: 'Tap to continue',
        };
      case 'recap':
        return {
          headline: 'Journey Complete',
          body: `You've completed ${currentJourney?.name || 'your journey'}. Thank you for exploring this experience.`,
          instruction: 'Choose your next action',
        };
      default:
        return {
          headline: '',
          body: '',
        };
    }
  };

  const leftPanelContent = getLeftPanelContent();

  const showLookDeeper = flowState === 'journey' &&
    currentJourney &&
    ['journey1', 'journey2', 'journey3'].includes(currentJourney.id) &&
    currentJourney.leftPanelContent[currentJourneyStep].deeperContent;

  const modalContent = currentJourney?.leftPanelContent[currentJourneyStep];

  if (flowState === 'start' || flowState === 'welcome' || flowState === 'journeyRecap' || flowState === 'recap') {
    return (
      <div
        className="h-screen overflow-hidden select-none"
        onClick={handleCornerTap}
        style={{ touchAction: 'manipulation' }}
      >
        <MobileShell
          flowState={flowState}
          currentJourney={currentJourney}
          currentJourneyStep={currentJourneyStep}
          onStartToWelcome={handleStartToWelcome}
          onStartWithPreamble={handleStartWithPreamble}
          onStartWithoutPreamble={handleStartWithoutPreamble}
          onPreambleComplete={handlePreambleComplete}
          onSlidersComplete={handleSlidersComplete}
          onPersonaComplete={handlePersonaComplete}
          onJourneyNext={handleJourneyNext}
          onJourneyRecapContinue={handleJourneyRecapContinue}
          onReturnToSliders={handleReturnToSliders}
          onRestart={handleRestart}
          reducedMotion={reducedMotion}
          fullScreen={true}
          userSliderValues={userSliderValues}
        />
      </div>
    );
  }

  if (flowState === 'persona') {
    return (
      <div
        className="h-screen overflow-hidden select-none"
        onClick={handleCornerTap}
        style={{ touchAction: 'manipulation' }}
      >
        <MobileShell
          flowState={flowState}
          currentJourney={currentJourney}
          currentJourneyStep={currentJourneyStep}
          onStartWithPreamble={handleStartWithPreamble}
          onStartWithoutPreamble={handleStartWithoutPreamble}
          onPreambleComplete={handlePreambleComplete}
          onSlidersComplete={handleSlidersComplete}
          onPersonaComplete={handlePersonaComplete}
          onJourneyNext={handleJourneyNext}
          onJourneyRecapContinue={handleJourneyRecapContinue}
          onReturnToSliders={handleReturnToSliders}
          onRestart={handleRestart}
          reducedMotion={reducedMotion}
          fullScreen={true}
          userSliderValues={userSliderValues}
        />
      </div>
    );
  }

  if (flowState === 'preamble') {
    return (
      <div
        className="h-screen overflow-hidden select-none"
        onClick={handleCornerTap}
        style={{ touchAction: 'manipulation' }}
      >
        <PreambleScreen
          onContinue={handleSlidersComplete}
          reducedMotion={reducedMotion}
          onSliderChange={handleSliderChange}
          onJumpToJourney={handleJumpToJourney}
          onRestart={handleRestartToWelcome}
        />
      </div>
    );
  }

  if (flowState === 'sliders') {
    return (
      <div
        className="h-screen overflow-hidden select-none"
        onClick={handleCornerTap}
        style={{ touchAction: 'manipulation' }}
      >
        <SliderScreen
          onComplete={handleSlidersComplete}
          reducedMotion={reducedMotion}
          onSliderChange={handleSliderChange}
          showLeftPanel={true}
          hasCompletedJourney={completedJourneysCount > 0}
          onJumpToJourney={handleJumpToJourney}
          onRestart={handleRestartToWelcome}
        />
      </div>
    );
  }

  const getJourneyNumber = () => {
    if (!currentJourney) return undefined;
    return parseInt(currentJourney.id.replace('journey', ''));
  };

  const isJourney3FullScreenMode = currentJourney?.id === 'journey3' && currentJourneyStep >= 0 && currentJourneyStep <= 3;

  if (flowState === 'journey' && isJourney3FullScreenMode) {
    let screenComponent;
    if (currentJourneyStep === 0) {
      screenComponent = <Journey3Screen1 reducedMotion={reducedMotion} onNext={handleJourneyNext} />;
    } else if (currentJourneyStep === 1) {
      screenComponent = <Journey3Screen2 reducedMotion={reducedMotion} onNext={handleJourneyNext} />;
    } else if (currentJourneyStep === 2) {
      screenComponent = <Journey3Screen3 reducedMotion={reducedMotion} onNext={handleJourneyNext} />;
    } else if (currentJourneyStep === 3) {
      screenComponent = <Journey3Screen4 reducedMotion={reducedMotion} onNext={handleJourneyNext} />;
    }

    return (
      <div
        className="flex h-screen overflow-hidden select-none"
        onClick={handleCornerTap}
        style={{ touchAction: 'manipulation' }}
      >
        <LeftPanel
          step={{
            id: currentJourneyStep,
            headline: leftPanelContent.headline,
            body: leftPanelContent.body,
            bullets: leftPanelContent.bullets,
            instruction: leftPanelContent.instruction,
            screen: 'feature',
          }}
          reducedMotion={reducedMotion}
          showLookDeeper={showLookDeeper}
          onLookDeeperClick={handleLookDeeperClick}
          journeyNumber={getJourneyNumber()}
          journeyScore={selectedJourneyScore}
          showNavigation={flowState === 'journey'}
          onNext={handleJourneyNext}
          onPrevious={handleJourneyPrevious}
          currentStep={currentJourneyStep}
          totalSteps={currentJourney?.steps.length}
          onRestart={handleReturnToSliders}
          userSliderValues={userSliderValues}
          eyebrow={currentJourney?.eyebrowTitle}
        />
        <div className="flex-1">
          {screenComponent}
        </div>

        {presenterMode && currentJourney && (
          <PresenterControls
            currentStep={currentJourneyStep}
            totalSteps={currentJourney.steps.length}
            onNext={handleJourneyNext}
            onPrevious={handleJourneyPrevious}
            onJumpTo={handleJumpTo}
            onReset={handleRestart}
          />
        )}

        <DraggableModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalContent?.headline || ''}
          content={modalContent?.deeperContent || ''}
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-screen overflow-hidden select-none"
      onClick={handleCornerTap}
      style={{ touchAction: 'manipulation' }}
    >
      <LeftPanel
        step={{
          id: currentJourneyStep,
          headline: leftPanelContent.headline,
          body: leftPanelContent.body,
          bullets: leftPanelContent.bullets,
          instruction: leftPanelContent.instruction,
          screen: 'feature',
        }}
        reducedMotion={reducedMotion}
        showLookDeeper={showLookDeeper}
        onLookDeeperClick={handleLookDeeperClick}
        journeyNumber={getJourneyNumber()}
        journeyScore={selectedJourneyScore}
        showNavigation={flowState === 'journey'}
        onNext={handleJourneyNext}
        onPrevious={handleJourneyPrevious}
        currentStep={currentJourneyStep}
        totalSteps={currentJourney?.steps.length}
        onRestart={handleReturnToSliders}
        userSliderValues={userSliderValues}
        eyebrow={currentJourney?.eyebrowTitle}
      />
      <MobileShell
        flowState={flowState}
        currentJourney={currentJourney}
        currentJourneyStep={currentJourneyStep}
        onStartWithPreamble={handleStartWithPreamble}
        onStartWithoutPreamble={handleStartWithoutPreamble}
        onPreambleComplete={handlePreambleComplete}
        onSlidersComplete={handleSlidersComplete}
        onPersonaComplete={handlePersonaComplete}
        onJourneyNext={handleJourneyNext}
        onJourneyRecapContinue={handleJourneyRecapContinue}
        onReturnToSliders={handleReturnToSliders}
        onRestart={handleRestart}
        reducedMotion={reducedMotion}
        fullScreen={false}
        backgroundImage={currentJourney?.persona.imageUrl}
        userSliderValues={userSliderValues}
      />

      {presenterMode && flowState === 'journey' && currentJourney && (
        <PresenterControls
          currentStep={currentJourneyStep}
          totalSteps={currentJourney.steps.length}
          onNext={handleJourneyNext}
          onPrevious={handleJourneyPrevious}
          onJumpTo={handleJumpTo}
          onReset={handleRestart}
        />
      )}

      <DraggableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent?.headline || ''}
        content={modalContent?.deeperContent || ''}
      />
    </div>
  );
}

export default App;
