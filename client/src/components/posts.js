import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions";

class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data, loading, error } = this.props.posts;

    return (
      <div>
        <h2>API posts</h2>
        {loading ? (
          <p>Loading the posts...</p>
        ) : (
          <ul>
            {data.map((el) => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.root,
  };
};

export default connect(mapStateToProps, { getData })(Post);
