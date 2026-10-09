import { useState, useEffect } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  return [theme, setTheme]
}
