import React from "react";
import Card from "../components/Card/Card";


function Home({items,
    findItems,
    onSearchInput,
    setFindItems,
    addToFavorites,
    
    addToCart,
    isLoading,
    }){
        
        const renderItems = () =>{
            const filtredItems = items.filter(item => item.title.includes(findItems.charAt(0).toUpperCase()),
            );
            return (isLoading ? [...Array(12)] : filtredItems).map((item,index) => (
                <Card 
                    key={index}
                    onClickFav = {(obj) => addToFavorites(obj)}
                    onPlus = {(obj) => addToCart(obj)}
                
                    loading = {isLoading}
                    {...item}
                />
            ));
        }

    return (
        <div className="content">
            <div className="content-top">
            <h1 className="content-top-title">{findItems ? `Поиск по запросу: "${findItems}"` : 'Все кроссовки'}</h1>
            <div className="content-top-search">
                <img src="/img/search.svg" alt="searchicon"></img>
                <input 
                onChange={onSearchInput} 
                value={findItems} 
                className="content-top-search-input" 
                placeholder="Поиск..."></input>
                {findItems && <img className="content-top-search-cross" onClick={() => setFindItems('')} src="/img/deletecart.svg" alt="clear"/>}
            </div>
            </div>
            <div className="content-list">
            {  
                renderItems()
            }
            </div>
        </div>
    );
}

export default Home;