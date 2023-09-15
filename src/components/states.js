import React from "react";

class States extends React.Component {
  User = {
    name: "Hello CTP",
  }

  updatename() {
    this.setState(
      (this.User = {
        name: "Good Afternoon"
      })
    );
  }

  render() {
    return (
      <div>
        <h1>{this.User.name}</h1>
        <button onClick={() => this.updatename()}>Update</button>
      </div>
    );
  }
}
export default States;