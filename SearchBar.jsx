// src/components/SearchBar/SearchBar.jsx
import React, { useState, useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
import { fetchSearch, clearSearch } from '../../redux/slices/contentSlice'

function SearchBar({ placeholder = 'Search movies, shows, genres…' }) {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 450)  // 450ms debounce

  // Fire search only when debounced value changes
  useEffect(() => {
    if (debouncedQuery.trim().length >= 2) {
      dispatch(fetchSearch(debouncedQuery.trim()))
    } else if (!debouncedQuery.trim()) {
      dispatch(clearSearch())
    }
  }, [debouncedQuery, dispatch])

  return (
    <div className="relative flex items-center">
      <svg className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none z-10"
        fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 bg-white/10 dark:bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-3 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      )}
    </div>
  )
}

export default memo(SearchBar)
