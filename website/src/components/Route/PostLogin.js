import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { stories } from "../../shared/stories";
import Header from "../Common/Header";

import Stories from "../Pages/Stories";
import Story from "../Pages/Story";

const PostLogin = ({ loginDetails }) => {
    const StoriesPage = () => <Stories stories={stories} />;

    const StoryPage = ({ match }) => <Story story={stories.filter((story) => story.id == match.params.id)[0]} />;

    return (
        <>
            <Header loginDetails={loginDetails} />
            <Switch>
                <Route exact path="/stories" component={StoriesPage} />
                <Route path="/stories/:id" component={StoryPage} />
                <Redirect to="/stories" />
            </Switch>
        </>
    );
};

export default PostLogin;
