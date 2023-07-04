import React from "react";
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const hHeade = 'Загловок';
  const hBodi = 'Тело';
  const hFoote = 'Нижний колонтитул';
 
  return (
    <>
      <Header hHeader={hHeade}/>
      <Body hBody={hBodi}/>
      <Footer hFooter={hFoote}/>
    </>
  );
};

export default App;