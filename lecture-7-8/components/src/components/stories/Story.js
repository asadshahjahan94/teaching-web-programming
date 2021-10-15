import React, {Component} from 'react';

// class Story extends Component {

//     render = () => {
//         return (
//             <main role="main" class="container">
//                 <h1 class="mt-5">{this.props.story.title}</h1>
//                 <p class="lead">{this.props.story?.intro}</p>
//                 <a href="some_link">Load more</a>
//             </main>
//         )
//     }

// }

const Story = (props) => {
    return (
        <main role="main" class="container">
            <h1 class="mt-5">{props.story.title}</h1>
            <p class="lead">{props.story?.intro}</p>
            <a href="some_link">Load more</a>
        </main>
    )
}

export default Story
