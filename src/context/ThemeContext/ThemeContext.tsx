'use client'
import { FC, ReactNode, createContext, useContext, useState } from 'react';

type ValueContext= {
    theme: 'light' | 'dark',
    changeTheme:()=>void
}
export const ThemeContext = createContext<ValueContext>({ theme:'light', changeTheme:()=>{}})
export const useThemeContext = () => useContext(ThemeContext)
export const ThemeProvider: FC<{children:ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const changeTheme = () => {
    const newTheme= theme==="light"?'dark':'light'
    document.querySelector('main')?.classList.add(newTheme)
    document.querySelector('main')?.classList.remove(theme)
    setTheme(newTheme)
  }
  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

