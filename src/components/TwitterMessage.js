import React from "react";

export default class TwitterMessage extends React.Component {

  constructor() {

    super();

    this.state = {
      message: "",
    };

  }

  handleChange = (event) => {

    this.setState({
      message: event.target.value,
    });

  };

  render() {
    // maxChars defined in App.js in TwitterMessage component's prop
    let charsRemaining = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <br/>
        {charsRemaining} characters left!
      </div>
    );
  };

};