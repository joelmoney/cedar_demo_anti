import { useRef, useEffect, useState } from 'react';

interface HighKeyframeScrollVideoProps {
  videoSrc: string;
  className?: string;
  scrollContainer?: HTMLElement | null;
}

export function HighKeyframeScrollVideo({ videoSrc, className = '', scrollContainer }: HighKeyframeScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const rafRef = useRef<number | null>(null);
  const currentTimeRef = useRef<number>(0);
  const targetTimeRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handleLoadedMetadata = () => {
      setIsVideoReady(true);
      video.currentTime = 0;
      currentTimeRef.current = 0;
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const handleSeeked = () => {
      if (video.paused) {
        video.pause();
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);

    const smoothUpdate = () => {
      if (!isVideoReady || !video.duration) {
        rafRef.current = requestAnimationFrame(smoothUpdate);
        return;
      }

      const delta = targetTimeRef.current - currentTimeRef.current;

      if (Math.abs(delta) > 0.0005) {
        currentTimeRef.current += delta * 0.18;

        const clampedTime = Math.max(0, Math.min(video.duration, currentTimeRef.current));

        if (Math.abs(video.currentTime - clampedTime) > 0.008) {
          video.currentTime = clampedTime;
        }
      }

      rafRef.current = requestAnimationFrame(smoothUpdate);
    };

    const updateTargetTime = () => {
      if (!isVideoReady || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerHeight = container.clientHeight;
      const scrollableRange = containerHeight - viewportHeight;
      const distanceFromTop = -rect.top;
      const scrollProgress = Math.max(0, Math.min(1, distanceFromTop / scrollableRange));

      targetTimeRef.current = scrollProgress * video.duration;
    };

    const handleScroll = () => {
      updateTargetTime();
    };

    const targetElement = scrollContainer || window;
    targetElement.addEventListener('scroll', handleScroll, { passive: true });

    updateTargetTime();
    rafRef.current = requestAnimationFrame(smoothUpdate);

    return () => {
      targetElement.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVideoReady, scrollContainer]);

  return (
    <div ref={containerRef} className={`relative w-full bg-white ${className}`} style={{ height: '200vh' }}>
      <div className="sticky top-1/4 w-full flex items-center justify-center z-10 bg-white p-8">
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-slate-300 rounded-3xl animate-pulse" />
        )}
        <video
          ref={videoRef}
          src={videoSrc}
          className={`w-full rounded-3xl shadow-2xl transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          preload="auto"
          playsInline
          muted
          disablePictureInPicture
          disableRemotePlayback
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            imageRendering: 'crisp-edges',
            backgroundColor: 'white',
          }}
        />
      </div>
    </div>
  );
}
