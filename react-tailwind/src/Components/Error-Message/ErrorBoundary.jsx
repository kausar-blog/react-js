/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Error caught in ErrorBoundary: ", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1 className="text-yellow-800">You Have Got And Error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
