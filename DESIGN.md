---
name: Bold Localism
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#5b4137'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#8f7065'
  outline-variant: '#e4beb1'
  surface-tint: '#a73a00'
  primary: '#a73a00'
  on-primary: '#ffffff'
  primary-container: '#ff5c00'
  on-primary-container: '#521800'
  inverse-primary: '#ffb59a'
  secondary: '#4f51be'
  on-secondary: '#ffffff'
  secondary-container: '#8b8dfd'
  on-secondary-container: '#1e1b8f'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#caa900'
  on-tertiary-container: '#4c3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#802a00'
  secondary-fixed: '#e1dfff'
  secondary-fixed-dim: '#c1c1ff'
  on-secondary-fixed: '#08006c'
  on-secondary-fixed-variant: '#3737a4'
  tertiary-fixed: '#ffe170'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Bricolage Grotesque
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  button-text:
    fontFamily: Bricolage Grotesque
    fontSize: 16px
    fontWeight: '800'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  border-width: 3px
---

## Brand & Style
This design system captures the raw energy of a bustling neighborhood festival. It is unapologetically loud, handmade, and community-centric. The personality is "Aggressive Friendliness"—combining high-impact visuals with welcoming, accessible elements.

The style is a hybrid of **High-Contrast / Bold** and **Brutalism**, softened by extreme roundedness and organic textures. It avoids the clinical perfection of traditional SaaS interfaces in favor of a "printed flyer" aesthetic. 

**Key Visual Principles:**
- **High-Impact Contrast:** Every element should pop against its neighbor.
- **Physicality:** Use paper-grain textures and subtle "ink-bleed" effects to simulate handmade community posters.
- **Vibrancy:** Animation should be snappy and bouncy, mirroring the energy of a street fair.

## Colors
The palette is built on "Festival Primaries"—colors that demand attention and evoke optimism.

- **Primary (Vibrant Orange):** Used for main actions and urgent community alerts.
- **Secondary (Deep Indigo):** Provides the grounding weight for headers and structural elements; used as the "ink" color.
- **Tertiary (Sunny Yellow):** Used for highlights, badges, and secondary attention-grabbers.
- **Neutral (Paper White):** A warm, off-white background with a slight toothy texture, avoiding the harshness of pure #FFFFFF.
- **Ink Black:** A near-black (#1A1A1A) used for borders and heavy body text to ensure maximum readability against the vibrant palette.

## Typography
The typography strategy utilizes **Bricolage Grotesque** for its quirky, variable-width personality, making headers feel unique and "hand-set." **Work Sans** is used for body copy to maintain grounded reliability and high legibility in data-heavy marketplace listings.

**Rules:**
- All headlines must use tight letter spacing.
- Body text should maintain a generous line height to balance the "chunky" nature of the headers.
- Use uppercase for labels and buttons to maximize the "Bold Localism" impact.

## Layout & Spacing
This design system uses a **Fluid Grid** with oversized gutters to provide "breathing room" between intense color blocks.

- **Grid Model:** 12-column desktop grid with a 24px gutter.
- **Rhythm:** An 8px base unit drives all spacing, but "optical centering" is preferred over rigid mathematical precision to maintain the handmade feel.
- **Mobile Reflow:** Components stack vertically with 16px margins. Cards should span the full width minus margins to maximize "thumb-ability."

## Elevation & Depth
Depth is created through **Bold Borders** and **Offset Shadows** rather than realistic blurs.

- **The "Hard Shadow":** Instead of soft blurs, use 100% opacity shadows offset by 4px or 8px (usually in Secondary Deep Indigo) to make elements pop off the "paper" background.
- **Tonal Layers:** Use color-blocking to define hierarchy. A Yellow card on an Indigo background creates immediate depth without needing shadows.
- **Stroke-based Hierarchy:** Every interactive element must have a 3px border in Ink Black or Deep Indigo to define its boundary.

## Shapes
The shape language is "Chunky and Friendly."

- **Base Radius:** 8px for smaller components (chips, inputs).
- **Large Radius:** 16px to 24px for cards and containers.
- **The "Squircle" Influence:** Avoid perfect circles unless for icons; prefer heavily rounded rectangles that feel like molded clay or cut paper.

## Components
- **Buttons:** Must be 3px-bordered with a 4px hard-offset shadow. On hover, the shadow disappears and the button "sinks" (Translate Y: 4px).
- **Cards:** Use a "Paper White" background with a 3px border. Card headers should be color-blocked in Sunny Yellow or Vibrant Orange.
- **Chips/Tags:** Use Tertiary Yellow with 8px rounded corners and bold Bricolage labels.
- **Input Fields:** Thick 3px borders. The focus state should change the border color to Primary Orange and increase the border width to 4px.
- **Lists:** Items should be separated by heavy horizontal lines (2px) rather than whitespace, mimicking a ledger or community board.
- **Stickers (Custom Component):** Circular or starburst-shaped badges used for "New" or "Sold" items, using high-contrast color combinations (Yellow on Indigo) and rotated at a 5-degree angle.