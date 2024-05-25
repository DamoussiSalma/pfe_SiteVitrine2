import React, {useState,useContext} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import './login2.css';
import { UserContext } from "../userContext/userContext";
import Footer from '../common/footer/Footer';
import { toast , ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate()
  const {user}=useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    //const {setUser,user} = useContext(UserContext);

    const handleSubmit = async (e) => {
      e.preventDefault();
         
      setEmailError('')
      setPasswordError('')
    
      // Check if the user has entered both fields correctly
      if ('' === email) {
        setEmailError('Please enter your email')
        return
      }
    
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Please enter a valid email')
        return
      }
    
      if ('' === password) {
        setPasswordError('Please enter a password')
        return
      }
    
      
        // Authentication calls will be made here...
    try{
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
          
        }
  
        const data = await response.json();

        localStorage.setItem('accessToken', data.token)

        console.log(data);
         navigate("/")
         window.location.reload()
         toast.success("Success !", {
          className: "toast-message",
        });
      } catch (err) {
        toast.error('wrong email or password',{
         
          className: "toast-message"
        });
        
      }

      }

  
    return (
      <>

    
      <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
      <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Se connecter a votre compte</span>
              <form id="stripe-login" onSubmit={handleSubmit}>
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email" 
                  name="email" 
                   value={email}
                  onChange={(ev) => setEmail(ev.target.value)}/>
                <label className="errorLabel">{emailError}</label>

                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">Password</label>
                    <div class="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" 
                   value={password}
                   onChange={(ev) => setPassword(ev.target.value)}
                   name="password"/>
                    <label className="errorLabel">{passwordError}</label>
                </div>
               
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Login"/>
                </div>
                <div class="field">
                  <a class="ssolink" href="/register"><Link to="/register">don't have account? Register</Link></a>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        </div>
        <Footer/> 


      </>
    )
  }
  
  export default Login