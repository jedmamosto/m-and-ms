---
name: design-system
description: Design tokens and component specs for premium-feeling funnel pages — color palettes, typography, spacing, buttons, cards, forms, animation. Use when the user says "make this look premium", "the page looks cheap", "give me design tokens", "set up the theme", "spec the buttons and cards", "build the design system before the page", or starts a new Lovable or Framer build. Returns CSS variable token tables ready to paste into Tailwind config, Lovable theme, or Framer styles. Skip if the user is asking for offer construction, avatar work, message strategy, copy voice, or layout/CTA placement — defer to launchmap-offer, launchmap-avatar, launchmap-mdm, magnetic-story / cris-vinson-storybank, or `conversion-ux` for layout decisions.
---

# Design System: Bold Localism

Premium visual language for funnel pages based on a high-contrast, brutalist, and festival-inspired aesthetic ("Aggressive Friendliness").

## Brand & Style Mandate
- **High-Impact Contrast:** Every element must pop against its neighbors.
- **Physicality:** Use paper-grain textures (`.noise-bg`) and offset shadows to simulate handmade posters.
- **Vibrancy:** Snappy, bouncy animations and transitions.
- **Stroke-based Hierarchy:** Every interactive element must have a 3px border in Ink Black or Deep Indigo.

## Colors
- **Primary (Vibrant Orange):** `#a73a00`
- **Secondary (Deep Indigo):** `#4f51be`
- **Tertiary (Sunny Yellow):** `#705d00`
- **Neutral (Paper White):** `#fbf9f4`
- **Ink Black:** `#1b1c19`

### Tailwind CSS v4 Theme Map
```css
:root {
  --surface: #fbf9f4;
  --surface-dim: #dbdad5;
  --surface-bright: #fbf9f4;
  --surface-container-lowest: #ffffff;
  --surface-container-low: #f5f3ee;
  --surface-container: #f0eee9;
  --surface-container-high: #eae8e3;
  --surface-container-highest: #e4e2dd;
  --on-surface: #1b1c19;
  --on-surface-variant: #5b4137;
  --inverse-surface: #30312e;
  --inverse-on-surface: #f2f1ec;
  --outline: #8f7065;
  --outline-variant: #e4beb1;
  --surface-tint: #a73a00;
  --primary: #a73a00;
  --on-primary: #ffffff;
  --primary-container: #ff5c00;
  --on-primary-container: #521800;
  --inverse-primary: #ffb59a;
  --secondary: #4f51be;
  --on-secondary: #ffffff;
  --secondary-container: #8b8dfd;
  --on-secondary-container: #1e1b8f;
  --tertiary: #705d00;
  --on-tertiary: #ffffff;
  --tertiary-container: #caa900;
  --on-tertiary-container: #4c3e00;
  --error: #ba1a1a;
  --on-error: #ffffff;
  --error-container: #ffdad6;
  --on-error-container: #93000a;
  --primary-fixed: #ffdbce;
  --primary-fixed-dim: #ffb59a;
  --on-primary-fixed: #370e00;
  --on-primary-fixed-variant: #802a00;
  --secondary-fixed: #e1dfff;
  --secondary-fixed-dim: #c1c1ff;
  --on-secondary-fixed: #08006c;
  --on-secondary-fixed-variant: #3737a4;
  --tertiary-fixed: #ffe170;
  --tertiary-fixed-dim: #e9c400;
  --on-tertiary-fixed: #221b00;
  --on-tertiary-fixed-variant: #544600;
  --background: #fbf9f4;
  --on-background: #1b1c19;
  --surface-variant: #e4e2dd;
}
```

## Typography Scale
- **font-family:**
  - `Bricolage Grotesque` (Headings, buttons, labels)
  - `Work Sans` (Body, text)
- **font-size:**
  - `display-lg`: 64px, line-height 1.1, weight 800, letter-spacing -0.02em
  - `headline-lg`: 40px, line-height 1.2, weight 800
  - `headline-lg-mobile`: 32px, line-height 1.2, weight 800
  - `headline-md`: 24px, line-height 1.3, weight 700
  - `body-lg`: 18px, line-height 1.6, weight 400
  - `body-md`: 16px, line-height 1.5, weight 400
  - `label-bold`: 14px, line-height 1.2, weight 700
  - `button-text`: 16px, line-height 1, weight 800

## Rounded & Spacing
- **Rounded:** `sm` (4px), `DEFAULT` (8px), `md` (12px), `lg` (16px), `xl` (24px), `full` (9999px)
- **Spacing rhythm:** `unit` (4px), `stack-sm` (8px), `stack-md` (16px), `gutter` (24px), `stack-lg` (32px), `margin-mobile` (16px), `margin-desktop` (48px)
- **Borders:** `border-width` (3px) in Ink Black / Deep Indigo for interactive components.

## Component Specifications
- **Buttons (`.cta-primary`):** 3px-bordered with a 4px hard-offset shadow. Hover removes the shadow and sinks the button (`translateY(4px) translateX(4px)`).
- **Cards (`.card`):** "Paper White" background with 3px border and 4px offset shadow. Card headers color-blocked in Sunny Yellow or Vibrant Orange.
- **Input Fields (`.form-input`):** 3px border. Focus shifts to 4px primary orange border (compensating with padding to avoid layout shift).
- **Chips/Tags (`.tag`):** Sunny Yellow, 8px rounded corners, bold Bricolage labels.
- **Stickers (`.sticker`):** Circular badge, Yellow on Indigo high-contrast, rotated 5 degrees.
