# Design System

This directory contains the centralized design tokens and style configuration for the application.

## Usage

### For Inline Styles (React components)

Import design tokens from `design-tokens.ts`:

```tsx
import { colors, fonts, fontSizes, easings } from '../../styles/design-tokens';

<div style={{
  backgroundColor: colors.background.light,
  color: colors.text.primaryDark,
  fontFamily: fonts.sans,
  fontSize: fontSizes['2xl']
}}>
  Content
</div>
```

### For Tailwind Classes

Use the extended Tailwind classes directly:

```tsx
<div className="bg-background-light text-text-primary-dark font-sans text-2xl">
  Content
</div>
```

### For CSS Variables

Access CSS custom properties in stylesheets or inline:

```css
.my-component {
  background-color: var(--color-background-light);
  color: var(--color-text-primary-dark);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-2xl);
}
```

## Design Tokens

### Colors

**Backgrounds:**
- `colors.background.dark` - `#1B2C2C` - Dark teal background
- `colors.background.light` - `#F9F8F1` - Cream/off-white background
- `colors.background.slate` - `#F8FAFC` - Light slate background
- `colors.background.white` - `#FFFFFF` - Pure white

**Text:**
- `colors.text.primaryDark` - `#0F130A` - Dark text on light backgrounds
- `colors.text.primaryLight` - `#F9F8F1` - Light text on dark backgrounds
- `colors.text.secondary` - `#6E6E6E` - Secondary/muted text
- `colors.text.accent` - `#2D3A20` - Accent text color

**Borders:**
- `colors.border.light` - `#E2E8F0` - Light border
- `colors.border.medium` - `#CBD5E1` - Medium border

**Interactive:**
- `colors.interactive.primary` - `#3B82F6` - Primary interactive color
- `colors.interactive.hover` - `#2563EB` - Hover state

### Typography

**Font Families:**
- `fonts.sans` - Rethink Sans (body text, UI elements)
- `fonts.mono` - DM Mono (code, technical content)
- `fonts.serif` - Gambarino (headings, emphasis)

**Font Sizes:**
- `xs` - 0.75rem (12px)
- `sm` - 0.875rem (14px)
- `base` - 1rem (16px)
- `lg` - 1.125rem (18px)
- `xl` - 1.25rem (20px)
- `2xl` - 1.5rem (24px)
- `3xl` - 1.875rem (30px)
- `4xl` - 2.25rem (36px)
- `5xl` - 3rem (48px)
- `6xl` - 3.75rem (60px)

**Font Weights:**
- `light` - 300
- `regular` - 400
- `medium` - 500
- `semibold` - 600
- `bold` - 700
- `extrabold` - 800

### Spacing

- `xs` - 0.25rem (4px)
- `sm` - 0.5rem (8px)
- `md` - 1rem (16px)
- `lg` - 1.5rem (24px)
- `xl` - 2rem (32px)
- `2xl` - 3rem (48px)
- `3xl` - 4rem (64px)

### Border Radius

- `sm` - 0.375rem (6px)
- `md` - 0.5rem (8px)
- `lg` - 0.75rem (12px)
- `xl` - 1rem (16px)
- `2xl` - 1.5rem (24px)
- `full` - 9999px (fully rounded)

### Shadows

- `sm` - Subtle shadow for slight elevation
- `md` - Medium shadow for cards
- `lg` - Large shadow for modals
- `xl` - Extra large shadow for prominent elements

### Transitions

- `fast` - 150ms - Quick interactions (hover states)
- `base` - 200ms - Standard transitions
- `slow` - 300ms - Slower, more deliberate transitions
- `smooth` - 350ms - Smooth, polished animations

**Easings:**
- `ease` - `[0.4, 0, 0.2, 1]` - Standard easing
- `smooth` - `[0.2, 0.8, 0.2, 1]` - Smooth, natural easing

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Prefer Tailwind classes** for simple styling
3. **Use inline styles with tokens** when dynamic or conditional styling is needed
4. **Use CSS variables** in custom stylesheets or complex components
5. **Maintain consistency** by using the same token for the same purpose
6. **Don't add one-off values** - extend the design system if needed

## Examples

### Button Component

```tsx
import { colors, fonts } from '../../styles/design-tokens';

<button
  className="rounded-2xl px-12 py-8 shadow-xl"
  style={{
    backgroundColor: colors.background.light,
    color: colors.text.primaryDark,
    fontFamily: fonts.sans
  }}
>
  Click me
</button>
```

### Heading with Tailwind

```tsx
<h1 className="font-gambarino text-6xl font-bold text-text-primary-light">
  Welcome
</h1>
```

### Mixed Approach

```tsx
<div className="space-y-6 max-w-xl mx-auto">
  <p style={{ color: colors.text.secondary, fontFamily: fonts.sans }}>
    Some content
  </p>
</div>
```
