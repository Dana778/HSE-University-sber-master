import React from "react";
import {Header} from './components/Header';
import{
  Routes,
  Route, BrowserRouter,
} from 'react-router-dom'
import {Body} from './components/Body';

import {Footer} from './components/Footer';

const App = () => {
  const hHeade = 'Загловок';
  const hBodi = 'Тело';
  const hFoote = 'Нижний колонтитул';
 
  return (
    /*<>
    <BrowserRouter>
    <Header hHeader={hHeade}/>
    <Routes>
      <Route><Link to='/'><Body hBody={hBodi}/></Link></Route>
      <Route><Link to='/'><Footer hFooter={hFoote}/></Link></Route>
    </Routes>
    </BrowserRouter>
    </>*/
    <>
    <Header hHeader={hHeade}/>
    <Body hBody={hBodi}/>
    <Footer hFooter={hFoote}/>
    </>
  );
};

export default App;