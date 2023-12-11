function Header(){
    return (
        <header className="page-header">
        <div className="page-header-icon">
          <img src="img/logo.png" width={40} height={40} alt="logo"/>
          <div className="page-header-icon-text">
            <h3 className="page-header-icon-text-title">REACT SNEAKERS</h3>
            <p className="page-header-icon-text-p">Магазин лучших кроссовок</p>
          </div>      
        </div>
        <ul className="page-header-ul">
          <li className="page-header-ul-li">
            <img src="/img/cart.svg" alt="cart"/>
            <span className="page-header-ul-li-price">1205 руб.</span>
          </li>
          <li className="page-header-ul-li">
            <img src="/img/like.svg" alt="like"/>
            <span className="page-header-ul-li-span">Закладки</span>
          </li>
          <li className="page-header-ul-li">
            <img src="/img/icon.svg" alt="icon"/>
            <span className="page-header-ul-li-span">Профиль</span>
          </li>
        </ul>
      </header>
    );
}

export default Header;