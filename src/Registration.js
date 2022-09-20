import React, { useState } from 'react';
import './registration.css';

export default function RegClick(){
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassWord] = useState('');
  
    const [loginDirty, setLoginDirty] = useState(false);
    const [emailDirty, setemailDirty] = useState(false);
    const [passWordDirty, setpassWordDirty] = useState(false);
    const [confirmPassWordDirty, setConfirmPassWordDirty] = useState(false);
  
    const [loginError, setLoginError] = useState('Это поле не может быть пустым');
    const [emailError, setEmailError] = useState('Это поле не может быть пустым');
    const [passWordError, setPassWordError] = useState('Это поле не может быть пустым');
    const [confirmPassWordError, setConfirmPassWordError] = useState('Это поле не может быть пустым');
  
  
   
    
   
   
  
    const blurHandler = (e) => {
      switch (e.target.name){
        case 'login':
          setLoginDirty(true)
          break;
        case 'email':
          setemailDirty(true)
          break;
        case 'passWord':
          setpassWordDirty(true)
          break;
        case 'confirmPassWord':
          setConfirmPassWordDirty(true)
            break; 
        default:
      }
    }
    const emailHandler = (e) =>{
      setEmail(e.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(e.target.value).toLocaleLowerCase()) && e.target.value !==""){
        setEmailError("Некорректный email");
        
      }else{
        setEmailError('');
        
      }
    }
  
    const loginHandler = (e) =>{
      setLogin(e.target.value);
      if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
        setLoginError("Логин не может быть меньше 3 и больше 10");
        
      }else{
        setLoginError("");
        
      }
    }
    const passHandler=(e)=>{
      setPassWord(e.target.value);
      if((e.target.value.length < 3 || e.target.value.length > 10) && e.target.value !==""){
        setPassWordError("Пароль не может быть меньше 3 и больше 10");
        
      }else{
        setPassWordError("");  
        
      }
    }
    const passConfHandler=(e)=>{
      var pass = document.getElementById("passWord");
      var confpass = document.getElementById('confirmPassWord');
      setConfirmPassWord(e.target.value);
      if(pass.value !== confpass.value && e.target.value !==""){
        setConfirmPassWordError("Некорректное подтверждение пароля");
        
      }
      else{
        setConfirmPassWordError("");
        
      }  
      
    }
    return(
      <>
        <div className="reg_list">
            <div className="reg_img">
            </div>
            <div className ="reg_form">
              <form action='/' method='/' className='form_reg'>
                <h2 className='forma_title'>
                  Регистрация
                </h2>
                {(loginDirty && loginError) && <div className='inputError' style={{color:'red'}}>{loginError}</div>}
                <div className='form_group'>
                  <input 
                    value={login} 
                    onBlur={e=>blurHandler(e)} 
                    onChange={e=>loginHandler(e)} 
                    type='text' 
                    name='login' 
                    id='login' 
                    className='forma_input' 
                    placeholder=' '></input>
                  <lable className='forma_lable'>Имя:</lable>
                </div>
  
                {(emailDirty && emailError) && <div className='inputError' style={{color:'red'}}>{emailError}</div>}
                <div className='form_group'>
                  <input 
                    value={email} 
                    onChange={e=> emailHandler(e)} 
                    onBlur={e => blurHandler(e)} 
                    type='' name='email' id='email' 
                    className='forma_input' 
                    placeholder=' '> 
                  </input>
                  <lable className='forma_lable'>Почта:</lable>
                </div>
  
                {(passWordDirty && passWordError) && <div className='inputError' style={{color:'red'}}>{passWordError}</div>}
                <div className='form_group'>
                  <input 
                    value={passWord} 
                    onBlur={e=>blurHandler(e)} 
                    onChange={e=>passHandler(e)} 
                    type='password' 
                    name='passWord' 
                    id='passWord' 
                    className='forma_input' 
                    placeholder=' '>
                  </input>
                  <lable className='forma_lable'>Пароль:</lable>
                </div>
  
                {(confirmPassWordDirty && confirmPassWordError) && <div className='inputError' style={{color:'red'}}>{confirmPassWordError}</div>}
                <div className='form_group'>
                  <input 
                    value={confirmPassWord}  
                    onChange={e=>passConfHandler(e)} 
                    onBlur={e=>blurHandler(e)} 
                    type='password' 
                    name='confirmPassWord' 
                    id='confirmPassWord' 
                    className='forma_input' 
                    placeholder=' '>                
                  </input>
                  <lable className='forma_lable'>Подтверждение пароля:</lable>
                </div>
                <button type='submit' className='form_btn'>Регистрация.</button>
                
              </form>
              
            </div>
        </div>
        
      </>
    );
  }