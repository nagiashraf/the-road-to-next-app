"use client"

import { ThemeProvider as BaseThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode
};

const ThemeProvider =({ children }: ThemeProviderProps) => {
  return <BaseThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </BaseThemeProvider>
}

export { ThemeProvider };