import { useState } from "react";
import BucketList from "./BucketList";
import CreateForms from "./CreateForms";

function TodoWrapper() {

  const [buckets, setBuckets]= useState([
  ]);

  const handleBucket = (inputText) =>{
    setBuckets([...buckets, {inputText: inputText, id: Math.random()}]);
  }

  return (
    <div className="wrapper">
      <h1>購物清單</h1>
      <CreateForms handleBucket={handleBucket}/>
      {buckets.map((item) => {
        return <BucketList bucket={item} />
      })}
    </div>
  );
}

export default TodoWrapper;
