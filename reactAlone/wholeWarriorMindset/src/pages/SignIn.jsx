import { useEffect } from "react"
import jwt_decode from "jwt-decode"

const SignIn=({user, setUser})=>{
    const handleCallback = (response)=>{
        let userObj = jwt_decode(response.credential)
        console.log(userObj)
        setUser(userObj)
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

    useEffect(()=>{
        console.log(user)
    },[user])



    return(
        <div id='signInDiv'></div>
    )
}
export default SignIn;