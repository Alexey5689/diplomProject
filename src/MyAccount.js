import React, { useState, useRef } from "react";
import './account.css';

function UploadFile(){
  const filePicker =useRef(null);
  
  const [selectedFile, setSelectedFile] = useState('null')
  const handlerChange = (e)=>{

  }

  const handlePick=()=>{
    filePicker.current.click();
  }

  return(
    <> 
      <button onClick={handlePick} className='dwloadBtn' name='dwloadBtn' id='dwloadBtn'>ВЫБРАТЬ</button>
      <input 

        className="hidden"
        ref={filePicker}
        type='file'
        onChange={handlerChange}
      />
      <button className='dwloadBtn' name='dwloadBtn' id='dwloadBtn'>ЗАГРУЗИТЬ</button>
    </>
  );
}

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
                <p>FirstName</p>
                <p>LastName</p>
              </div> 
            </div>
            <div className='dwload_face'>
              {/*  */}
              <UploadFile/>
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
  