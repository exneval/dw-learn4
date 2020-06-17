import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { articles } = this.props;

    return (
      <ul>
        {articles.map((el) => (
          <li key={el.title + new Date().toString()}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.root.articles,
  };
};

export default connect(mapStateToProps)(List);
