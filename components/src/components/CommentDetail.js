import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
            <div className="text">{props.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
