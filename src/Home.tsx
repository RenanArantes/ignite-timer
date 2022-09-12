//! ! EXPLICACAO SOBRE CONTEXTOS,
// como criar e usar

import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  let { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <div>
      <h1>NewCycleForm:{activeCycle}</h1>
      <button onClick={() => setActiveCycle((activeCycle += 1))}>
        Aumentar
      </button>
    </div>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>Countdown:{activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
