
import React from 'react';
import Head from './Head.js';
import Footer from './Footer.js';
import MainPage from './MainPage.js';
import Menu from './Menu.js';
import RegClick from './Registration.js';
import EnterClick from './Entrance.js';
import NewVideoList from './NewVideo.js';
//import MyAccount from './MyAccount.js';
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import './App.css';
import './font.css';















  
    






function Body(){
  return(
    <>
      <div className="section_one">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/registration' element={<RegClick/>}/>
            <Route path='/entrance' element={<EnterClick/>}/>
            <Route path='/new' element={<NewVideoList/>}/>
            <Route component={() => <div>404 Not found</div>} />
          </Routes>
        </BrowserRouter>
       
        {/* <MyAccount/>*/}
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
        <Footer/>
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
