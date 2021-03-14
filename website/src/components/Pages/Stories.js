import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Stories extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {

		const stories = this.props.stories.map((story) => (
			<div key={story.id} className="story-entry">
				<h2>{story.title}</h2>
				<p className="author">{story.author}</p>
				<hr />
				<p className="description">{story.description}</p>
				<p className="views">
					<FontAwesomeIcon icon={faEye} />
					{story.views}
				</p>
				<Link to={`/stories/${story.id}`} ><div className="story-selector"></div></Link>
			</div>
		));

		return (
			<>
				<div className="body">
					<button className="add-story mobile-only">+</button>
					<button className="add-story">
						<FontAwesomeIcon icon={faPlus} />
						Add Story
					</button>
					<div className="stories">{stories}</div>
				</div>
			</>
		);
	}
}
