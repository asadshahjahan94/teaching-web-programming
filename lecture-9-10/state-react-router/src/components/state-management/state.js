import React, { useState, Component } from 'react';

export const StateMethod = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h2>Using the State Hook</h2>
        <p>You reported {count} times</p>
        {count >= 10 ? <div className="alert alert-danger">You cannot report more than 10 times</div> :
          <button onClick={() => setCount(count + 1)}>
            Report post
          </button>
        }
      </div>
    )
}
    
export class StateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          like: false,
        }
    }

    report = () => {
      // if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 })
      // }
    }

    unreport = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 })
      }
    }

    doLike = () => {
      this.setState({like: !this.state.like})
    }

    render() {
        return (
          <div>
            <h2>Using the Class State</h2>
            <p>You reported {this.state.count} times</p>
            <button onClick={this.report}>
              Report post
            </button>
            <button onClick={this.unreport}>
              Unreport post
            </button>
            <br/>
            <hr/>
            <h3 onClick={this.doLike}>{this.state.like ? "Unlike" : "Like"}</h3>
            {this.state.count > 0 && (
              this.state.count > 0 && this.state.count < 10 ?
              <div className="alert alert-info">reported</div> : (
                this.state.count >= 10 && this.state.count <=20 ? <div className="alert alert-warning">warning regarding report</div> :
                  <div className="alert alert-danger">error regarding report</div>
              )
            )}
          </div>
        );
      }
}
