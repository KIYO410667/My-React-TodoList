import { useState } from "react";

function CreateForms() {

  const [inputText, setInputText] = useState('');

  const handleTodo = (e) => {
    setInputText(e.target.value);
  }

  return (
    <form className="form-container">
      <input type="text" placeholder="輸入要買的東西" 
      value={inputText} onChange={handleTodo}></input>
      <button type="submit">加入</button>
    </form>
  );
}

export default CreateForms
