import React from 'react'


class PlayerOne extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div>
        <h3>Player One</h3>
        <label>Name  </label>
        <label >{this.props.name}</label><br/>
        <label>Played number of times</label>
    </div>
    );
}
}
  
export default PlayerOne