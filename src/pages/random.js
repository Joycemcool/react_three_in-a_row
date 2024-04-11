import React from "react";
import { Board } from "../Board";

const Random = () => {
    let random_url='https://prog2700.onrender.com/threeinarow/random';

    return (
        <div  style={{ margin: '0 auto', textAlign: 'center' }}>
            <h1>
                Random Page
            </h1>
            <Board url={random_url}/>

        </div>
    );
};
 
export default Random;