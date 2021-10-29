import React from "react"
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', submittedValue: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.setState({submittedValue: this.state.value})
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <p>submittedValue State is {this.state.submittedValue}</p>
            <p>Value State is {this.state.value}</p>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm
