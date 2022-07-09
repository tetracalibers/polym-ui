import { createContext } from 'react'

export const StylePatchContext = createContext()

export const StylePatchProvider = ({ children }) => {
  return <StylePatchContext.Provider>{children}</StylePatchContext.Provider>
}
