import React from "react";

class Callback extends React.Component {
  componentDidMount() {
    // Handle authentication if expected values are in the url
    // eslint-disable-next-line react/prop-types
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      // eslint-disable-next-line react/prop-types
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL");
    }
  }

  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
