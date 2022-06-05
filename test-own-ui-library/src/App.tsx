import React from 'react';
import './App.css';
import {MyButton, MyInput} from "own-ui-library";

function App() {
  return (
    <div className="App">
      <MyButton color={"red"} big={true}>Кнопка</MyButton><br/>
      <MyInput type="text" label="Ввод текста" placeholder="Введите текст" big/>
    </div>
  );
}

export default App;
