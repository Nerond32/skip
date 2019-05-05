import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  onChange(e) {
    e.preventDefault();
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="text"
              placeholder="Enter password"
              name="password"
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
