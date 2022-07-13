import { createContext, useContext } from 'react'
import { create } from 'nano-css'
import { addon as addonVirtual } from 'nano-css/addon/virtual'
import { addon as addonRule } from 'nano-css/addon/rule'
import { addon as addonPrefixed } from 'nano-css/addon/prefixer'
import { addon as addonArray } from 'nano-css/addon/array'
import { addon as addonGoogleFont } from 'nano-css/addon/googleFont'
import { addon as addonExtract } from 'nano-css/addon/extract'

export const styp = create({
  pfx: 'styp_',
})

addonRule(styp)
addonVirtual(styp)
addonPrefixed(styp)
addonArray(styp)
addonGoogleFont(styp)

const isServer = typeof window === 'undefined'

if (isServer) {
  addonExtract(styp)
}

const StylePatchContext = createContext()

export const StylePatchProvider = ({ children }) => {
  return (
    <StylePatchContext.Provider value={{ styp }}>
      {children}
    </StylePatchContext.Provider>
  )
}

export const useStylePatch = () => useContext(StylePatchContext)
