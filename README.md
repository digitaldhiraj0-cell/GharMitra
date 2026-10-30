# GharMitra Business Group marketplace

A Next.js App Router foundation for GharMitra, based in Tikapur-1, Kailali. The repository includes a responsive branded public site, service discovery, request and registration UI previews, a PostgreSQL Prisma schema and local setup files.

## Run locally

1. Install Node.js 20.9+ and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a long random `SESSION_SECRET`.
3. Run `npm install`.
4. Run `npm run db:generate` and `npm run db:migrate`.
5. Run `npm run dev`, then open http://localhost:3000.

## Current implementation scope

The homepage, about, services, providers, request, contact, login, registration and 404 routes have responsive page layouts. The request and account forms intentionally communicate that submission and authentication are previews: no customer or provider records are accepted until secure server actions, validation, rate limiting, authorization, migrations and session management are implemented. Provider directory currently displays no fabricated or unapproved profiles. External image URLs are used as visual placeholders; replace with client-owned images and configure a managed image host for production.

The Prisma schema models users and roles, customer and provider profiles, provider review status, categories and services, requests, assignments, quotations, bookings, projects, reviews, saved providers, blog content, inquiries, notifications, media, settings, translations and audit logs. No database credentials or live integrations are included.

## Production work still required

- Implement secure authentication with password hashing, opaque HttpOnly sessions, CSRF protections where relevant, rate limits and account recovery.
- Add protected server actions and API routes, Zod validation, customer privacy controls and admin authorization.
- Create migrations and real seed data after PostgreSQL is configured. Seed only the supplied official business details; do not seed fictional reviews or verified providers.
- Build customer, provider and admin dashboards; provider approvals; request assignment; quotation comparison/PDFs; booking, email and notification workflows.
- Configure storage, mail, domain, backups, monitoring and deployment environment variables.
- Complete workflow, accessibility, responsive and production-build verification before real customer use.

## Business details

GharMitra Business Group · Tikapur-1, Kailali, Nepal · 9768097118 · group.gharmitra@gmail.com
