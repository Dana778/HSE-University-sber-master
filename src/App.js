import React from "react";

import {Header} from './components/Header';
import {Body} from './components/Body';
import {Footer} from './components/Footer';

import{
  Routes,
  Route, 
  BrowserRouter,
} from 'react-router-dom'


const App = () => {
  const hHeade = 'Загловок';
  const hBodi = 'Тело';
  const hFoote = 'Нижний колонтитул';
 
  return (
    <>
    <BrowserRouter>
    <Header hHeader={hHeade}/>
    <Routes>
      <Route path='/' element={
        <>
        <Body hBody={hBodi}/>
        <Footer hFooter={hFoote}/> 
        </>
      }/>
      <Route path='/dashboard' element={
        <Footer hFooter={hFoote}/>  
      }/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;