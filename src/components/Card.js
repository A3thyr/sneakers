
function Card(){
    return(
    <div className="content-list-card">
        <div className="content-list-card-liked">
            <img src="/img/unliked.svg" alt="unliked"></img>
        </div>
        <img src="/img/sneakers1.jpg" width={133} height={112} alt="sneakers1"></img>
        <p className="content-list-card-p">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="content-list-card-btm">
            <div className="content-list-card-btm-text">
            <span className="content-list-card-btm-text-span">Цена:</span>
            <b className="content-list-card-btm-text-b">12 999 руб.</b>
            </div>
            <button className="content-list-card-btm-btn">
            <img src="/img/add.svg" alt="add"></img>
            </button>
        </div>
    </div>
    );
}


export default Card;