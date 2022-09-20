import React from "react";
import './header.css';
export default function Head(){
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
              <div  className="forma_btn">
                  <div className="right_bnt">
                    <a href='/registration' className="btn" id="btn_reg">Регистрация</a>
                  </div>  
              </div> 
              <div className="forma_btn">
                <div className="left_btn">
                    <a href='/entrance' className="btn" name="btn_log" id="btn_log" >Вход</a>
                </div> 
              </div>  
            </div>
        </div>
      </>
    );
  }