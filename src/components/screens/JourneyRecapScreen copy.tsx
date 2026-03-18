import { motion } from 'framer-motion';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { easings } from '../../styles/design-tokens';
import { NeonButton } from '../NeonButton';
import { NeonOutlineButton } from '../NeonOutlineButton';

interface JourneyRecapScreenProps {
  recapTitle: string;
  recapDescription: string;
  recapHighlights: string[];
  recapGradient: string;
  eyebrowTitle: string;
  onReturnToSliders: () => void;
  onRestart: () => void;
  reducedMotion: boolean;
}

export function JourneyRecapScreen({
  recapTitle,
  recapDescription,
  recapHighlights,
  eyebrowTitle,
  onReturnToSliders,
  onRestart,
  reducedMotion,
}: JourneyRecapScreenProps) {
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

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-16 gap-8">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easings.smooth }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={reducedMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
            }}
            className="w-32 h-32 flex items-center justify-center mx-auto mb-4"
          >
            <img
              src="/images/QR_code.jpg"
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <p className="eyebrow text-electricgreen mb-8">
            {eyebrowTitle}
          </p>

          <h1 className="headline text-electricgreen mb-12">
            {recapTitle}
          </h1>

          {recapDescription && (
            <p className="bodycopy text-white mb-12">
              {recapDescription}
            </p>
          )}

          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-10 mb-12 flex flex-col items-center"
            style={{ backgroundColor: 'rgb(4 5 5 / 20%)' }}
          >
            {recapHighlights.length > 0 && (
              <>
                <motion.h2
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="headline text-white text-center mb-6"
                >
                  {recapHighlights[0]}
                </motion.h2>
                {recapHighlights[1] && (
                  <motion.p
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bodycopy text-center"
                    style={{ color: '#F9F8F1' }}
                  >
                    {recapHighlights[1]}
                  </motion.p>
                )}
              </>
            )}
          </motion.div>

          <div className="flex gap-4 max-w-xl mx-auto justify-center">
            <NeonButton onClick={onReturnToSliders} reducedMotion={reducedMotion} delay={0.5}>
              Try another journey
            </NeonButton>

            <NeonOutlineButton onClick={onRestart} reducedMotion={reducedMotion} delay={0.5}>
              Exit
            </NeonOutlineButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
