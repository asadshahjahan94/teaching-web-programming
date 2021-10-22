import React, { useState, Component } from 'react';

export const StateMethod = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h2>Using the State Hook</h2>
        <p>You reported {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Report post
        </button>
        {count > 10 && <div className="alert alert-danger">You cannot report more than 10 times</div>}
      </div>
    )
}
    
export class StateClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        return (
          <div>
            <h2>Using the Class State</h2>
            <p>You reported {this.state.count} times</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              Report post
            </button>
            {this.state.count > 10 && <div className="alert alert-danger">You cannot report more than 10 times</div>}
          </div>
        );
      }
}
