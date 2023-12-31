import { useState, useEffect } from "react";

import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'




const App = () => {
  const hHeade = 'Загловок';
  const hBodi = 'Тело';
  const hFoote = 'Нижний колонтитул';

  const [pocemons, setPocemons] = useState([])
  const [statePoc, setStatePoc] = useState(false)

  const [UserInput, setUserInput] = useState('input')
  const HandlerOnChargeInput = (event) =>{
    setUserInput(event.target.value)
    console.log(event)
  }
const [aboba, setAboba] = useState(false)

  const getResponse = () => {
    fetch('http://localhost:3001/pokemon')
        .then(
          (response) => {
            return (
              response.json()

            )
          }
        )
        .then(
          (data) => {
            setPocemons(data)
          }
        )
        .catch(
          () => {
            console.log('проблема с доступом к серверу')
          }
        )
  }

  return (
    <>
      {
        pocemons ? (
          pocemons.map((item) => {
            return (
              <li key={`${item.id}_marat`}> {item.name}</li>
            )
          }
          )
        ) : <p>error</p>
      }
      <button onClick={
        () => {
          setStatePoc(!statePoc)
          if (statePoc) {
            getResponse()
          } else {
            setPocemons([])
          }
        }
      }>AAAA</button>
      <BrowserRouter>
        <input value={UserInput} onChange={HandlerOnChargeInput}/>
        <button onClick = {() => {setUserInput('')}}>clear</button> 
        <button onClick={() => {setAboba(!aboba)}}>change</button>
        {
          aboba===true && <h1>{UserInput}</h1> 
        }
        <Header hHeader={hHeade} />
        <Routes>
          <Route path='/' element={
            <>
              <Body hBody={hBodi} />
              <Footer hFooter={hFoote} />

              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </>
          } />
          <Route path='/dashboard' element={
            <Footer hFooter={hFoote} />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;