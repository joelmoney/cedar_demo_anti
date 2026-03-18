import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, ReactNode } from 'react';

interface TextOverlay {
  time: number;
  duration: number;
  content: ReactNode;
}

interface TimedVideoOverlayProps {
  videoSrc: string;
  overlays: TextOverlay[];
  className?: string;
  videoClassName?: string;
  textPosition?: 'overlay' | 'above';
  textClassName?: string;
}

export function TimedVideoOverlay({
  videoSrc,
  overlays,
  className = '',
  videoClassName = '',
  textPosition = 'overlay',
  textClassName = ''
}: TimedVideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const activeOverlays = overlays.filter(overlay => {
    const endTime = overlay.time + overlay.duration;
    return currentTime >= overlay.time && currentTime < endTime;
  });

  const textContent = (
    <AnimatePresence mode="wait">
      {activeOverlays.map((overlay, index) => (
        <motion.div
          key={`${overlay.time}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={textPosition === 'above' ? 'w-full' : 'absolute inset-0 flex items-center justify-center px-16'}
        >
          {overlay.content}
        </motion.div>
      ))}
    </AnimatePresence>
  );

  if (textPosition === 'above') {
    return (
      <div className={className}>
        <div className={`min-h-[100px] flex items-center justify-center ${textClassName}`}>
          {textContent}
        </div>
        <video
          ref={videoRef}
          src={videoSrc}
          className={videoClassName}
          autoPlay
          muted
          playsInline
          loop
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={videoSrc}
        className={videoClassName}
        autoPlay
        muted
        playsInline
        loop
      />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center px-8">
        {textContent}
      </div>
    </div>
  );
}
