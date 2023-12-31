import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Header(props){
  const {sumPrice} = useCart();
  
    return (
        <header className="page-header">
        <div className="page-header-icon">
          <Link className="page-header-icon" to="/">
            <img src="img/logo.png" width={40} height={40} alt="logo"/>
            <div className="page-header-icon-text">
              <h3 className="page-header-icon-text-title">REACT SNEAKERS</h3>
              <p className="page-header-icon-text-p">Магазин лучших кроссовок</p>
            </div>   
          </Link>
        </div>
        <ul className="page-header-ul">
          <li onClick={props.onClickCart} className="page-header-ul-li">
            <img src="/img/cart.svg" alt="cart"/>
            <span className="page-header-ul-li-price">{sumPrice} руб.</span>
          </li>
          <li className="page-header-ul-li">
            <Link className="page-header-ul-li" to="/favorites">
              <img src="/img/like.svg" alt="like"/>
              <span className="page-header-ul-li-span">Закладки</span>
            </Link>
          </li>
          <li className="page-header-ul-li">
            <Link className="page-header-ul-li" to="/orders">
              <img src="/img/icon.svg" alt="icon"/>
              <span className="page-header-ul-li-span">Профиль</span>
            </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;