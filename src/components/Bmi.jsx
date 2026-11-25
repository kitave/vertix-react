import { useState } from "react";

export function Bmi(){

    const[weight, setWeight] = useState(0)
    const[height, setHeight] = useState(0)
    const[bmi, setBmi] = useState(0)
    const[category, setCategory] = useState('')
    const[isDanger, setIsDanger] = useState(false)


    function handleWeightChange(e){
        setWeight(e.target.value)
    }

    function handleHeightChange(e){
        setHeight(e.target.value)
    }


    function handleSubmit(e){
        e.preventDefault()
        let bmi = weight/ height**2
        bmi =  Math.round(bmi*100)/100
        setBmi(bmi)
        if (bmi < 18.5) {
            setCategory('Underweight')
            setIsDanger(true)
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            setCategory('Normal weight')
            setIsDanger(false)
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            setCategory('Overweight')
            setIsDanger(true)
        }
        else if (bmi >= 30 && bmi <= 34.9) {
            setCategory('Obesity 1')
            setIsDanger(true)
        }
        else if (bmi >= 35 && bmi <= 39.9) {
            setCategory('Obesity 2')
            setIsDanger(true)
        }
        else {
            setCategory('Obesity 3')
            setIsDanger(true)
        }
    }

    let color = isDanger? 'text-danger' : 'text-success'

    let user = null //{name:"Hellen", email:"hellen@txt.com"}

    let display = user ? <p>{user?.name}</p> : <p>Guest</p>

    return(
        <div className="container">
            <div className = "row justify-content-center">
                <div className="col-sm-4 pt-4 border mt-5 pt-4">
                    <h2>BMI Calculator</h2>
                    {display}
                    <form onSubmit={handleSubmit}>
                        <input type="number" step="0.01" onChange={handleWeightChange} placeholder="Enter your weight in Kgs" className = "form-control mb-3"></input>
                        <input type="number" step="0.01" onChange={handleHeightChange} placeholder="Enter your height in Meters" className = "form-control mb-3"></input>
                        <button className = "btn btn-primary w-100">Calculate BMI</button>
                    </form>
                    <h3 className ={`text-center ${color}`}>{bmi} {category} </h3>
                </div>
            </div>
        </div>
    )
}