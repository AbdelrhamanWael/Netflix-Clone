import React from 'react'
import { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login , signup } from '../../firebase'
import { toast } from 'react-toastify'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {


    const [signstate , setSignstate] = useState("Sign In")

    const [name , setname] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [loading , setLoading] = useState(false)


    const user_auth = async(event)=>{
        event.preventDefault()
        setLoading(true)
        if(signstate === "Sign In"){
            await login(email , password)
        }else{
            await signup(name , email , password)
        }
        setLoading(false)
    }
    return (
        loading ? <div className='loading'>
            <img src={netflix_spinner} alt="netflix_spinner" />
        </div> :
        <div className='login'>
            <img src={logo } className='login-logo'  alt="" />
            <div className="login-form">
                <h1>{signstate}</h1>
                <form action="">
                    {signstate === "Sign Up" ? <input value={name} onChange={(e) => {setname(e.target.value)}} type="text" placeholder='Your Name' /> : <> </>}
                    
                    <input type="email" value={email} onChange={(e) => {setemail(e.target.value)}} placeholder='Your Email' />
                    <input type="password" value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder='Password' />
                    <button onClick={user_auth} type='submit'>{signstate}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>

                        </div>
                        <p>Need Help ?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signstate === "Sign In" ? <p>New to Netflix ? <span onClick={() => {setSignstate("Sign Up")}}>Sign Up Now</span></p> :
                    <p>Already have and account ? <span onClick={() => {setSignstate("Sign In")}}>Sign In Now</span></p>
                    
                    }
                   
                </div>

            </div>

        </div>
    )
}

export default Login
