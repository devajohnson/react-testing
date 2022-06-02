import React from 'react';

export class Count extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { roy } = this.props;
    return (
      <div>
        <h1>my name is {this.props.text}</h1>
        <button onClick={this.props.changename}>change</button>
        <button onClick={this.props.namechange}>change</button>
        <h3>Counter:{roy}</h3>
      </div>
    );
  }
}
