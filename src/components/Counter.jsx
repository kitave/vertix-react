import { useState } from 'react'

function Counter() {
    const [myNum, setMyNum] = useState(0)

    function btnClicked(){
       console.log(myNum)
    //    alert(myNum)
       setMyNum(myNum + 1)
    //    setMyNum(myNum*2)
    }


    return (
        <div className="container">
           <div className="row justify-content-center">
                <div className="col-sm-3">
                    <h2 className = 'text-info text-center'>{myNum}</h2>
                    <button className = 'btn btn-primary w-100' onClick= {btnClicked}>Click Yadda Tadda</button>
                </div>
            </div> 
        </div>
    )
}


export default Counter;