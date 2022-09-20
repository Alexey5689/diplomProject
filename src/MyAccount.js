import React from "react";
import './account.css';

export default function MyAccount(){
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
  