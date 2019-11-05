import React from 'react'
import PlayerOne from './PlayerOne.jsx'
import PlayerTwo from './PlayerTwo.jsx'

class GameAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        namePlayerOne: '',
        namePlayerTwo: '',
        buttonOne:true,
        buttonTwo:false
      };
    this.nameOneChange = this.nameOneChange.bind(this);
    this.nameTwoChange = this.nameTwoChange.bind(this);
    this.buttonOnePressed = this.buttonOnePressed.bind(this);
    this.buttonTwoPressed = this.buttonTwoPressed.bind(this);
  }

  nameOneChange(event) {
    const namePlayerOne = event.target.value;
    this.setState({namePlayerOne});
  }

  nameTwoChange(event) {
    const namePlayerTwo = event.target.value;
    this.setState({namePlayerTwo});
  }

  buttonOnePressed(event) {
    this.setState({buttonOne:true,buttonTwo:false});
  }

  buttonTwoPressed(event) {
    this.setState({buttonOne:false,buttonTwo:true});
  }

render() {
    return (
    <div>
        <PlayerOne name={this.state.namePlayerOne} pressed={this.state.buttonOne} whenclick={this.buttonOnePressed}/>
        <br/>
        <PlayerTwo name={this.state.namePlayerTwo} pressed={this.state.buttonTwo} whenclick={this.buttonTwoPressed}/>
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