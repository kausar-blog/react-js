import { PureComponent } from "react";

class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
    };
  }

  static getDerivedStateFromProps(props) {
    return { favoritecolor: props.color };
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color</h1>
        <p>This is my favorite color: {this.state.favoritecolor}</p>
      </div>
    );
  }
}

export default Example;
