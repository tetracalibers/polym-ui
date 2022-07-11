import { createContext, useContext } from 'react'
import { create } from 'nano-css'
import { addon as addonVirtual } from 'nano-css/addon/virtual'
import { addon as addonExtract } from 'nano-css/addon/extract'
import { addon as addonRule } from 'nano-css/addon/rule'

const nano = create({
  pfx: '_styp_',
})

addonRule(nano)
addonVirtual(nano)
addonExtract(nano)

const StylePatchContext = createContext()

export const StylePatchProvider = ({ children }) => {
  return (
    <StylePatchContext.Provider value={{ nano }}>
      {children}
    </StylePatchContext.Provider>
  )
}

export const useStylePatch = () => useContext(StylePatchContext)
