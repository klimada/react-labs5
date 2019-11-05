import React from 'react'


class PlayerTwo extends React.Component {
  constructor(props) {
    super(props);
    
  }

  changetext(pressed){
    if(pressed)
        return "This player is playing";
    else
        return "Play";
  }

  render() {
    return (
    <div>
        <h3>Player Two</h3>
        <label>Name  </label>
        <label>{this.props.name}</label><br/>
        <label>Played number of times</label>
        <button disabled={this.props.pressed} onClick={this.props.whenclick}>{this.changetext(this.props.pressed)}</button>
    </div>
    );
}
}
  
export default PlayerTwo