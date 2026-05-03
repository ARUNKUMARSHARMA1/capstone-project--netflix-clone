// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Loader from './components/Loader/Loader'

// Lazy-loaded pages — code splitting via React.lazy
const Home            = lazy(() => import('./pages/Home/Home'))
const Categories      = lazy(() => import('./pages/Categories/Categories'))
const Watch           = lazy(() => import('./pages/Watch/Watch'))
const Profiles        = lazy(() => import('./pages/Profiles/Profiles'))
const Auth            = lazy(() => import('./pages/Auth/Auth'))
const ContinueWatching = lazy(() => import('./pages/ContinueWatching/ContinueWatching'))

// Route guards
function PrivateRoute({ children }) {
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/auth" replace />
}

function ProfileRoute({ children }) {
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)
  const activeProfile   = useSelector(s => s.profile.activeProfile)
  if (!isAuthenticated) return <Navigate to="/auth" replace />
  if (!activeProfile)   return <Navigate to="/profiles" replace />
  return children
}

function PublicRoute({ children }) {
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)
  return isAuthenticated ? <Navigate to="/profiles" replace /> : children
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader fullscreen message="Loading StreamVault…" />}>
          <Routes>
            {/* Public */}
            <Route path="/auth" element={<PublicRoute><Auth /></PublicRoute>} />

            {/* Requires login, profile optional */}
            <Route path="/profiles" element={<PrivateRoute><Profiles /></PrivateRoute>} />

            {/* Requires login + profile */}
            <Route path="/"                 element={<ProfileRoute><Home /></ProfileRoute>} />
            <Route path="/categories"       element={<ProfileRoute><Categories /></ProfileRoute>} />
            <Route path="/watch/:id"        element={<ProfileRoute><Watch /></ProfileRoute>} />
            <Route path="/continue-watching" element={<ProfileRoute><ContinueWatching /></ProfileRoute>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
