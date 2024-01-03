import React from 'react'
import storeContext from '../../context'
import { Link } from 'react-router-dom'

export const Info = ({title, image, description}) => {
    const {setCartOpen} = React.useContext(storeContext)
  return (
    <div className="overlay_modalcart-empty">
        <img src={image}   alt="box"/> 
        <h2 className="overlay_modalcart-empty-title">{title}</h2>
        <p className="overlay_modalcart-empty-p">{description}</p>
        <Link to="/">
          <button onClick={() => setCartOpen(false)} className="overlay_modalcart-empty-btn">                
              <img src="/img/arrow-left.svg" alt="arrowrleft"/>
              Вернуться назад</button>
        </Link>
    </div>
    )
}

export default Info;