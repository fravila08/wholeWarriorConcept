import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

function App() {
  const [count, setCount] = useState(0)

  const handleCallback = (response)=>{
    console.log('Encoded JWT ID token: '+ response.credential)
    let userObj = jwt_decode(response.credential)
    console.log(userObj)
  }
  useEffect(()=>{
    // global google
    google.accounts.id.initialize({
      client_id: import.meta.env['VITE_CLIENT'] ,
      callback:handleCallback
    })


    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),{
        theme:"outline", size:"large"
      }
    )
  },[])

  return (
    <div className="App">
      <div id='signInDiv'></div>
    </div>
  )
}

export default App
