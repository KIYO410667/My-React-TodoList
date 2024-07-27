import { useState } from "react";
import BucketList from "./BucketList";
import CreateForms from "./CreateForms";

function TodoWrapper() {
  const [buckets, setBuckets] = useState([]);

  const handleBucket = (inputText) => {
    if (inputText !== ''){
      setBuckets([...buckets, 
        { inputText: inputText, id: Math.random(), isClicked: false, isEditing: false}]);
    }
  };

  const deleteBucket = (id) => {
    setBuckets(
      buckets.filter((bucket) => {
        return bucket.id !== id;
      })
    );
  };

  const toggleOnClickBucket = (id) =>{
    setBuckets(buckets.map((bucket) => {
        return bucket.id === id  //if this condition
        ? {...bucket, isClicked: !bucket.isClicked} //true
        : bucket //false
    }))
  }

  const toggleEditing = (id) => {
    setBuckets(buckets.map((bucket) =>{
      return bucket.id === id
      ? {...bucket, isEditing: !bucket.is}
      : bucket
    }))
  }

  const toggleCompleted = (id, completedText) => {
    setBuckets(buckets.map((bucket) => {
      return bucket.id === id
      ? {...bucket, isEditing: false, inputText: completedText}
      : bucket
    }))
  }

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
            toggleOnClickBucket={toggleOnClickBucket}
            toggleEditing={toggleEditing}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
