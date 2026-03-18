import { motion } from 'framer-motion';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { easings } from '../../styles/design-tokens';
import { NeonButton } from '../NeonButton';
import { NeonOutlineButton } from '../NeonOutlineButton';

interface JourneyCongratsScreenProps {
  journeyName: string;
  onReturnToSliders: () => void;
  onRestart: () => void;
  reducedMotion: boolean;
  onExit: () => void;
}

export function JourneyCongratsScreen({
  journeyName,
  onReturnToSliders,
  onRestart,
  reducedMotion,
  onExit,
}: JourneyCongratsScreenProps) {
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

  return (
    <div className="h-full w-full relative bg-black">
      <div className="absolute inset-0">
        <RiveComponent />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-16">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easings.smooth }}
          className="text-center max-w-3xl w-full"
        >
        <motion.div
          initial={reducedMotion ? { scale: 1 } : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
          }}
          className="w-32 h-32 flex items-center justify-center mx-auto mb-8"
        >
          <img
            src="/images/QR_code.jpg"
            alt="QR Code"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <p className="eyebrow text-electricgreen mb-6">
          JOURNEY COMPLETE
        </p>

        <h1 className="headline text-electricgreen mb-8">
          CONGRATULATIONS
        </h1>

        <p className="text-3xl mb-4" style={{ fontFamily: 'Rethink Sans, sans-serif', color: '#F9F8F1' }}>
          You've completed the {journeyName}
        </p>

        <p className="bodycopy mb-16" style={{ color: '#F9F8F1' }}>
          Thank you for exploring this experience. Choose what you'd like to do next.
        </p>

        <div className="flex gap-4 max-w-xl mx-auto justify-center">
          <NeonButton onClick={onReturnToSliders} reducedMotion={reducedMotion} delay={0.5}>
            Try another journey
          </NeonButton>

          <NeonOutlineButton onClick={onExit} reducedMotion={reducedMotion} delay={0.5}>
            Exit
          </NeonOutlineButton>
        </div>
      </motion.div>
      </div>
    </div>
  );
}
