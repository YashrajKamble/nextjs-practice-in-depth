## Next.js Practice Playground

This workspace is a **multi-app Next.js lab** for practicing the **App Router**, **React 19 RC patterns**, **data fetching**, **authentication**, and modern **routing** techniques.  
Each app is focused, small, and mirrors how production-grade Next.js 15 projects are being built today.

---

## Tech Stack & Concepts

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19.0.0 RC (Server & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + modern CSS utilities
- **Auth**: Clerk (`@clerk/nextjs`) with middleware-based protection
- **Data Layer**: Prisma + SQLite (for data-fetching demos)
- **APIs**: Route Handlers in the `app` directory
- **Deployment Target**: Vercel-ready setup (Edge-friendly patterns where suitable)

This setup reflects **current industry trends**: App Router-first architecture, server-centric data fetching, server actions, and tightly integrated authentication.

---

## Project Structure

The workspace consists of several independent Next.js apps:

- **`hello-world/` – App Router Basics**
  - Minimal Next.js 15 App Router example.
  - Simple `layout`, `page`, and `globals.css`.
  - Good first touchpoint for folder structure, metadata, and routing.

- **`rendering-demo/` – Rendering Strategies**
  - Demonstrates:
    - **Server Components** vs **Client Components**
    - **Suspense** and streaming-like patterns
    - Layout composition and shared UI (for example, navbars and nested layouts)
  - Example routes include:
    - `about`
    - `products` and `products/[id]`
    - `interleaving`, `client-route`, `server-route`
    - Landing-style pages emphasizing UX patterns

- **`routing-demo/` – Routing Patterns & UX**
  - Focuses on **advanced routing features**:
    - Nested routes and layouts
    - Dynamic segments: `products/[productId]`, `articles/[articleId]`, `blog/[slug]`
    - **Catch-all and optional catch-all** segments: for example, `docs/[[...slug]]`
    - **Parallel routes** (using `@` slots) and **intercepting routes** (for example, `(.)`, `(..)` segments)
    - Custom `not-found` and `error` boundaries
  - Includes simple auth-style routes:
    - `(auth)/login`, `(auth)/register`, `(auth)/layout`
  - A solid reference for navigation and UX flows in the App Router.

- **`route-handlers-demo/` – API Routes & Middleware**
  - Shows how to implement APIs via **Route Handlers** in the `app` directory:
    - Versioned endpoints such as `api/v1/users` and `api/v2/users`
    - REST-style handlers using `GET`, `POST`, and other HTTP methods
  - Demonstrates:
    - Using **middleware** for cross-cutting concerns (for example, logging and simple auth stubs)
    - Clear separation of routing concerns between pages and APIs
  - Ideal for understanding how to replace legacy `pages/api` with `app`-based handlers.

- **`data-fetching-demo/` – Database & Server Actions**
  - Uses **Prisma + SQLite** to show real data flows:
    - `products-db/` – list, details, and edit screens for products
    - `products-db/[id]` – detail/edit pages backed by the database
    - `products-db-create/` – creation forms and mutations
  - Covers multiple data-fetching patterns:
    - `users-server/` – server-side data fetching
    - `users-client/` – client-side fetching with hooks
    - `user-parallel/` – parallel fetching and concurrent UI
    - `post-sequential` – sequential fetching and loading states
  - Includes modern **Server Actions** demos:
    - `react-form/` with forms using `useFormStatus`, `useActionState`, and related patterns
  - Mirrors how production apps combine **Server Components** and **Server Actions** with a real database.

- **`authentication-demo/` – Clerk Auth Integration**
  - Focused on **authentication and authorization** using Clerk:
    - **Sign-in**: `src/app/sign-in/[[...sign-in]]/page.tsx`
    - **Sign-up**: `src/app/sign-up/[[...sign-up]]/page.tsx`
    - **User profile**: `src/app/user-profile/[[...user-profile]]/page.tsx`
  - Protected application areas:
    - `src/app/dashboard/page.tsx` – standard authenticated dashboard
    - `src/app/admin/page.tsx` – admin-only area with server-side checks (see `admin/action.ts`)
  - Core infrastructure:
    - `src/middleware.ts` – protects routes based on auth state and redirects unauthenticated users
    - `src/components/navigation.tsx` – responsive navigation that reflects signed-in/signed-out state
    - `src/components/counter.tsx` – small client component example integrated into the app
  - Aligned with **current best practices**:
    - App Router + Clerk middleware
    - `@clerk/nextjs` components and hooks
    - Role/permission-style checks server-side for sensitive routes

---

## How to Use This Repository (High-Level Steps)

1. **Explore the structure**
   - Start at the workspace root and identify each app folder: `hello-world`, `rendering-demo`, `routing-demo`, `route-handlers-demo`, `data-fetching-demo`, and `authentication-demo`.

2. **Install dependencies**
   - From each app directory that has a `package.json` (for example, `authentication-demo`), run:
     - `npm install` (or `yarn install`, `pnpm install` as preferred).

3. **Configure environment variables where needed**
   - For authentication (Clerk) and data-fetching (Prisma + SQLite), set the appropriate environment variables in `.env` / `.env.local` files (for example, Clerk keys and `DATABASE_URL`).

4. **Run individual apps**
   - In a given app directory, run `npm run dev` and open `http://localhost:3000` in a browser.
   - Run one app per port at a time for clarity while learning.

5. **Study patterns and code**
   - Move through apps in a learning-friendly order: `hello-world` → `rendering-demo` → `routing-demo` → `route-handlers-demo` → `data-fetching-demo` → `authentication-demo`.

---

## Tutorial Reference & Coverage Status

This workspace is based on the following reference tutorial:

- **Reference link**: `https://youtu.be/k7o9R6eaSes?si=spCTbFuzp5e7cO8o`

The following segments from the tutorial are **not implemented** in this repository (or are explicitly noted):

- **Multiple root layouts**  
  - Time range: `01:00:25` to `01:03:44`  
  - Status: not included.

- **Rendering (general section)**  
  - Time range: `03:18:55` to `03:20:14`  
  - Status: not included.

- **Client Side Rendering**  
  - Time range: `03:20:15` to `03:23:27`  
  - Status: not included.

- **Server Side Rendering**  
  - Time range: `03:23:28` to `03:28:16`  
  - Status: not included.

- **Suspense SSR**  
  - Time range: `03:28:17` to `03:34:43`  
  - Status: not included.

- **React Server Component (RSC)**  
  - Time range: `03:34:44` to `03:41:14`  
  - Status: not included.

- **Rendering Life Cycle in RSCs**  
  - Time range: `03:47:44` to `03:50:56`  
  - Status: not included.

- **Server and client composition patterns**  
  - Time range: `04:18:26` to `04:19:27`  
  - Status: not included.

- **Fetching from a database**  
  - Time range: `05:15:20` to `05:21:46`  
  - Status: code corresponding to this section was added; it initially had bugs but has since been fixed successfully (bug fixed successfully).

- **Pending (`useFormStatus`) vs `isPending` (`useActionState`)**  
  - Time range: `05:44:32` to `05:46:02`  
  - Status: not included.

---

## Conclusion

This repository provides a structured, multi-app environment to practice modern Next.js 15, React 19 RC, and related ecosystem tools in a focused, realistic way.  
By following the project structure, reference notes, and coverage details above, a new developer can quickly understand what is implemented, what is intentionally omitted, and how to extend the workspace for further learning or experimentation.