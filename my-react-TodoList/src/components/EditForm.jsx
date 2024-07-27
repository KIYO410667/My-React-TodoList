import React, { useState } from 'react';

function EditForm({bucket, toggleCompleted}) {
  const [inputText, setInputText] = useState(bucket.inputText);

  const handleTodo = (e) => {
    setInputText(e.target.value)
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    toggleCompleted(bucket.id, inputText)
  }


  return (
    <form className="form-container edit" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入想完成的事"
        value={inputText}
        onChange={handleTodo}
      ></input>
      <button type="submit">確認</button>
    </form>
  );

}
export default EditForm