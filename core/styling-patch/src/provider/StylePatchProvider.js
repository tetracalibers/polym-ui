import { createContext } from 'react'
import { Client, Server } from 'styletron-engine-atomic'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'

export const StylePatchContext = createContext()

const isServer = typeof window === 'undefined'

const getHydrate = () => document.getElementsByClassName('_styletron_hydrate_')

const styletron = isServer
  ? new Server()
  : new Client({ hydrate: getHydrate() })

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()

export const StylePatchProvider = ({ children }) => {
  return (
    <StylePatchContext.Provider>
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        {children}
      </StyletronProvider>
    </StylePatchContext.Provider>
  )
}
