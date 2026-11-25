import { useState } from 'react';

export function DollarConverter(){
    const [convertedAmount, setAmount] = useState(0)


    function handleAmountChange(e){
        let amount = e.target.value
        let dollars = amount/130
        setAmount(dollars)
    }


    return(
        <div className="container">
            <div className = "row justify-content-center">
                <div className="col-sm-4 pt-4">
                    <input type="number" onChange = {handleAmountChange} placeholder="Enter amount in USD" className = "form-control"></input>
                    <p className = "text-center">{convertedAmount}</p>
                </div>
            </div>
        </div>
    )}