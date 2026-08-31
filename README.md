# Henox Business Consultants Website

The corporate website for **Henox Business Consultants Ltd**, positioned as an East African digital transformation and information-management partner.

## Positioning

Henox helps organizations move from paper-heavy processes to secure, searchable and efficient digital workflows through:

- Document digitization and backlog scanning
- Data capture and indexing
- Electronic document and records management
- Workflow automation
- Records and archive management
- Secure document disposal
- Digitization project consultancy and implementation

## Regional Market

The website is designed for organizations operating across East Africa. It does not imply that Henox has a physical office in every market; project coverage is scoped according to location, volume, security and delivery requirements.

## Technology

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui / Radix UI
- Wouter routing
- React Hook Form + Zod
- Lucide React + React Icons
- Google Analytics integration

## Development

```bash
npm install
npm run dev
```

The application currently uses the existing Node/Express development architecture. The public marketing experience is client-first, while the server layer is retained as a foundation for future lead management, client portal and business-platform capabilities.

## Production Direction

The roadmap is intentionally staged:

1. Corporate website and conversion experience
2. Lead capture and enquiry management
3. CRM / quotation workflow
4. Client project portal
5. Digitization project tracking and reporting
6. Broader Henox business platform integrations

## Engineering Principles

- Do not hard-code contact details across components; use `client/src/config/site.ts`.
- Do not publish unsupported pricing promises; quotations should be based on project scope.
- Keep `main` protected from experimental work. Regional redesign work is developed in a dedicated branch and promoted after review/testing.
- Avoid unsupported claims such as client counts, project volumes or certifications unless verified.

© 2026 Henox Business Consultants Ltd. All rights reserved.
