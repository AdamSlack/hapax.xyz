import { useState } from 'react';
import { createTheme, ThemeType } from '@nextui-org/react'

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
})

export const useTheme = () => {
  const [ theme, setTheme ] = useState<ThemeType>('dark');

  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  }

  return {
    setTheme,
    theme: themes[theme],
  }
}

export default useTheme