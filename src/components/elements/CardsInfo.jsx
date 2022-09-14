import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/styles.css'
import card1 from'../../assets/Images/azul.png'
// import Card2 from'../../assets/css/styles/Images/morada.png'
// import Card3 from'../../assets/css/styles/Images/rosado.png'
//import card4 from'../../assets/Images/roja.png'
//import card5 from '../../assets/Images/verde.png'


const CardsInfo = ({url}) => {
  const [ infoPersonaje, setInfoPersonaje ] = useState([])
  /*
  const colorChange = () => {
    if (infoPersonaje.status === 'Alive') {
        return ("#148314")
    } else if (infoPersonaje.status === 'Dead') {
      return ("#ff0000")
    } else if (infoPersonaje.status === 'Unknow') {
      return ("#2e2825")
    }
  }

  const Card = [Card1, Card2, Card3, Card4, Card5]
    const randomCard = Math.floor(Math.random() * Card.length)
*/

  useEffect(() => {
    axios.get(url)
    .then(res => {
      console.log(res.data)
      setInfoPersonaje(res.data)
    })
  }, [url])

  return (
    <div className='info'> 
          <span className='status' style={{color: 'green'}}>{infoPersonaje.status}</span>
      <div className='cardInfo_total'>
        <div className='cardContent'>
          <img className='cardInfo' src={card1} alt="" /> 
        </div>
        <div className='CharacterInfo'>
          <img className='img-person' src={infoPersonaje.image} alt="" />
              <ul className='listaPersonajes'> 
                <li className='name'>{infoPersonaje?.name}</li>
                <li className='origin'>Origin: {infoPersonaje.origin?.name}</li>
                <li className='episodes'>Episodes where appear: {[infoPersonaje.episode?.length]}</li>
              </ul>
        </div>
        </div>
      </div>

    
  );
};

export default CardsInfo;