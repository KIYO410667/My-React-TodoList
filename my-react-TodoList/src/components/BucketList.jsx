import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function BucketList({ bucket, deleteBucket, toggleOnClickBucket}) {
  return (
    <div className={`bucket ${bucket.isClicked ? 'clicked' : ''}`}
    onClick ={() => {toggleOnClickBucket(bucket.id)}}>
      <p>{bucket.inputText}</p>
      <div>
        <MdEdit style={{ marginLeft: "5px", cursor: "pointer" }} />
        <MdOutlineDeleteOutline
          onClick={() => {
            deleteBucket(bucket.id);
          }}
          style={{ marginLeft: "5px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default BucketList;
