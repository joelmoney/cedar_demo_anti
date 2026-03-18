export const colors = {
  background: {
    dark: '#1B2C2C',
    light: '#F9F8F1',
    slate: '#F8FAFC',
    white: '#FFFFFF',
  },
  text: {
    primaryDark: '#0F130A',
    primaryLight: '#F9F8F1',
    secondary: '#6E6E6E',
    accent: '#2D3A20',
  },
  border: {
    light: '#E2E8F0',
    medium: '#CBD5E1',
  },
  interactive: {
    primary: '#3B82F6',
    hover: '#2563EB',
  },
} as const;

export const fonts = {
  sans: 'Rethink Sans, system-ui, sans-serif',
  mono: 'DM Mono, monospace',
  serif: 'Gambarino, serif',
} as const;

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: '350ms cubic-bezier(0.2, 0.8, 0.2, 1)',
} as const;

export const easings = {
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  smooth: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
} as const;
