import React, { Component } from "react";

export default class Story extends Component {
	render() {
		console.log(this.props);
	return <h1 className="story-title">{this.props.story.title}</h1>;
	}
}
