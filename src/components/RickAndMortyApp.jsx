import React from 'react';
import Search from './elements/Search';
import '../assets/css/styles.css'
import Bg from '../assets/Images/Bg.png'

const RickAndMortyApp = () => {
  return (
    <>
      <div id='' className='fondo' >
        <img src={Bg} alt="" />        
      </div>
      <Search />
    </>
  );
};

export default RickAndMortyApp;