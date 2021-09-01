import React, { Component } from "react";

class Counter extends Component {
  /**
   * *Mounting lifecycle methods
   * constructor()
   * static getDerivedStateFromProps()
   * render()
   * componentDidMount()
   */

  /**
   * *Updating lifecycle methods
   * static getDerivedStateFromProps()
   * shouldComponentUpdate()
   * render()
   * getSnapshotBeforeUpdate()
   * componentDidUpdate()
   */

  /**
   * *Unmounting lifecycle method
   * componentWillUnmount()
   */

  /**
   * *Error handling lifecycle methods
   * static getDerivedStateFromError()
   * componentDidCatch()
   */

  // Reference: https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#shouldcomponentupdate

  /**
   * * Mounting
   * constructor() - 1
   * static getDerivedStateFromProps() - 2
   * render() - 3
   * componentDidMount() - 4
   */

  constructor(props) {
    super(props);
    this.state = { count: 0 };

    console.log("contructor: ", this.state.count);
  }

  /**
   * * First function after constructor
   * If you want to map props to state
   * You may return null for not updating the state
   * ! On Update phase, this will remape from props to state
   * * Update Phase: - 1
   */

  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps: Updating state");
    return null;
  }

  increase = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  /**
   * * Update Phase - 2
   * Mostly used for optimization to prevent unnecssary renders
   * compare current state/props with new one. If require update then return true.
   * Otherwise rereturn false
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // return this.state.count % 2 === 0;

    return true;
  }

  // Prepare your DOM and set here for render
  render() {
    console.log("Rendering: Component is mounting to DOM");
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button className="border-2" onClick={this.increase}>
          Increase
        </button>
      </React.Fragment>
    );
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate");

    return null;
  };

  /**
   * Executes after component is rendered to DOM.
   * Call APIs, set timers etc
   * Subscriptions
   * Only called in mounting phase
   */
  componentDidMount() {
    console.log("Component did mount: ", this.state.count);
  }

  // Executes each time after rendering to DOM.
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}

export default Counter;
