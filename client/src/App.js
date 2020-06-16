import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import store from "./redux/store";
import { addCounter, subCounter } from "./redux/actions/counter";

store.subscribe(() => console.log(store.getState().number));

class Child extends Component {
  handleClick = (isAdd = true) => {
    if (isAdd) store.dispatch(addCounter(store.getState().number.counter));
    else store.dispatch(subCounter(store.getState().number.counter));
  };

  render() {
    return (
      <div>
        <h1>COUNTER</h1>
        <button onClick={this.handleClick}>Increment Me!</button>
        <button onClick={() => this.handleClick(false)}>Decrement Me!</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data: {},
    };
  }

  handleGetUsers = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:5000/api/v1/users");
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.handleGetUsers();
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { data },
      } = await axios.post(
        "http://localhost:5000/api/v1/register",
        this.state.data
      );
      localStorage.setItem("token", data.token);
      this.setState({ data: {} });
    } catch (error) {
      if (error.response) {
        const { data, status } = error.response;

        if (status > 399) alert(data.error.message);
      }
    }
  };

  render() {
    const { data, users } = this.state;

    return (
      <>
        <Child />
        {users.length > 0 &&
          users.map((item) => <h4 key={item.id}>{item.fullName}</h4>)}
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

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [inputs, setInputs] = useState({});

//   useEffect(() => {
//     const handleGetUsers = async () => {
//       try {
//         const {
//           data: { data },
//         } = await axios.get("http://localhost:5000/api/v1/users");
//         setUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     handleGetUsers();
//   }, []);

//   const handleChange = (event) => {
//     setInputs({ ...inputs, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const {
//         data: { data },
//       } = await axios.post("http://localhost:5000/api/v1/register", inputs);
//       localStorage.setItem("token", data.token);
//       setInputs({});
//     } catch (error) {
//       if (error.response) {
//         const { data, status } = error.response;

//         if (status > 399) alert(data.error.message);
//       }
//     }
//   };

//   const { fullName, email, password } = inputs;

//   return (
//     <>
//       {users.length > 0 &&
//         users.map((item) => <h4 key={item.id}>{item.email}</h4>)}
//       <form onSubmit={handleSubmit}>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label>
//             Fullname:
//             <input
//               name="fullName"
//               type="text"
//               value={fullName ? fullName : ""}
//               onChange={handleChange}
//             />
//           </label>
//           <label style={{ marginTop: 12 }}>
//             email:
//             <input
//               style={{ marginLeft: 24 }}
//               name="email"
//               type="email"
//               value={email ? email : ""}
//               onChange={handleChange}
//             />
//           </label>
//           <label style={{ marginTop: 12 }}>
//             password:
//             <input
//               name="password"
//               type="password"
//               value={password ? password : ""}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <button style={{ marginTop: 20, marginLeft: 20 }} type="submit">
//           Register
//         </button>
//       </form>
//     </>
//   );
// };

export default App;
