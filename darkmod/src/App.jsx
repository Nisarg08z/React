import React from 'react'
import { TheamProvider } from './contexts/theame'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import TheamBtn from './components/TheamBtn'

function App() {

  const [theamMode, setTheameMode] = useState("light")

  const lightTheam = () => {
    setTheameMode("light")
  }

  const darkTheam = () => {
    setTheameMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theamMode)
  },[theamMode])

  return (
    <TheamProvider value={{theamMode, lightTheam, darkTheam}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TheamBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </TheamProvider>
  )
}

export default App