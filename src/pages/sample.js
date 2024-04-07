import React, {  useState } from "react";
import { Game } from "../Game";
import { Board } from "../Board";
const Sample = () => {
    let sample_url = 'https://prog2700.onrender.com/threeinarow/sample';
    // let random_url='https://prog2700.onrender.com/threeinarow/random';
    // const [passurl,setPassurl]=useState('');
    // {title, url}
    return (
        <div  style={{ margin: '0 auto', textAlign: 'center' }}>
            <h1>
                Sample Page
            </h1>
            <button >Reload</button>  

            <Board url={sample_url}/>
        </div>
    );
};
 
export default Sample;

// Credit https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/