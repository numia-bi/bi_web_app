# MRR Dashboard - numia

A React-based MRR (Monthly Recurring Revenue) dashboard that replicates the Power BI layout.

## Features

- Top KPI bar with Clientes, Closed MRR, MRR Pending Activation, and Active MRR
- Three-level filtering: Estado Suscripción, Segmentación, Account Executive
- Search functionality for Ref, Cliente Odoo, and Logo
- Comprehensive MRR table with 10 columns
- Real-time calculation of totals based on active filters
- Mock data with 60 realistic entries

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- shadcn/ui components
- Radix UI primitives

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

## Project Structure

- `/src/components/` - React components (KpiBar, Filters, SearchRow, MrrTable)
- `/src/components/ui/` - shadcn/ui base components
- `/src/data/` - Mock data generator
- `/src/types/` - TypeScript type definitions
- `/src/lib/` - Utility functions

## Notes

- All data is mock data (no backend/API in this version)
- Filters and searches work client-side
- KPIs recalculate based on active filters
- Table styling matches Power BI dense/compact layout
