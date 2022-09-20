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
                  <div className='wrap_pg_left_text_line' ></div>
                  <div className='wrap_pg_left_text_line'style={{marginTop:'1%'}}></div>
                  <p>ДУМАЙ ИНАЧЕ</p>
                  <div className='wrap_pg_left_bottom'>
                    <a href='download'>ЗАГРУЗИТЬ</a>
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
  
            </div>
          </div>
        </div>
      </>
    );
  }