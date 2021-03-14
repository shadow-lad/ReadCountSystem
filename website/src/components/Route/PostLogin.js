import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { stories } from "../../shared/stories";
import Header from "../Common/Header";

import Stories from "../Pages/Stories";
import Story from "../Pages/Story";

export default class PostLogin extends Component {
	render() {
		const StoriesPage = () => <Stories stories={stories} />;

		const StoryPage = ({ match }) => (
			<Story
				story={
					stories.filter(
						(story) => story.id === parseInt(match.params.id, 10)
					)[0]
				}
			/>
		);

		return (
			<>
				<Header loginDetails={this.props.loginDetails} />
				<Switch>
					<Route exact path="/stories" component={StoriesPage} />
					<Route path="/stories/:id" component={StoryPage} />
					<Redirect to="/stories" />
				</Switch>
			</>
		);
	}
}
