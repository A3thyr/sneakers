import React from 'react'
import axios from 'axios';

import Info from '../Info/Info';
import styles from './Cart.module.scss';

import { useCart } from '../../hooks/useCart';

function Cart({onClose, onRemove, items = [], opened}){
  const {cartItems, setCartItems, sumPrice} = useCart();
  const [orderId, setOrderId] = React.useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))

  const onClickOrder = async () =>{
    try {
      setIsLoading(true)
      const {data} = await axios.post("https://658c1630859b3491d3f57382.mockapi.io/orders", {
        items: cartItems
      })
      setOrderId(data.id)
      setIsOrderCompleted(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6582a71902f747c83679cc3f.mockapi.io/cart/' + item.id)
        await delay()
      }
    } catch (error) {
      console.log('Трабл с созданием заказа')
    }
  };

  return(
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`} >
      <div className={styles.overlay_modalcart}>
        <div className="overlay_modalcart-top">
          <h2 className="overlay_modalcart-top-title">Корзина</h2>
          <img src="/img/deletecart.svg" className="overlay_modalcart-top-btn" alt="deletebtn" onClick={onClose}/>
        </div>
        {items.length > 0 ? (
          <div className="overlay_modalcart-items">
            <div >
              {items.map((obj) => (
              <div key={obj.id} className="overlay_modalcart-items-item">
                <img className="overlay_modalcart-items-item-img" src={obj.imageUrl} alt="sneakers3" width={70} height={70}></img>
                <div className="overlay_modalcart-items-item-text">
                  <p className="overlay_modalcart-items-item-text-p">{obj.title}</p>
                  <b className="overlay_modalcart-items-item-text-b">{obj.price} руб.</b>
                </div>
                <img src="/img/deletecart.svg" alt="deletebtn" onClick={() => onRemove(obj.id)}/>
              </div>
              ))}
            </div>
            <div className="overlay_modalcart-btm">
              <ul className="overlay_modalcart-btm-ul">
                <li className="overlay_modalcart-btm-ul-li">
                  <span className="overlay_modalcart-btm-ul-li-span">Итого: </span>
                  <div className="overlay_modalcart-btm-ul-li-line"></div>
                  <b className="overlay_modalcart-btm-ul-li-b">{sumPrice} руб. </b>
                </li>
                <li className="overlay_modalcart-btm-ul-li">
                  <span className="overlay_modalcart-btm-ul-li-span">Налог 5%: </span>
                  <div className="overlay_modalcart-btm-ul-li-line"></div>
                  <b className="overlay_modalcart-btm-ul-li-b">{Math.round(sumPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="overlay_modalcart-btm-buybtn">Оформить заказ
                <img src="/img/arrow-r.svg" alt="arrowright"></img>
              </button>
            </div>
          </div>
          ) : (
            <Info 
              title={isOrderCompleted ? "Заказ оформлен!" :  "Корзина пустая" }
              description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} 
              image={isOrderCompleted ? "/img/ordercomplete.jpg" : "/img/emptycart.jpg" }
            />
          )
        } 
      </div>
    </div>
  );
}

export default Cart;