import React, { Component } from "react";
import { connect } from "react-redux";
import { register, login } from "../redux/actions/auth";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.register(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { data: dataUser, loading, error } = this.props.auth;
    const { data } = this.state;

    return (
      <>
        {loading ? (
          <h3>Registration ....</h3>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <h1>{dataUser.email}</h1>
        )}
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              Fullname:
              <input
                name="fullName"
                type="text"
                value={data.fullName ? data.fullName : ""}
                onChange={this.handleChange}
              />
            </label>
            <label style={{ marginTop: 12 }}>
              email:
              <input
                style={{ marginLeft: 24 }}
                name="email"
                type="email"
                value={data.email ? data.email : ""}
                onChange={this.handleChange}
              />
            </label>
            <label style={{ marginTop: 12 }}>
              password:
              <input
                name="password"
                type="password"
                value={data.password ? data.password : ""}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button style={{ marginTop: 20, marginLeft: 20 }} type="submit">
            Register
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { register, login })(User);
