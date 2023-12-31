import React from "react";
import Card from "../components/Card/Card";

import axios from "axios";


function Orders(){
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);

    React.useEffect(() => {
        (async () =>{
            try {
                const {data} = await axios.get('https://658c1630859b3491d3f57382.mockapi.io/orders');
                setOrders(data.reduce((prev,obj) => [...prev, ...obj.items], []))
                setisLoading(false)
            } catch (error) {
                console.error('Трабл с получением данных о заказе')
            }
        })();
    }, [])

    return (
        <div className="content">
                <h1 className="content-top-title">Мои заказы</h1>
                <div className="content-list">
                { (isLoading ? [...Array(12)] : orders).map((item, index) => (
                    <Card 
                        key={index}
                        loading = {isLoading}
                        {...item}
                    />
                ))}
                </div>
        </div>
    );
}

export default Orders;