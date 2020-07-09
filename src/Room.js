import React, {useState} from 'react';
import './Room.css';

function Room() {
    //const state = useState(true);
    //console.log("State = ",state);
    let [isLit, setLit]=useState(false);
    let [age, setAge] = useState(24);
    let [temperature, setTemperature] = useState(72);
    //let hello ='Hello '+ isLit +'world';
    //let hello = 'Hello ${isLit} world';

    return (
        <div className={`room ${isLit?"lit":"dark"}`}>
        This Room is {isLit?"lit":"dark"}
        <br/>
        <button onClick={()=> setLit(true) }>ON</button>&nbsp;
        <button onClick={()=> setLit(false) }>OFF</button>
        <br/><br/>
        Temperature: {temperature}&nbsp;
        <button onClick={()=>setTemperature(++temperature)}>+</button>&nbsp;
        <button onClick={()=>setTemperature(--temperature)}>-</button>
        <br/><br/>
        Age : {age}
        <br/>
        <button onClick={() => {
                    console.log("Increase age arrow function");
                    setAge(++age);
                    }}>
                Increase Age
            </button>
        </div>
    );
}

export default Room;
