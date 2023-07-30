import { Component } from "react";
import "./App.scss";
import UserProfile from "./UserProfile";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          initials: "CZ",
          firstName: "Christian",
          lastName: "Zurcher",
          description: "funny norwegian guy",
        },
        {
          initials: "TM",
          firstName: "Tyler",
          lastName: "Moline",
          description: "better Tyler",
        },
        {
          initials: "TG",
          firstName: "Tyler",
          lastName: "Gilroy",
          description: "best Tyler",
        },
      ],
    };
  }

  renderUsers() {
    const users = this.state.users.map((user) => {
      return (
        <UserProfile
          initials={user.initials}
          firstName={user.firstName}
          lastName={user.lastName}
          description={user.description}
        />
      );
    });
    return users;
  }
  addUser() {
    console.log("hello");
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last Name");
    let description = prompt("Enter a brief description of yourself");
    let initials = `${firstName.charAt().toUpperCase()}${lastName
      .charAt()
      .toUpperCase()}`;
    let newUser = {
      initials: initials,
      firstName: firstName,
      lastName: lastName,
      description: description,
    };
    const stateCopy = this.state.users;
    stateCopy.push(newUser);
    this.setState({ users: stateCopy });
  }

  render() {
    return (
      <div className="App">
        <div className="users">
          {this.renderUsers()}
          <div className="add-user">
            <button onClick={() => this.addUser()}>Add User</button>
          </div>
        </div>
      </div>
    );
  }
}
