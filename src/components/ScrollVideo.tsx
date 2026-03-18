import { useRef, useEffect, useState } from 'react';

interface ScrollVideoProps {
  videoSrc: string;
  posterImage?: string;
  className?: string;
  scrollContainer?: HTMLElement | null;
  children?: React.ReactNode;
}

export function ScrollVideo({ videoSrc, posterImage, className = '', scrollContainer, children }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const currentTimeRef = useRef<number>(0);
  const targetTimeRef = useRef<number>(0);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    const handleError = () => {
      setError('Failed to load video');
      console.error('Video error:', video.error);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container || !isVideoReady) return;

    const smoothUpdate = () => {
      if (!video.duration) {
        rafRef.current = requestAnimationFrame(smoothUpdate);
        return;
      }

      const delta = targetTimeRef.current - currentTimeRef.current;

      if (Math.abs(delta) > 0.001) {
        currentTimeRef.current += delta * 0.12;

        const clampedTime = Math.max(0, Math.min(video.duration, currentTimeRef.current));

        if (Math.abs(video.currentTime - clampedTime) > 0.016) {
          video.currentTime = clampedTime;
        }
      }

      rafRef.current = requestAnimationFrame(smoothUpdate);
    };

    const updateTargetTime = () => {
      if (!video.duration) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerHeight = container.clientHeight;

      // Start playing when container enters from bottom (bottom of container reaches bottom of viewport)
      // End when container exits from top (top of container reaches top of viewport)
      const startScroll = viewportHeight - containerHeight;
      const endScroll = viewportHeight;
      const totalScrollRange = endScroll - startScroll;

      // Current position: when rect.top = viewportHeight (at bottom), progress = 0
      // when rect.top = 0 (at top), progress = 1
      const currentScroll = viewportHeight - rect.top;
      const scrollProgress = Math.min(1, Math.max(0, currentScroll / totalScrollRange));

      targetTimeRef.current = scrollProgress * video.duration;

      if (scrollProgress >= 0.99 && !isComplete) {
        setIsComplete(true);
      }
    };

    const handleScroll = () => {
      isScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);

      updateTargetTime();
    };

    const targetElement = scrollContainer || window;
    targetElement.addEventListener('scroll', handleScroll, { passive: true });

    updateTargetTime();
    rafRef.current = requestAnimationFrame(smoothUpdate);

    return () => {
      targetElement.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isVideoReady, scrollContainer, isComplete]);

  return (
    <div ref={containerRef} className={`relative ${className} bg-black`} style={{ height: '200vh' }}>
      <div className="sticky top-0 w-full h-screen flex items-start justify-start overflow-hidden">
        <div className="relative w-full h-full max-w-[1920px]">
          {error ? (
            <div className="absolute inset-0 bg-red-100 flex items-center justify-center z-10">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          ) : !isVideoLoaded ? (
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center z-10">
              <p className="text-slate-500 text-lg">Loading video...</p>
            </div>
          ) : null}

          {isComplete && posterImage ? (
            <img
              src={posterImage}
              alt="Video complete"
              className="absolute inset-0 w-full h-full transition-opacity duration-500 z-0"
              style={{ objectFit: 'cover', objectPosition: 'top left' }}
            />
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              className={`absolute inset-0 w-full h-full bg-slate-200 transition-opacity duration-500 z-0 ${
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
                objectFit: 'cover',
                objectPosition: 'top left',
              }}
            />
          )}

          {children && (
            <div className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center px-16 transition-opacity duration-1000 ${
              isComplete ? 'opacity-100 z-30' : 'opacity-0 z-30'
            }`}>
              <div className="text-white text-3xl font-medium max-w-xl">
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
