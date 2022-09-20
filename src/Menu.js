import React from "react";
import './menu.css';

export default function Menu(){
    return(
      <>
        <div className="menu">
          <div className="wrap">
            <div className="under_menu"><a href='/' className="und_under_menu" style={{textDecoration:'none', color:'inherit'}}>Главная</a></div>
            <div className="under_menu"><a href='/catalog' className="und_under_menu" style={{textDecoration:'none', color:'inherit'}}>Каталог</a></div>
            <div className="under_menu"><a href='/popular' className="und_under_menu" style={{textDecoration:'none', color:'inherit'}}>Популярные</a></div>
            <div className="under_menu"><a href='/new' className="und_under_menu" style={{textDecoration:'none', color:'inherit'}}>Новинки</a></div>
            <div className="under_menu"><a href='/best' className="und_under_menu" style={{textDecoration:'none', color:'inherit'}}>Лучшее</a></div>
          </div>
        </div>
      </>
    );
  }