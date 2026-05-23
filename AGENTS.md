<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Memory & Documentation

## 1. Project Overview
This project is a premium Filipino MSME product marketplace showcasing local delicacies, artisan crafts, and handwoven apparel using a "Bold Localism" theme. It includes a redesigned high-converting landing page and a centralized demo page housing interactive components like shopping carts, product details, matchmaker quiz steps, and merchant registrations.

## 2. Directory Structure & Guide
- `/app` - Next.js App Router root directory
  - `/app/demo/page.tsx` - Route `/demo` displaying the marketplace components showcase
  - `/app/products/data.ts` - Local static database of 8 curated Filipino MSME products
  - `/app/context/CartContext.tsx` - Global React shopping cart state provider
  - `/app/components/Navbar.tsx` - Navigation header with animated sliding cart drawer
  - `/app/api/submit-lead/route.ts` - Lead/order collector endpoint sending buyer checkout and seller application parameters to GoHighLevel
  - `/app/globals.css` - Custom CSS classes, styles, and Tailwind v4 mapping
- `/public` - Static assets

## 3. Core Tech Stack
- Next.js 16.2.6 (App Router)
- React 19.2.4
- Tailwind CSS 4.x
- TypeScript 5.x
- ESLint 9.x

## 4. Engineering Rules & Mandates
- **UX Target**: Bold Localism theme (Vibrant Orange, Deep Indigo, Sunny Yellow, Paper White, Ink Black, 3px borders, 4px hard shadows). Minimum interactive element height of 48px, touch targets of 44x44px. Inputs min 16px to prevent iOS auto-zoom.
- **Copy Mandates**: English only on all UI copy. No Tagalog or Taglish. No em dashes in copywriting. Use credentials: "$10M+ revenue, 1,000+ trained" if credentials are shown.
- **Brand Color Application**: Deploy the brand colors using Product Background frames, Gradient Headings, Color on Grid blocks, and one unified Tint layout.
- **Show-Not-Tell**: Rewrite copy to focus on sensory details (aroma, texture, flavor) of local products instead of abstract labels.
- **UTMs & Analytics**: Capture UTM parameters on landing page, store in localStorage (first-touch/last-touch methodology), and forward to GHL custom fields.
- **Code Quality**: No `any` type (Strict TypeScript). Adhere to eslint configurations. Graceful server-side validation error handling.

## 5. Common Development Commands
- Run dev server: `npm run dev`
- Build app: `npm run build`
- Run linting checks: `npm run lint`
