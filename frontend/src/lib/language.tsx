import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react'
import { addCookieLanguage, getCookieLanguage } from './handleCookie'

interface LanguageContextType {
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(getCookieLanguage()) // Set your default language here

  useEffect(() => {
    if (language) {
      addCookieLanguage(language)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
