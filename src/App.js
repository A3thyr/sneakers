import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

const array = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price : 12999},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999},
];

function App() {
  return (
    <div className="page">
      <Cart/>
      <Header></Header>
      <div className="content">
        <div className="content-top">
          <h1 className="content-top-title">Все кроссовки</h1>
          <div className="content-top-search">
            <img src="/img/search.svg" alt="searchicon"></img>
            <input className="content-top-search-input" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="content-list">
          {

          }
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
