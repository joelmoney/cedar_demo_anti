# Linear Mobile Demo

An offline-capable, linear storytelling demo web app designed for kiosks, desktop browsers, and mobile devices. Built with React, Framer Motion, and Vite PWA.

## Features

- **Offline-First**: Fully functional without internet after first load
- **PWA Ready**: Installable on mobile and desktop
- **Dual Modes**: Self-serve mode with auto-reset and presenter mode with controls
- **Premium Animations**: Smooth, controlled transitions under 300ms
- **Kiosk Hardening**: Disabled context menu, text selection, and zoom
- **Touch Optimized**: Tap-to-advance interaction with visual feedback
- **Responsive Layout**: Split-screen design with mobile shell simulation

## Usage

### Self-Serve Mode (Default)

- Tap anywhere on the mobile shell to advance through steps
- Select dropdown option on home screen to continue
- Auto-reset after 105 seconds of inactivity
- Returns to landing screen after completing all steps

### Presenter Mode

Activate by:
- Press `P` key
- Tap 5 times in the top-right corner

Controls:
- `Right Arrow` - Next step
- `Left Arrow` - Previous step
- `R` - Reset to beginning
- Step dropdown - Jump to specific step
- No auto-reset in presenter mode

## Structure

- **5 Steps**: Landing → Home → Features → Thank You
- **Left Panel (40%)**: Narrative content with headline, body text, and bullets
- **Right Panel (60%)**: Simulated mobile device showing interactive screens

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## PWA Installation

After deploying, users can install the app:
- **Desktop**: Click the install icon in the browser address bar
- **Mobile**: Use "Add to Home Screen" from the browser menu

## Technologies

- React 18
- TypeScript
- Vite
- Framer Motion
- Vite PWA Plugin
- Tailwind CSS
- Lucide React Icons
