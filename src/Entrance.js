import React, { useState } from 'react';
import './enter.css';
export default function EnterClick(){
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');  
  
    const [emailDirty, setemailDirty] = useState(false);
    const [passWordDirty, setpassWordDirty] = useState(false);
  
    const [emailError, setEmailError] = useState('Это поле не может быть пустым');
    const [passWordError, setPassWordError] = useState('Это поле не может быть пустым');
  
    // const [buttonState,setButtonState] = useState('');
    // onClick={()=>{setButtonState(false)}}  disabled={buttonState}
  
    const emailHandler = (e) =>{
      setEmail(e.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(e.target.value).toLocaleLowerCase()) && e.target.value !==""){
        setEmailError("Некорректный email");
        
      }else{
        setEmailError('');
        
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
  
  
    const blurHandler = (e) => {
      switch (e.target.name){
        case 'email':
          setemailDirty(true)
          break;
        case 'passWord':
          setpassWordDirty(true)
          break;
        default:
      }
    }
  
    return(
       <>
        <div className="enter_list">
        <div className ="enter_form">
              <form action='/' method='/' className='form_reg'>
                <h2 className='forma_title'>
                  Вход
                </h2>
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
                <button type='submit' className='form_btn'>Вход.</button>
              </form>
              
            </div>
          <div className="reg_img">
          </div>
        </div>
      </>
    )
  }