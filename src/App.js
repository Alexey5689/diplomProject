import React, { useState } from 'react';
import './App.css';
import './font.css';
import './header.css';
import './menu.css';
import './registration.css';
import './enter.css';
import './account.css';

function MyAccount(){
  return(
    <>
      <div className='account_list'>
        <div className='account_faceWrap'>
          <div className='account_face'>
            <div className='AccountPhoto'>
              <div className='AccountImg'>
              </div>
            </div>
            <div className='AccountInfo'>
              <p>Дьяченко</p>
              <p>Алексей</p>
            </div> 
          </div>
          <div className='dwload_face'>
            <button className='dwloadBtn' name='dwloadBtn' id='dwloadBtn'><div className='under_dwloadBtn'>Загрузить</div></button>
          </div>
        </div>
        <div className='account_menu'>
          <div className='user_menu'>Видео</div>
          <div className='user_menu'>Плейлист</div>
          <div className='user_menu'>Журнал</div>
          <div className='user_menu'>Подписки</div>
        </div>
      </div>
     
    </>
  );

}

function EnterClick(){
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');  

  const [emailDirty, setemailDirty] = useState(false);
  const [passWordDirty, setpassWordDirty] = useState(false);

  const [emailError, setEmailError] = useState('Это поле не может быть пустым');
  const [passWordError, setPassWordError] = useState('Это поле не может быть пустым');

  const [buttonState,setButtonState] = useState('');


  const emailHandler = (e) =>{
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLocaleLowerCase())){
      setEmailError("Некорректный email");
      
    }else{
      setEmailError('');
      
    }
  }

  const passHandler=(e)=>{
    setPassWord(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 10){
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
              <button onClick={()=>{setButtonState(false)}}  disabled={buttonState} type='submit' className='form_btn'>Регистрация.</button>
            </form>
            
          </div>
        <div className="reg_img">
        </div>
      </div>
    </>
  )
}

function RegClick(){
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


  const [buttonState,setButtonState] = useState('');
  
 
 

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
    if(!re.test(String(e.target.value).toLocaleLowerCase())){
      setEmailError("Некорректный email");
      
    }else{
      setEmailError('');
      
    }
  }

  const loginHandler = (e) =>{
    setLogin(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 10){
      setLoginError("Логин не может быть меньше 3 и больше 10");
      
    }else{
      setLoginError("");
      
    }
  }
  const passHandler=(e)=>{
    setPassWord(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 10){
      setPassWordError("Пароль не может быть меньше 3 и больше 10");
      
    }else{
      setPassWordError("");  
      
    }
  }
  const passConfHandler=(e)=>{
    var pass = document.getElementById("passWord");
    var confpass = document.getElementById('confirmPassWord');
    setConfirmPassWord(e.target.value);
    if(pass.value !== confpass.value){
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
              <button disabled={buttonState} type='submit' className='form_btn'>Регистрация.</button>
              
            </form>
            
          </div>
      </div>
      
    </>
  );
}

function Head(){
  return(
    <>
      <div className="head">
          <div className="left">
              <form method="/" action="/" className="forma">
                  <div className="form_serch">
                    <input type="text" placeholder="Что вы хотите найти?" name="serch" id="serch" className="form_input"></input>
                  </div>
                  <div className ="form_buttn">
                    <button tipe="sumbmit" className="button" name="buttn" id="buttn"><div className="fa_search"></div></button>
                  </div>
              </form>
          </div>
          <div className="lable">  
            <a href="/">
              <div className="img"></div>
            </a>
          </div>
          <div className="right">
            <form  className="forma_btn">
                <div className="right_bnt">
                  <button type="" className="btn" name="btn_reg" id="btn_reg" onClick={RegClick}>Регистрация</button>
                </div>  
            </form> 
            <form className="forma_btn">
              <div className="left_btn">
                  <button type="" className="btn" name="btn_log" id="btn_log" >Вход</button>
              </div> 
            </form>  
          </div>
      </div>
       
      </>
  );
}
function Menu(){
  return(
    <>
      <div className="menu">
        <div className="wrap">
          <div className="under_menu"><div className="und_under_menu">Главная</div></div>
          <div className="under_menu"><div className="und_under_menu">Каталог</div></div>
          <div className="under_menu"><div className="und_under_menu">Популярные</div></div>
          <div className="under_menu"><div className="und_under_menu">Новинки</div></div>
          <div className="under_menu"><div className="und_under_menu">Лучшее</div></div>
        </div>
      </div>
    </>
  );
}
function Body(){
  return(
    <>
      <div className="section_one">
        <MyAccount/>
        {/* <RegClick/>
        <EnterClick/> */}
      </div> 
    </>
  );
}

function MainContainer () {
  return(
    <>
      <div className ="container">
        <Head/>
        <Menu/>
        <Body/>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <MainContainer/>
    </div>   
  );
}

export default App;
