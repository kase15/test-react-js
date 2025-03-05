import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton= () => alert();
  
    return (
      <div>
        <h1 style={{ color: "red"}}>こんにちは！</h1>
        <ColorfulMessage color="red" message="どう" />
        <ColorfulMessage color="blue" message="soso" />
        <button onClick={onClickButton} >ボタン</button>
      </div>
    );
  };