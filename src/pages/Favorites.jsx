import React from "react";
import Card from "../components/Card/Card";
import storeContext from "../context";

function Favorites({addToFavorites}){

    const {favorites} = React.useContext(storeContext);

    return (
        <div className="content">
                <h1 className="content-top-title">Мои закладки</h1>
                <div className="content-list">
                {favorites.map((item, index) => (
                    <Card 
                    key={index}
                    {...item}
                    favorited = {true}
                    onClickFav = {addToFavorites}
                    />
                ))}
                </div>
        </div>
    );
}

export default Favorites;