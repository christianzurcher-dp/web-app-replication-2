import { Component } from "react";
import "./App.scss";
import UserProfile from "./UserProfile";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mockData: [
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

  render() {
    return (
      <div className="App">
        <UserProfile
          initials={this.state.mockData[0].initials}
          firstName={this.state.mockData[0].firstName}
          lastName={this.state.mockData[0].lastName}
          description={this.state.mockData[0].description}
        />
        <UserProfile
          initials={this.state.mockData[1].initials}
          firstName={this.state.mockData[1].firstName}
          lastName={this.state.mockData[1].lastName}
          description={this.state.mockData[1].description}
        />
        <UserProfile
          initials={this.state.mockData[2].initials}
          firstName={this.state.mockData[2].firstName}
          lastName={this.state.mockData[2].lastName}
          description={this.state.mockData[2].description}
        />
      </div>
    );
  }
}
