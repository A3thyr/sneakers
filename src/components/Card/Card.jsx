import React from "react";
import ContentLoader from "react-content-loader";
import storeContext from "../../context";

function Card({
        onClickFav, 
        onPlus, 
        title,
        price, 
        imageUrl, 
        favorited, 
        id, 
        loading = false
})  {
    const {isItemAddCard} = React.useContext(storeContext)
    const [favorite, setFavorite] = React.useState(favorited);
    const obj = {title, price, imageUrl, id , parentId : id}
    
    const onClickPlus = () =>{
        onPlus(obj);
        
    }; 

    const onClickFavorite = () =>{
        onClickFav(obj);
        setFavorite(!favorite)
    }

    return(
    <div className="content-list-card">
        {
            loading ? 
                <ContentLoader
                    speed={2}
                    width={155}
                    height={265}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x={1} y={0} rx={10} ry={10} width={150} height={155} />
                    <rect x={0} y={167} rx={5} ry={5} width={150} height={15} />
                    <rect x={0} y={187} rx={5} ry={5} width={100} height={15} />
                    <rect x={1} y={234} rx={5} ry={5} width={80} height={25} />
                    <rect x={124} y={230} rx={10} ry={10} width={32} height={32} />
                </ContentLoader> 
            : 
            <>
                <div className="content-list-card-liked" onClick={onClickFavorite}>
                   {onClickFav && ( <img 
                        src={favorite ? "/img/liked.svg" : "/img/like.svg"} 
                        alt="unliked">
                    </img>)}
                </div>
                <img src={imageUrl} width={133} height={112} alt="sneakers1"></img>
                <p className="content-list-card-p">{title}</p>
                <div className="content-list-card-btm">
                    <div className="content-list-card-btm-text">
                    <span className="content-list-card-btm-text-span">Цена:</span>
                    <b className="content-list-card-btm-text-b">{price} руб.</b>
                    </div>
                    {onPlus && (<img 
                        className="content-list-card-btm-btn" 
                        src={isItemAddCard(id) ? "/img/checked.svg"  : "/img/add.svg"} 
                        onClick={onClickPlus} 
                        alt="add">
                    </img>)}
                </div>
            </>
        }
    </div>
    );
}


export default Card;