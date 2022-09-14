import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/styles.css'
import CardsInfo from './CardsInfo';
import Rick from "../../assets/Images/rick.png"
import Morty from '../../assets/Images/morty.png'

const Search = () => {
    const [textLocation, setTextLocation] = useState('')
    const [rickAndMorty, setRickAndMorty] = useState([])
    const [currentPage, setCurrentPage] = useState([])
    const [indexCurrentPage, setIndexCurrentPage ] = useState(0)
    const [buttonChange1, setButtonChange1] = useState(0)
    const [buttonChange2, setButtonChange2] = useState(8)
    const [numberTotalPage, setNumberTotalPage] = useState(0)
    const [numberPage, setNumberPage] = useState(0)

    useEffect(() => {
        requestLocation((Math.floor(Math.random() * 126) + 1), buttonChange1, buttonChange2)
    }, []);

    const requestLocation = (index, buttonChange1, buttonChange2) => {
        setIndexCurrentPage(index)
        axios
        .get(`https://rickandmortyapi.com/api/location/${index}`)
        .then(res => {
            console.log(res.data), 
            setRickAndMorty(res.data)
            setCurrentPage(res.data.residents?.slice(buttonChange1, buttonChange2))
            setNumberTotalPage(Math.ceil(res.data.residents.length / 8))
        })
        .catch(error => console.error(error))
    }
    // ====Boton===
    const call_idAppiRick = e => {
        if(e.key === 'Enter'){
            requestLocation(textLocation, buttonChange1, buttonChange2)
            setNumberPage(0)
        }
    }
    const change1 = () => {
        if (buttonChange1 >= 0) {
            setButtonChange1(buttonChange1 - 8)
            setButtonChange2(buttonChange2 - 8)
            requestLocation(indexCurrentPage, buttonChange1, buttonChange2)
            setNumberPage(numberPage - 1)
        }
    }
    const change2 = () => {
        if (currentPage.length <= buttonChange2) {
            setButtonChange1(buttonChange1 + 8)
            setButtonChange2(buttonChange2 + 8)
            requestLocation(indexCurrentPage, buttonChange1, buttonChange2)
            setNumberPage(numberPage + 1)
        }
    }
    const mostrarInfo = () => {
        return (<>
            <h2 className='subTittle'>{rickAndMorty.name}</h2>
            <ul className='lista-inport'>
                <li>ID: <b>{rickAndMorty.id}</b></li>
                <li>Type: <b>{rickAndMorty.type}</b></li>
                <li>Dimension: <b>{rickAndMorty.dimension}</b></li>
                <li>Population: <b>{[rickAndMorty.residents?.length]}</b></li>
            </ul>
            <div className='content-card'>
                {
                    currentPage?.map(e => (
                        <CardsInfo url={e} key={e} 
                        />
                    ))
                }
            </div> </>
        )
    };
    return (
        <div className='content-search'>
                <input
                    id='search__input'
                    className='search__input'
                    name='RianAndMorty'
                    type='search'
                    placeholder='type a location'
                    onChange={e => setTextLocation(e.target.value)}
                    onKeyDown={call_idAppiRick}
                    value={textLocation}/>
                <br />
            {mostrarInfo()}
            <div id='' className='Paginator' > 
                <div className='PaginatorBtn'>
                <button onClick={change1} className='Prev'><img src={Rick} alt="" /></button>
                <p className='numberPage'>{numberPage}/{numberTotalPage}</p>
                <button onClick={change2} className='Next'><img src={Morty} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Search;