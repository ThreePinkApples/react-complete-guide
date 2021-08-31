import { useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = props;
  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddComment = useCallback(() => {
    setIsAddingComment(false);
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (
    status === "completed" &&
    loadedComments &&
    loadedComments.length > 0
  ) {
    comments = <CommentsList comments={loadedComments} />;
  } else if (status === "completed") {
    comments = <p className="centered">No comments</p>;
  }

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {comments}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddComment={onAddComment} />
      )}
    </section>
  );
};

export default Comments;
