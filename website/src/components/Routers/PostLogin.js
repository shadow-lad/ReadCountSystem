import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../Common/Header";

import Stories from "../Pages/Stories";
import Story from "../Pages/Story";

export default class PostLogin extends Component {
	render() {
		const StoryPage = () => (
			<Stories
				stories={[
					{
						id: 1,
						title: "Hello World",
						author: "shadow",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed perferendis? Exillo inventore minus? Et nostrum excepturi tempore animi autem quasi repellat! Obcaecati debitis nam magnivitae numquam error voluptatum itaque?",
						views: 123,
					},
					{
						id: 2,
						title: "Hello World",
						author: "shadow",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed perferendis? Exillo inventore minus? Et nostrum excepturi tempore animi autem quasi repellat! Obcaecati debitis nam magnivitae numquam error voluptatum itaque?",
						views: 123,
					},
					{
						id: 3,
						title: "Hello World",
						author: "shadow",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed perferendis? Exillo inventore minus? Et nostrum excepturi tempore animi autem quasi repellat! Obcaecati debitis nam magnivitae numquam error voluptatum itaque?",
						views: 123,
					},
					{
						id: 4,
						title: "Hello World",
						author: "shadow",
						description:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed perferendis? Exillo inventore minus? Et nostrum excepturi tempore animi autem quasi repellat! Obcaecati debitis nam magnivitae numquam error voluptatum itaque?",
						views: 123,
					},
				]}
			/>
		);

		console.log("Rendered PostLogin");

		return (
			<>
				<Header loginDetails={this.props.loginDetails} />
				<Switch>
					<Route exact path="/stories" component={StoryPage} />
					<Route path="/stories/:id" component={Story} />
					<Redirect to="/stories" />
				</Switch>
			</>
		);
	}
}
