import {Bmi} from "../components/Bmi.jsx";
import {useEffect, useState} from "react";

export default function Home(){
    const [products, setProducts] = useState([])

    async function fetchProducts(){
        const response = await fetch("https://dummyjson.com/products");
        if(!response.ok){
            console.log(response)
        }
        //js promises
        const data = await response.json()
        console.log()
        setProducts(data.products);
    }
    //hook
    useEffect(()=>{
        fetchProducts()
    }, [])


    let productList = products.map((product)=> <div>
                                                                <img src = {product.thumbnail} alt=""/>
                                                                <h3>{product.title}</h3>
                                                                <p>{product.price}</p>
                                                            </div>)


    return (
       <div>
           <h1>Home</h1>
           {/*<Bmi/>*/}
           <div className="container">
               {productList}
           </div>
       </div>
    )
}