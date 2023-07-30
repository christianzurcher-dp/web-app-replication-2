import { Component } from "react";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-icon-and-name">
          <div className="profile-icon">{this.props.initials}</div>
          <div className="profile-name">
            <p>{this.props.firstName}</p>
            <p>{this.props.lastName}</p>
          </div>
        </div>
        <div className="profile-description">{this.props.description}</div>
      </div>
    );
  }
}
