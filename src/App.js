import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import {  Routes, Route } from 'react-router-dom';
import Favorites from "./pages/Favorites";
import storeContext from "./context";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [findItems, setFindItems] = React.useState('');
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() =>{
    async function fetchData(){
      const cartResponse = await axios.get('https://6582a71902f747c83679cc3f.mockapi.io/cart');
      const favResponse = await axios.get('https://658c1630859b3491d3f57382.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://6582a71902f747c83679cc3f.mockapi.io/items');
      
      
      setCartItems(cartResponse.data);
      setFavorites(favResponse.data);
      setItems(itemsResponse.data);
      setisLoading(false);
    }

    fetchData();
  }, []);

  const addToCart = (obj) =>{
    try {
      if(cartItems.find(cartObj => Number(cartObj.id) === Number(obj.id))){
        axios.delete(`https://6582a71902f747c83679cc3f.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else{
        axios.post('https://6582a71902f747c83679cc3f.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (error) {
      console.log('Трабл')
    } 
  };

  const onClickDel = (id) =>{
    axios.delete(`https://6582a71902f747c83679cc3f.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
    
  };
  
  const addToFavorites = async (obj) =>{
    try {
      if(favorites.find(favObj => Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://658c1630859b3491d3f57382.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else{
        const { data } = await axios.post('https://658c1630859b3491d3f57382.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      console.log('Траблс')
    } 
  };


  const onSearchInput = (event) =>{
    setFindItems(event.target.value);
  };

  const isItemAddCard = (id) =>{
    return cartItems.some(obj => Number(obj.id) === Number(id));
  };

  return (
    <storeContext.Provider value={{items, cartItems, favorites, isItemAddCard, setCartOpen,setCartItems}}>
      <div className="page">
        {cartOpen && <Cart items={cartItems} onClose={() => setCartOpen(false)} onRemove={onClickDel} />}
        <Header onClickCart={() => setCartOpen(true)}  />
          <Routes >
            <Route path='/' exact element={<Home 
                items={items}
                findItems={findItems}
                cartItems={cartItems}
                onSearchInput={onSearchInput}
                setFindItems={setFindItems}
                addToFavorites={addToFavorites}
                addToCart={addToCart}
                isLoading={isLoading}
              />}>
            </Route>
            <Route exact path="/favorites" element={<Favorites addToFavorites={addToFavorites}/>}>
            </Route>
            <Route exact path="/orders">

            </Route>
          </Routes>
      </div>
    </storeContext.Provider>
  );
}

export default App;
