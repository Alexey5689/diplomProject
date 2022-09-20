
import React from 'react';
import Head from './Head.js';
import Footer from './Footer.js';
import MainPage from './MainPage.js';
import Menu from './Menu.js';
import RegClick from './Registration.js';
//import EnterClick from './Entrance.js';
//import MyAccount from './MyAccount.js';
import { BrowserRouter, Router, Route} from "react-router-dom";
import './App.css';
import './font.css';















  
    






function Body(){
  return(
    <>
      <div className="section_one">
        <BrowserRouter>
          <Router>
              <Route exact pacth='/' element={<MainPage/>}/>
               {/*<Route pacth='/registration'>
                <RegClick/>
              </Route>
              <Route pacth='/entrance'>
                <EnterClick/>
              </Route>  */}
              
                <Route exact pacth='/registration' element={RegClick}/>
                {/* <Route exact pacth='/entrance' component={EnterClick}/>
                <Route exact pacth='/' component={MainPage}/>
                <Route exact pacth='/catalog' component={MainPage}/> 
                <Route component={() => <div>404 Not found</div>} /> */}
            </Router>
        </BrowserRouter>
       
        {/* <MyAccount/>
        
        <EnterClick/>
        <RegClick/>*/}
        <MainPage/> 
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
