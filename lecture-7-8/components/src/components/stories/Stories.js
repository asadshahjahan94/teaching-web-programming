import React, { Component } from "react";
import Story from "./Story"

class Stories extends Component {
    render = () => {
        const stories = [
            {"title": "This is title # 1", "intro": "This is intro # 1"},
            {"title": "This is title # 2", "intro": "This is intro # 2"},
            {"title": "This is title # 3", "intro": "This is intro # 3"},
        ]

        return ( stories.map(story => <Story story={story} />) )
    }
}

export default Stories
