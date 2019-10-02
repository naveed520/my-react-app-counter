import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
    styles: { fontSize: 20, fontWeight: 800 }
  };

  /* 
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  handleIncrement = products => {
    this.setState({
      count: this.state.count + 1
    });
    console.log(products);
    // console.log("Increment Clicked", this);
  };
  /* doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  }; */
  render() {
    return (
      <div>
        <span style={this.state.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
