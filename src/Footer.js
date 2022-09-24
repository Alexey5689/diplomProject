// import React from "react";
import React, { useState } from 'react';
import './footer.css';

export default function Footer(){
    const [email, setEmail] = useState(''); 
    const [emailError, setEmailError] = useState('');
  
    const emailHandler = (e) =>{
      setEmail(e.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(e.target.value).toLocaleLowerCase()) && e.target.value !==""){//устранение бага с исчезновением валидации
        setEmailError("Некорректный email");
      }else{
        setEmailError('');
        
      }
    }
    
    return(
      <>
      <div className='footer'>
        <div className='footer_wrap'>
          <div className='footer_left'>
            <div className='footer_left_left'>
              <div className='footer_left_text'>
                <p style={{fontWeight:'bold'}}>О компании</p>
                <p>Карьера</p>
                <p>Блог</p>
                <p>О нас</p>
                <p>Инвесторам</p>
              </div>
            </div>
            <div className='footer_left_right'>
            <div className='footer_left_text'>
                <p style={{fontWeight:'bold'}}>Пользователям</p>
                <p>Частые вопросы</p>
                
              </div>
            </div>
          </div>
          <div className='footer_center'>
            <div className='wrap_footer_center'>
              <div className='wrap_cooperIcon'>
                <div className='cooperIcon'></div>
              </div> 
              <div className='wrap_text'>
                <div className='text'>
                  <p>Все права защищены</p>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_right'>
            <div className='footer_form_form'> 
              {(emailError) && <div className='inputError' style={{color:'orange'}}>{emailError}</div>}
              <form method="/" action="/" className="footer_forma">
             
                <div className="footer_form_subscribe">
                  <input 
                    type="text" 
                    value={email} 
                    onChange={e=> emailHandler(e)} 
                    placeholder="Почтовый ящик" 
                    name="subscribe" 
                    id="subscribe" 
                    className="footer_form_input">
                  </input>
                </div>
                <div className ="footer_form_buttn">
                  <button type="sumbmit" 
                          className="footer_subscribe" 
                          name="footer_buttn" 
                          id="footer_buttn">Подписаться
                  </button>
                </div>
              </form>
            </div>
            <div className='footer_social'>
                <div className='wrap_footer_social'>
                  <div className='social_icon'>
                      <div className='icon_img '>
                        <a href="https://web.telegram.org/z/" className='wrap_image'>
                          <div className='img1'></div>
                        </a>
                      </div>
                      <div className='icon_img '>           
                        <a href="https://ok.ru/" className='wrap_image'>
                          <div className='img2'></div>
                        </a>
                      </div>  
                      <div className='icon_img '>
                        <a href="https://www.whatsapp.com/?lang=ru" className='wrap_image'>
                          <div className='img3'></div>
                        </a>
                      </div>
                      <div className='icon_img '>
                        <a href="https://vk.com/" className='wrap_image'>
                          <div className='img4'></div>
                        </a>
                      </div> 
                  </div>
                </div>
            </div>
          </div>
        </div>
          
      </div>
  
      </>
    );
  }
  