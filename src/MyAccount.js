import React, { useState, useRef } from "react";
import './account.css';
import ReactPlayer from 'react-player';

const hostUrl = 'http://localhost:3000/';

const UploadFile =() =>{
  const filePicker = useRef(null);
  
  const [selectedFile, setSelectedFile] = useState();
  //const [uploaded, setUploaded] = useState();

  const handleChange = (event)=>{
    //console.log(event.target.files);
    setSelectedFile(event.target.files[0])
  };

  const handlePick=()=>{
    filePicker.current.click();
  };
  const handleUpload= async ()=>{
    if(!selectedFile){
      alert('Пожайлуста выберите файл!');
      return;
    };
    const formData = new FormData();
    formData.append('file', selectedFile);
    fetch(hostUrl, {
      method:'POST',
      body: JSON.stringify(formData),
      });
    //const res = awaitconst data = await res.json();
    //setUploaded(data);
    
    
  };

  return(
    <>
      <div className='wrapuploadfile'>
        <button onClick={handlePick} className='dwloadBtn' name='dwloadBtn' id='dwloadBtn'>ВЫБРАТЬ</button>
        <input 
          className="hidden"
          ref={filePicker}
          type='file'
          onChange={handleChange}
          accept='video'
        />
        <button onClick={handleUpload} className='dwloadBtn' name='dwloadBtn' id='dwloadBtn'>ЗАГРУЗИТЬ</button>
      </div> 
        {selectedFile && (
            <div className="vidINf">
              {selectedFile.name}/
              {selectedFile.type}
            </div>)
        } 
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
              <UploadFile/>
            </div>
          </div>
          <div className='account_menu'>
            <div className='user_menu'>Видео</div>
            <div className='user_menu'>Плейлист</div>
            <div className='user_menu'>Журнал</div>
            <div className='user_menu'>Подписки</div>
          </div>
          <div className= 'accountBody'>
              
                <div>
                  <ReactPlayer
                    height='45%'
                    width='35%'
                    url={{}}
                    playing={true}
                    controls='false'
                  />
                </div> 
                
           
              
          </div>
        </div>
        
       
      </>
    );
  
  }
  