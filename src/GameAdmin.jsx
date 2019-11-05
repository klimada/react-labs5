import React from 'react'
import PlayerOne from './PlayerOne.jsx'
import PlayerTwo from './PlayerTwo.jsx'

class GameAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        namePlayerOne: '',
        namePlayerTwo: ''
      };
    this.nameOneChange = this.nameOneChange.bind(this);
    this.nameTwoChange = this.nameTwoChange.bind(this);
  }

  nameOneChange(event) {
    const namePlayerOne = event.target.value;
    this.setState({namePlayerOne,namePlayerOne});
  }
  nameTwoChange(event) {
    const namePlayerTwo = event.target.value;
    this.setState({namePlayerTwo,namePlayerTwo});
  }

render() {
    return (
    <div>
        <PlayerOne name={this.state.namePlayerOne}/>
        <br/>
        <PlayerTwo name={this.state.namePlayerTwo}/>
        <br/>
        <label> Set Name of Player One:
         <input type="text" name="namePlayerOne" value={this.state.namePlayerOne} onChange={this.nameOneChange} />
        </label>
        <br/><br/>
        <label> Set Name of Player Two:
         <input type="text" name="namePlayerOne" value={this.state.namePlayerTwo} onChange={this.nameTwoChange} />
        </label>
    </div>
    );
}
}

export default GameAdmin