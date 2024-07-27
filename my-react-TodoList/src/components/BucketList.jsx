import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function BucketList({
  bucket,
  deleteBucket,
  toggleOnClickBucket,
  toggleEditing,
  toggleCompleted
}) {
  return bucket.isEditing ? (
    <EditForm bucket={bucket} toggleCompleted={toggleCompleted}/>
  ) : (
    <div className={`bucket ${bucket.isClicked ? "clicked" : ""}`}>
      <p
        onClick={() => {
          toggleOnClickBucket(bucket.id);
        }}
      >
        {bucket.inputText}
      </p>
      <div>
        <MdEdit
          style={{ marginLeft: "5px", cursor: "pointer" }}
          onClick={() => {
            toggleEditing(bucket.id);
          }}
        />
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
