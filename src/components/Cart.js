function Cart(){
    return(
        <div style={{display: 'none'}} className="overlay">
        <div className="overlay-modalcart">
          <div className="overlay-modalcart-items">
            <h2 className="overlay-modalcart-items-title">Корзина</h2>
            <div className="overlay-modalcart-items-item">
              <img className="overlay-modalcart-items-item-img" src="/img/sneakers3.jpg" alt="sneakers3" width={70} height={70}></img>
              <div className="overlay-modalcart-items-item-text">
                <p className="overlay-modalcart-items-item-text-p">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b className="overlay-modalcart-items-item-text-b">8 499 руб.</b>
              </div>
              <img src="/img/deletecart.svg" alt="deletebtn"></img>
            </div>
            <div className="overlay-modalcart-items-item">
              <img className="overlay-modalcart-items-item-img" src="/img/sneakers3.jpg" alt="sneakers3" width={70} height={70}></img>
              <div className="overlay-modalcart-items-item-text">
                <p className="overlay-modalcart-items-item-text-p">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b className="overlay-modalcart-items-item-text-b">8 499 руб.</b>
              </div>
              <img src="/img/deletecart.svg" alt="deletebtn"></img>
            </div>
          </div>
          <div className="overlay-modalcart-btm">
            <ul className="overlay-modalcart-btm-ul">
              <li className="overlay-modalcart-btm-ul-li">
                <span className="overlay-modalcart-btm-ul-li-span">Итого: </span>
                <div className="overlay-modalcart-btm-ul-li-line"></div>
                <b className="overlay-modalcart-btm-ul-li-b">21 498 руб. </b>
              </li>
              <li className="overlay-modalcart-btm-ul-li">
                <span className="overlay-modalcart-btm-ul-li-span">Налог 5%: </span>
                <div className="overlay-modalcart-btm-ul-li-line"></div>
                <b className="overlay-modalcart-btm-ul-li-b">1074 руб.</b>
              </li>
            </ul>
            <button className="overlay-modalcart-btm-buybtn">Оформить заказ
              <img src="/img/arrow-r.svg" alt="arrowright"></img>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Cart;