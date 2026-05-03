# 🎬 StreamVault — Advanced OTT Streaming Platform

A **production-ready, fully functional OTT streaming web application** built with React + Redux Toolkit. **No API key required** — uses a rich built-in mock dataset.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

**Demo login:** any email + any password (6+ chars)
**Demo PIN:** 1234 / 5678 / 9012

---

## 🧩 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework + build tool |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing with guards |
| Tailwind CSS | Utility-first styling |
| React.lazy + Suspense | Code splitting per route |

---

## 🎯 Feature List

### Pages
| Page | Route | Description |
|---|---|---|
| Auth | `/auth` | Login + Signup (mock) |
| Profiles | `/profiles` | Multi-profile selector with PIN |
| Home | `/` | Banner + 8 genre rows |
| Categories | `/categories` | Filter, search, sort, infinite scroll |
| Watch | `/watch/:id` | Video player + details + similar |
| Continue Watching | `/continue-watching` | Resume playback |

### Advanced Features
- ✅ Redux Toolkit state (auth, watchlist, continue, theme, profiles, content)
- ✅ React.lazy code splitting (every page is a separate chunk)
- ✅ Class ErrorBoundary component
- ✅ Skeleton loaders (banner, rows, grid)
- ✅ Debounced search (450ms, via custom hook)
- ✅ Infinite scroll (IntersectionObserver hook)
- ✅ Dark / Light mode toggle (persisted)
- ✅ Multi-profile system with PIN protection
- ✅ Per-profile watchlist (localStorage)
- ✅ Per-profile continue watching + progress (localStorage)
- ✅ React.memo on all presentational components
- ✅ useMemo / useCallback in all heavy components
- ✅ Responsive (mobile + tablet + desktop)
- ✅ Lazy image loading with skeleton placeholders
- ✅ Vercel deployment ready

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Banner/          ← Hero with auto-rotate
│   ├── ErrorBoundary/   ← Class-based error boundary
│   ├── Footer/
│   ├── Loader/          ← Reusable spinner
│   ├── MovieCard/       ← Memoized card with hover overlay
│   ├── Navbar/          ← Sticky nav with profile dropdown
│   ├── SearchBar/       ← Debounced search input
│   ├── Skeleton/        ← Loading placeholders
│   └── SliderRow/       ← Horizontal scroll row
├── data/
│   └── mockData.js      ← 24 movies/shows, genres, profiles
├── hooks/
│   ├── useDebounce.js
│   └── useIntersectionObserver.js
├── pages/
│   ├── Auth/
│   ├── Categories/
│   ├── ContinueWatching/
│   ├── Home/
│   ├── Profiles/
│   └── Watch/
├── redux/
│   ├── store.js
│   └── slices/
│       ├── authSlice.js
│       ├── contentSlice.js
│       ├── continueSlice.js
│       ├── profileSlice.js
│       ├── themeSlice.js
│       └── watchlistSlice.js
└── App.jsx              ← Lazy routing + route guards
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```
The `vercel.json` SPA rewrite is already included.

### Netlify
```bash
npm run build
# Upload dist/ folder, set redirect: /* → /index.html 200
```

---

## 🎓 Viva Q&A

**Q: Why Redux Toolkit over Context API?**
A: RTK provides built-in async (createAsyncThunk), Immer-based immutability, devtools, and slices pattern — far more scalable for 6+ global states.

**Q: How does code splitting work here?**
A: Every page uses `React.lazy(() => import(...))` wrapped in `<Suspense>`. Vite creates separate JS chunks per page, loaded on demand.

**Q: How is the debounced search implemented?**
A: `useDebounce(query, 450)` returns the value only after 450ms of inactivity, preventing one API call per keypress.

**Q: How does the infinite scroll work?**
A: `useIntersectionObserver` attaches an `IntersectionObserver` to a sentinel div at the bottom of the grid. When visible, it dispatches `fetchByGenre` with `page + 1`.

**Q: Why no API key?**
A: The app uses a rich 24-item mock dataset in `mockData.js` with real image CDN (picsum.photos). Async thunks simulate network delay so loading states and skeletons work realistically.
