import React from "react";
import Card from "../components/Card/Card";
import storeContext from "../context";
import Info from "../components/Info/Info";

function Favorites({addToFavorites}){

    const {favorites} = React.useContext(storeContext);

    return (
        <div className="content">
                <h1 className="content-top-title">Мои закладки</h1>
                {favorites.length > 1 ? (<div className="content-list">
                    {favorites.map((item, index) => (
                        <Card 
                        key={index}
                        {...item}
                        favorited = {true}
                        onClickFav = {addToFavorites}
                        />
                    ))}
                </div>
                ) : (
                    <Info 
                        title={"Закладок нет :("}
                        description={"Вы ничего не добавляли в закладки"}
                        image={"/img/sadge.jpg"}
                    />
                )}
        </div>
    );
}

export default Favorites;