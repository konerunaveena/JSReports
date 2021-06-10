import React from 'react';

export default class Report extends React.Component {
  constructor(props) {
    super()
    this.state = {
      person: "naveena",
    }
  }

  componentDidMount() {
    console.log("Working");
  }

  render() {
    return (
      <>
        <h1>{this.state.person}</h1>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </>
    )

  }
}