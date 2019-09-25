import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Derek"
				timeAgo="Today at 4:45pm"
				commentText="Awesome post"
			/>
			<CommentDetail
				author="Arnold"
				timeAgo="Today at 2:00pm"
				commentText="Brilliant post"
			/>
			<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 1:15pm"
				commentText="Rubbish post"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
