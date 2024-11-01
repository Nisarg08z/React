import {createContext, useContext} from 'react'

export const TheamContext = createContext({
    theamMode: "light",
    darkTheam: () => {},
    lightTheam: () => {},
})

export const TheamProvider = TheamContext.Provider

export default function useTheame() {
    return useContext(TheamContext)
}