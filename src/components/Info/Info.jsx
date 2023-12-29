import React from 'react'
import storeContext from '../../context'

export const Info = ({title, image, description}) => {
    const {setCartOpen} = React.useContext(storeContext)
  return (
    <div className="overlay-modalcart-empty">
        <img src={image}  height={120} alt="box"/> 
        <h2 className="overlay-modalcart-empty-title">{title}</h2>
        <p className="overlay-modalcart-empty-p">{description}</p>
        <button onClick={() => setCartOpen(false)} className="overlay-modalcart-empty-btn">                
            <img src="/img/arrow-left.svg" alt="arrowrleft"/>
            Вернуться назад</button>
    </div>
    )
}

export default Info;