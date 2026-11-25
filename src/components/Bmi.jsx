import { useState } from "react";

export function Bmi(){

    const[weight, setWeight] = useState(0)
    const[height, setHeight] = useState(0)
    const[bmi, setBmi] = useState(0)

    function handleWeightChange(e){
        setWeight(e.target.value)
    }

    function handleHeightChange(e){
        setHeight(e.target.value)
    }


    function handleSubmit(e){
        e.preventDefault()
        let bmi = weight/ height**2
        setBmi(bmi)
    }


    return(
        <div className="container">
            <div className = "row justify-content-center">
                <div className="col-sm-4 pt-4">
                    <form onSubmit={handleSubmit}>
                        <input type="number" step="0.01" onChange={handleWeightChange} placeholder="Enter your weight in Kgs" className = "form-control mb-3"></input>
                        <input type="number" step="0.01" onChange={handleHeightChange} placeholder="Enter your height in Meters" className = "form-control mb-3"></input>
                        <button className = "btn btn-primary w-100">Calculate BMI</button>
                    </form>
                    <h3 className = "text-center">Your BMI is:{bmi} </h3>
                </div>
            </div>
        </div>
    )
}