import { useState } from "react";
import styles from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={props.quoteId} />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
