import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const comments = [
  {
    name: "Jane",
    date: "Today at 7:08PM",
    comment: "I have 145 eggs in Spyro!",
  },
  {
    name: "Sam",
    date: "Today at 6:10PM",
    comment: "k",
  },
];

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={comments[0].name}
          comment={comments[0].comment}
          timeAgo={comments[0].timeAgo}
          avatar={faker.image.cats()}
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={comments[1].name}
          comment={comments[1].comment}
          timeAgo={comments[1].timeAgo}
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h1>Warning!</h1>
          <p>Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
