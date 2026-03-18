export interface Step {
  id: number;
  headline: string;
  body: string;
  bullets?: string[];
  instruction?: string;
  screen: 'landing' | 'home' | 'feature';
}

export const steps: Step[] = [
  {
    id: 0,
    headline: 'Welcome to the Future',
    body: 'Experience a seamless, linear storytelling demo designed for kiosks and mobile.',
    instruction: 'Tap anywhere to begin',
    screen: 'landing',
  },
  {
    id: 1,
    headline: 'Start Your Journey',
    body: 'Select an option to explore the interface. Every choice moves you forward.',
    bullets: [
      'Intuitive navigation',
      'Offline-ready experience',
      'Touch-optimized design',
    ],
    instruction: 'Make a selection to continue',
    screen: 'home',
  },
  {
    id: 2,
    headline: 'Feature One',
    body: 'Discover powerful capabilities built for modern workflows.',
    bullets: [
      'Real-time updates',
      'Smart automation',
      'Collaborative tools',
    ],
    instruction: 'Tap to continue',
    screen: 'feature',
  },
  {
    id: 3,
    headline: 'Feature Two',
    body: 'Built with performance and accessibility at the core.',
    bullets: [
      'Lightning-fast performance',
      'Accessible to everyone',
      'Works offline',
    ],
    instruction: 'Tap to continue',
    screen: 'feature',
  },
  {
    id: 4,
    headline: 'Thank You',
    body: 'This demo showcases a controlled, linear experience perfect for presentations and kiosks.',
    bullets: [
      'No internet required',
      'Installable as PWA',
      'Presenter mode available',
    ],
    instruction: 'Tap to restart',
    screen: 'feature',
  },
];
