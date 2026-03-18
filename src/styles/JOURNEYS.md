# Journey Stylesheet Guide

This stylesheet provides consistent, reusable classes for all journey screens to maintain visual and behavioral consistency across the application.

## Layout Classes

### Container & Content
```tsx
<div className="journey-container">
  <div className="journey-content">
    <main className="journey-main">
      {/* Your content */}
    </main>
  </div>
</div>
```

**Variants:**
- `.journey-container.scrollable` - Hides scrollbar while keeping scroll functionality
- `.journey-main.top` - Aligns content to top instead of center

### Cards
```tsx
<div className="journey-card">
  {/* Card content */}
</div>

<div className="journey-card clickable">
  {/* Clickable card with hover effects */}
</div>
```

## Typography Classes

### Titles & Text
```tsx
<h1 className="journey-title">Main Title</h1>
<h2 className="journey-subtitle">Subtitle</h2>
<p className="journey-text">Body text</p>
<p className="journey-text small">Smaller text</p>
<p className="journey-text large">Larger text</p>
<label className="journey-label">Form Label</label>
```

## Form Elements

### Text Input
```tsx
<input
  type="text"
  className="journey-input"
  placeholder="Enter text..."
/>
```

### Textarea
```tsx
<textarea
  className="journey-textarea"
  placeholder="Enter longer text..."
/>
```

### Buttons
```tsx
<button className="journey-button">Primary Button</button>
<button className="journey-button secondary">Secondary Button</button>
```

### Checkboxes
```tsx
<label className="journey-checkbox">
  <input type="checkbox" />
  <span className="journey-text">Option text</span>
</label>

<label className="journey-checkbox selected">
  <input type="checkbox" checked />
  <span className="journey-text">Selected option</span>
</label>
```

### Radio Buttons
```tsx
<label className="journey-radio">
  <input type="radio" name="group" />
  <span className="journey-text">Option text</span>
</label>

<label className="journey-radio selected">
  <input type="radio" name="group" checked />
  <span className="journey-text">Selected option</span>
</label>
```

## Help Section

```tsx
<div className="journey-help-section">
  <div className="journey-help-icon">
    <LifeBuoy className="w-6 h-6" />
  </div>
  <h3 className="journey-help-title">We're here to help</h3>
  <p className="journey-help-text">
    We're available Mon-Fri, 8am-5pm ET to help with your account.
  </p>
  <a href="tel:1234567890" className="journey-help-button">
    Call 1 (123) 456-7890
  </a>
</div>
```

## UI Elements

### Icon Wrapper
```tsx
<div className="journey-icon-wrapper">
  <Icon className="w-8 h-8" />
</div>

<div className="journey-icon-wrapper large">
  <Icon className="w-12 h-12" />
</div>
```

### Badges
```tsx
<span className="journey-badge">Default</span>
<span className="journey-badge success">Success</span>
<span className="journey-badge warning">Warning</span>
<span className="journey-badge info">Info</span>
```

### Lists
```tsx
<ul className="journey-list">
  <li className="journey-list-item">
    <span className="journey-text">First item</span>
  </li>
  <li className="journey-list-item">
    <span className="journey-text">Second item</span>
  </li>
</ul>
```

### Divider
```tsx
<div className="journey-divider" />
```

## Complete Example

```tsx
import { LifeBuoy } from 'lucide-react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

export function ExampleJourneyScreen() {
  return (
    <div className="journey-container scrollable">
      <div className="journey-content">
        <JourneyHeader />

        <main className="journey-main">
          <div className="journey-card">
            <h1 className="journey-title">Screen Title</h1>
            <p className="journey-text">
              This is the main content of the screen.
            </p>

            <div className="journey-divider" />

            <div className="journey-help-section">
              <div className="journey-help-icon">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="journey-help-title">We're here to help</h3>
              <p className="journey-help-text">
                Contact us anytime.
              </p>
              <button className="journey-help-button">
                Get Help
              </button>
            </div>

            <button className="journey-button">
              Continue
            </button>
          </div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
```

## Design Principles

1. **Consistency**: All journeys use the same visual language
2. **Accessibility**: Proper focus states and contrast ratios
3. **Responsiveness**: Works on all screen sizes
4. **Touch-friendly**: Large enough tap targets (min 44px)
5. **Performance**: Uses CSS transitions, not JS animations where possible

## Color Palette

- **Background**: `#F5F7FA` (Light slate)
- **Card**: `#FFFFFF` (White)
- **Primary**: `#3B82F6` (Blue)
- **Primary Hover**: `#2563EB` (Darker blue)
- **Text Primary**: `#1E293B` (Dark slate)
- **Text Secondary**: `#475569` (Medium slate)
- **Border**: `#E2E8F0` (Light gray)
- **Help Section**: `#EEF2FF` (Light indigo)

## Typography Scale

- **Title**: 1.875rem (30px) / Bold
- **Subtitle**: 1.25rem (20px) / SemiBold
- **Body**: 1rem (16px) / Regular
- **Small**: 0.875rem (14px) / Regular
- **Label**: 0.875rem (14px) / Medium

## Best Practices

1. Use semantic HTML (proper heading levels, form labels, etc.)
2. Combine with Framer Motion for entrance animations
3. Add `reducedMotion` prop support for accessibility
4. Use consistent spacing between elements
5. Test on mobile devices for touch interactions
