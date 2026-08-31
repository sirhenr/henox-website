# Henox Business Consultants Website

Corporate website for Henox Business Consultants Ltd, positioned as an East Africa-focused digital transformation and information-management partner.

## Positioning

Henox helps organizations transform paper-heavy processes into secure, searchable and efficient digital workflows through:

- Document digitization and backlog scanning
- Data capture, indexing and OCR
- Records management and electronic document management
- Workflow automation
- Digitization project management
- IT, database and business technology consultancy

## Architecture

The public website is a React + TypeScript + Vite application under `client/`. It is designed as a static frontend suitable for GitHub Pages or another static hosting platform.

The repository still contains legacy server/database configuration from the original development environment. These components are not part of the public website build and should only be reintroduced if a backend-powered Henox platform is intentionally developed.

## Development

```bash
npm ci
npm run dev
```

## Production validation

```bash
npm run check
npm run build
npm run preview
```

The production build is emitted to `dist/`.

## Deployment

- Pull requests are validated by GitHub Actions with TypeScript checking and a production build.
- Production deployment to GitHub Pages runs only from `main`.
- The GitHub repository's Pages configuration must use **GitHub Actions** as the build/deployment source.

## Regional strategy

The website is intentionally not tied to a single country. Henox is presented as an East African partner, while actual office locations, telephone numbers and market coverage should only be advertised where the business has an active presence or service capability.
