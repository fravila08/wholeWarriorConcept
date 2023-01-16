import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import SignIn from './pages/SignIn'

function App() {
  const [user, setUser]=useState(null)

  return (
    <div className="App">
      {<SignIn user={user} setUser={setUser} />}
    </div>
  )
}

export default App
