import { motion } from 'framer-motion';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { easings } from '../../styles/design-tokens';
import { useEffect } from 'react';
import { NeonButton } from '../NeonButton';
import { NeonOutlineButton } from '../NeonOutlineButton';

interface WelcomeScreenProps {
  onStartWithPreamble: () => void;
  onStartWithoutPreamble: () => void;
  reducedMotion: boolean;
}

export function WelcomeScreen({
  onStartWithPreamble,
  onStartWithoutPreamble,
  reducedMotion
}: WelcomeScreenProps) {
  const { rive, RiveComponent } = useRive({
    src: '/videos/animation/rive/cedar-grid.riv',
    artboard: 'grid-blocks',
    stateMachines: 'grid-blocks',
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    onLoad: () => {
      rive?.resizeDrawingSurfaceToCanvas();
    },
  });

  const pulseInput = useStateMachineInput(rive, 'grid-blocks', 'pulse-start');

  useEffect(() => {
    if (pulseInput) {
      pulseInput.value = true;
    }
  }, [pulseInput]);

  return (
    <div className="h-full w-full relative bg-black">
      <div className="absolute inset-0">
        <RiveComponent />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-16 gap-8">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easings.smooth }}
          className="text-center"
        >
          <p className="eyebrow text-electricgreen mb-4">
            CEDAR INTELLIGENCE
          </p>
          <h1 className="headline text-electricgreen mb-4">
            Welcome
          </h1>
          <p className="bodycopy text-white mb-8">
            Choose how you would like to begin
          </p>
        </motion.div>

        <div className="flex flex-row gap-4">
          <NeonButton onClick={onStartWithPreamble} reducedMotion={reducedMotion} delay={0.1}>
            Full Experience
          </NeonButton>

          <NeonOutlineButton onClick={onStartWithoutPreamble} reducedMotion={reducedMotion}>
            Quick Start
          </NeonOutlineButton>
        </div>
      </div>
    </div>
  );
}
