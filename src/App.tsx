import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const[isshowFace, setIsShowFace] = useState(false);
  const onClickCountUp =() => {
      setNum((prev => prev +1));
     };
     const onClickToggle = () => {
      setIsShowFace(!isshowFace);
     };

     useEffect(() => {
      if(num > 0){
        if (num % 3 ===0){
          isshowFace || setIsShowFace(true);
        } else {
          isshowFace && setIsShowFace(false)
        }
       }
     },[num]);


    return (
      <div>
        <h1 style={{ color: "red"}}>こんにちは！</h1>
        <ColorfulMessage color="red">どうですか</ColorfulMessage>
        <ColorfulMessage color="blue">まあまあ〜</ColorfulMessage>
        <button onClick={onClickCountUp} >ボタン</button>
        <p>{num}</p>
        <button onClick={onClickToggle}>on/off</button>
        {isshowFace && <p>(^^)/</p>}        
      </div>
    );
}