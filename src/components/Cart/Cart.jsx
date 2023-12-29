import React from 'react'
import Info from '../Info/Info';
import storeContext from '../../context';
import axios from 'axios';

function Cart({onClose, onRemove, items = []}){
  const {cartItems,setCartItems} = React.useContext(storeContext)
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
    setIsLoading(false)
  };

  return(
      <div className="overlay">
        <div className="overlay-modalcart">
          <div className="overlay-modalcart-items">
            <h2 className="overlay-modalcart-items-title">Корзина</h2>
          </div>
          {items.length > 0 ? (
            <div>
              <div>
                {items.map((obj) => (
                <div key={obj.id} className="overlay-modalcart-items-item">
                  <img className="overlay-modalcart-items-item-img" src={obj.imageUrl} alt="sneakers3" width={70} height={70}></img>
                  <div className="overlay-modalcart-items-item-text">
                    <p className="overlay-modalcart-items-item-text-p">{obj.title}</p>
                    <b className="overlay-modalcart-items-item-text-b">{obj.price} руб.</b>
                  </div>
                  <img src="/img/deletecart.svg" alt="deletebtn" onClick={() => onRemove(obj.id)}/>
                </div>
                ))}
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
                <button disabled={isLoading} onClick={onClickOrder} className="overlay-modalcart-btm-buybtn">Оформить заказ
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