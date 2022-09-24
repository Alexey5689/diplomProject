import React from "react";
import './mainPage.css';


export default function MainPage(){
    return(
      <>
        <div className='mainPage_container'>
          <div className='call_to_action pg1'>
            <div className='wrap_pg'>
              <div className='wrap_pg_left'>
                <div className='wrap_pg_left_image'></div>
              </div>
              <div className='wrap_pg_right'>
                <div className='wrap_pg_left_text'>
                  <p>Созидай</p>
                  <div className='wrap_pg_left_text_line' style={{marginBottom:".5%"}}></div>
                  <div className='wrap_pg_left_text_line'></div>
                  <p>ДУМАЙ ИНАЧЕ</p>
                  <div className='wrap_pg_left_bottom'>
                    <a href='/myAccount'>ЗАГРУЗИТЬ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carusel'>
            <div className='scroll_img'>
              <div className='scr_img1'></div>
              <div className='scr_img2'></div>
              <div className='scr_img3'></div>
              <div className='scr_img4'></div>
              <div className='scr_img5'></div>
            </div>
          </div>      
          <div className='call_to_action pg2'>
            <div className='wrap_pg'>
              <div className="wrap_pg_left">
                <div className='wrap_pg2_left_text'>
                  <div className="wrap_pg2_left_text_line"></div>
                  <p>Создавай</p>
                  <div className="wrap_pg2_left_text_line"></div>
                  <p>Отсекай лишнее!</p>
                  <div className='wrap_pg2_left_bottom'>
                    <a href='/entrance'>ВХОД</a>
                  </div>
                </div>
              </div>
              <div className="wrap_pg_right">
              <div className='wrap_pg2_left_image'></div>
              </div>
            </div>
          </div> 
          <div className='carusel'>
            <div className='scroll_img'>
              <div className='scr_img1'></div>
              <div className='scr_img2'></div>
              <div className='scr_img3'></div>
              <div className='scr_img4'></div>
              <div className='scr_img5'></div>
            </div>
          </div>          
          <div className='call_to_action pg3'>
            <div className='wrap_pg'>
              <div className='wrap_pg_left'>
                <div className='wrap_pg3_left_image'></div>
              </div>
              <div className='wrap_pg_right'>
                <div className='wrap_pg3_right_text'>
                  <p className='wrap_pg3_right_text_p' style={{marginBottom:"4%"}}>Твори</p>
                  <div className='wrap_pg3_left_text_line ' style={{marginBottom:"3%"}}>
                    <div className="wrap_pg3_left_text_line_left bord"></div>
                    <div className="wrap_pg3_left_text_line_centr">
                      <div className="wrap_pg3_left_text_line_centr_center bord"></div>
                    </div>
                    <div className="wrap_pg3_left_text_line_right bord"></div>
                  </div>
                  <div className="wrap_pg3_left_text">
                    <p>Красово. Креативно.</p>
                  </div>
                  <div className="wrap_pg3_left_text2">
                    <p>Уникально.</p>
                  </div>
                  <div className='wrap_pg3_left_bottom'>
                    <a href='/registration'>РЕГИСТРАЦИЯ</a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }