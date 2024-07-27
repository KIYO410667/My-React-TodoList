import { useState } from "react";
import BucketList from "./BucketList";
import CreateForms from "./CreateForms";

function TodoWrapper() {
  const [buckets, setBuckets] = useState([]);

  const handleBucket = (inputText) => {
    setBuckets([...buckets, 
      { inputText: inputText, id: Math.random(), isCompleted: false}]);
  };

  const deleteBucket = (id) => {
    setBuckets(
      buckets.filter((bucket) => {
        return bucket.id !== id;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>購物清單</h1>
      <CreateForms handleBucket={handleBucket} />
      {buckets.map((bucket) => {
        return (
          <BucketList
            bucket={bucket}
            key={bucket.id}
            deleteBucket={deleteBucket}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
