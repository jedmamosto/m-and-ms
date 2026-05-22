<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Memory & Documentation

## 1. Project Overview
This project is a premium Next.js conversion funnel and diagnostic quiz application built for a web development agency selling custom systems and funnels to MSMEs. It integrates landing pages, qualification surveys, recommendation engines, GHL calendar booking, and UTM parameters tracking pipelines.

## 2. Directory Structure & Guide
- `/app` - Next.js App Router root directory
  - `/app/api/submit-lead/route.ts` - Leads collector endpoint sending contacts and quiz data to GoHighLevel
  - `/app/quiz` - Multi-step diagnostic survey page
  - `/app/recommendation` - Quiz scoring recommendation router
  - `/app/book` - Dynamic GoHighLevel calendar pre-fill booking portal
  - `/app/globals.css` - CSS styles and Tailwind v4 mapping for Bold Localism Theme
- `/public` - Static assets

## 3. Core Tech Stack
- Next.js 16.2.6 (App Router)
- React 19.2.4
- Tailwind CSS 4.x
- TypeScript 5.x
- ESLint 9.x

## 4. Engineering Rules & Mandates
- **UX Target**: Bold Localism theme (Vibrant Orange, Deep Indigo, Sunny Yellow, Paper White, Ink Black, 3px borders, 4px hard shadows). Minimum interactive element height of 48px, touch targets of 44x44px. Inputs min 16px to prevent iOS auto-zoom.
- **Conversion UX**: Stripped navigation on landing page. Above-the-fold benefit headline (<12 words), sub-headline (<20 words), primary CTA, and proof stats row.
- **Form & Scoring**: Single-column layouts, inline validation, qualification scoring threshold >= 70, hard disqualifiers (budget < $1k, timeline = "Exploring", commitment < 7).
- **UTMs & Analytics**: Capture UTM parameters on landing page, store in localStorage (first-touch/last-touch methodology), forward to GHL custom fields.
- **Code Quality**: No `any` type (Strict TypeScript). Adhere to eslint configurations. Graceful server-side validation error handling.

## 5. Common Development Commands
- Run dev server: `npm run dev`
- Build app: `npm run build`
- Run linting checks: `npm run lint`
