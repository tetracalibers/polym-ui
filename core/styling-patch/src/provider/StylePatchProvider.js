import { createContext, useContext } from 'react'
import { create } from 'nano-css'
import { addon as addonVirtual } from 'nano-css/addon/virtual'
import { addon as addonRule } from 'nano-css/addon/rule'

export const styp = create({
  pfx: '_styp_',
})

addonRule(styp)
addonVirtual(styp)

const StylePatchContext = createContext()

export const StylePatchProvider = ({ children }) => {
  return (
    <StylePatchContext.Provider value={{ styp }}>
      {children}
    </StylePatchContext.Provider>
  )
}

export const useStylePatch = () => useContext(StylePatchContext)
