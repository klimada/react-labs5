import React from 'react'


class PlayerTwo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
        <h3>Player Two</h3>
        <label>Name  </label>
        <label>{this.props.name}</label><br/>
        <label>Played number of times</label>
    </div>
    );
}
}
  
export default PlayerTwo