# mapIT

A simple React + Vite app that lists posts from JSONPlaceholder with a searchable, scrollable table using PrimeReact.

## Stack

- **React** `^19.1.1`
- **Vite** `^7.1.7`
- **PrimeReact** `^10.9.7` and **primeicons** `^7.0.0`
- **ESLint** `^9` with React Hooks and React Refresh plugins

## Key Features

- **Data fetching** from `https://jsonplaceholder.typicode.com/posts` in `src/hook/List/useList.jsx`.
- **Loading state** shown via PrimeReact `DataTable` `loading` overlay.
- **Error handling** with `Toast` (`primereact/toast`) for fetch failures.
- **Search** by Title with live filtering (`titleQuery`) and memoized `filteredData`.
- **Body truncation** to 100 chars in a custom `bodyTemplate`.
- **Scrollable table** using `DataTable` `scrollable` + `scrollHeight="flex"` with a fixed container height in `src/components/List/List.css`.

## Project Structure (relevant)

- `src/main.jsx`: App entry (StrictMode currently removed for dev).
- `src/App.jsx`: App shell.
- `src/components/List/List.jsx`: UI for search input and PrimeReact `DataTable`.
- `src/components/List/List.css`: Styles for search and table container height.
- `src/hook/List/useList.jsx`: Data fetching, loading/error state, search state, and templates exposed to the component.

## Prerequisites

- **Node.js** 18+ (Vite 7 requires Node ^18.0.0 or >=20.0.0)
- **npm** 9+ (or a compatible package manager)

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

This starts the Vite dev server. Open the printed URL (usually `http://localhost:5173`).

## Lint

```bash
npm run lint
```

## Notes

- If you re-enable `React.StrictMode` in `src/main.jsx`, effects can run twice in development. Avoid duplicate toasts by guarding error notifications if needed.
- For large datasets, consider `virtualScrollerOptions` on `DataTable` for better performance.
