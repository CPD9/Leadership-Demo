# Leadership Demo

**Meeting intelligence (study project).** This repository adapts a full-stack audio-processing pipeline toward a narrower goal: **transcribe conversations, surface practical insights, and support better meetings**—without extra scope (no emotion models, no sentiment product, no vertical-specific packaging in this MVP).

The codebase still reflects its origin (podcast-oriented copy and flows in places). The **intended direction** is:

| Phase | Focus |
|--------|--------|
| **Now** | Stable upload → transcription → structured outputs using existing services |
| **Next** | Speaker-aware stats, key moments, **action items**, and **recommendations** for running meetings |

That roadmap reuses the same stack: **Vercel Blob → Next.js → Clerk → Convex → Inngest → AssemblyAI / OpenAI**.

---

## Why this exists (original work)

This project documents an **independent study** in applied software: how modern SaaS primitives (auth, object storage, realtime DB, workflow runners, and speech + LLM APIs) combine into a single pipeline. The implementation choices and write-up are **my own**; the starter patterns draw on publicly documented stacks, refactored for this research question.

---

## Stack

- **Framework:** Next.js (App Router)
- **Auth:** Clerk
- **Data / realtime:** Convex
- **Files:** Vercel Blob (direct client upload with server-issued token)
- **Jobs:** Inngest
- **Speech-to-text:** AssemblyAI
- **Text generation:** OpenAI

---

## Local development

1. **Install dependencies** (e.g. `pnpm install`).
2. **Environment:** copy `.env.example` to `.env.local` and fill values. Never commit `.env.local`.
3. **Vercel Blob:** create a Blob store, add `BLOB_READ_WRITE_TOKEN` to `.env.local`, and **link the Blob store to your Vercel project** (or use the token from the store’s Quickstart). Without a valid token and a consistent setup, browser uploads to Blob can fail with **400** / **CORS-looking** errors.
4. **Run services** (typically separate terminals):
   - Convex: `pnpm convex dev`
   - Inngest dev: `npx inngest-cli@latest dev`
   - App: `pnpm dev`

Open `http://localhost:3000` after the app is listening.

---

## Deploying

Connect the GitHub repository to Vercel, attach the same Blob store to that project, and configure production environment variables to match `.env.example` (Convex URL, Clerk, Blob token, Inngest, AssemblyAI, OpenAI).

---

## Repository

Remote: `https://github.com/CPD9/Leadership-Demo.git`

---

## License

See repository license file if present; course or institutional rules apply to submission of this work.
