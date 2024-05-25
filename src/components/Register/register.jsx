import React, {useContext,useState } from 'react'
import './register.css';
import {Link,useNavigate} from 'react-router-dom';
import {UserContext} from "../userContext/userContext";
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
const Register = () => {
  const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setusername] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordConfirm, setpasswordConfirm] = useState('')
    const [usernameError, setusernameError] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = async (e) => {
      e.preventDefault();
         
      setEmailError('')
      setPasswordError('')
      setusernameError('')
      setpasswordConfirm('')
    
      // Check if the user has entered both fields correctly
      if ('' === email) {
        setEmailError('Please enter your email')
        return
      }
    
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Please enter a valid email')
        return
      }

      if ('' === username) {
         
          setusernameError('Please enter a username')
        return
      }
    
      if ('' === password) {
        setPasswordError('Please enter a password')
        return
      }
    
      if (password.length < 8) {
        setPasswordError('The password must be 8 characters or longer')
        return
      }

      if(password !== passwordConfirm){
        setpasswordConfirm('password must be matched')
      }
        // Authentication calls will be made here...
    try{
        const response = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username,email, password }),
        });
  
        if (!response.ok) {
          throw new Error('register failed');
        }
  
        if (!response.ok) {
          throw new Error('register failed');
        }
  
        const data = await response.json();

        localStorage.setItem('accessToken', data.token)

        console.log(data);
        navigate("/")
       
      } catch (error) {
        console.log("register failed", error.message)
      }

      }

  
    return (
      <>
      <Header/>
      <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
      
      <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Créer votre compte</span>
              <form id="stripe-login" onSubmit={handleSubmit}>

              <div class="field padding-bottom--24">
                  <label for="username">Username</label>
                  <input 
                  name="username" 
                   value={username}
                  onChange={(ev) => setusername(ev.target.value)}/>
                <label className="errorLabel">{usernameError}</label>

                </div>
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
                  </div>
                  <input type="password" 
                   value={password}
                   onChange={(ev) => setPassword(ev.target.value)}name="password"/>
                    <label className="errorLabel">{passwordError}</label>
                </div>

                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">Confirm Password</label>
                  </div>
                  <input type="password" 
                   value={password}
                   onChange={(ev) => setPassword(ev.target.value)}name="password"/>
                    <label className="errorLabel">{passwordError}</label>
                </div>
               
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Login"/>
                </div>
                <div class="field">
                  <a class="ssolink"><Link to="/login">have account? Login</Link></a>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
      </>
    )
  }
  
  export default Register