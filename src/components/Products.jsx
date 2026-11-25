

let data =[
    {id:1, name:"Earphones", price:300},
    {id:2, name:"Wireless Charger", price:4000},
    {id:3, name:"Phone", price:29000},
    {id:4, name:"Casing", price:500},

]



export function Products(){
    let productList = data.map(product => <div>
        <h2>{product.name}</h2>
        <p>Kshs.{product.price}</p>
    </div>)

    let productList2 = data.map(({id, name, price}) => <div>
        <h2>{name}</h2>
        <p>Kshs.{price}</p>
    </div>)


    return(
        <div className="container">
            <div className = "row">
                {productList}
            </div>
        </div>
    )
 }