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
        buttonTwo:false,
        numberofgamesOne:1,
        numberofgamesTwo:0
      };
    this.nameOneChange = this.nameOneChange.bind(this);
    this.nameTwoChange = this.nameTwoChange.bind(this);
    this.buttonOnePressed = this.buttonOnePressed.bind(this);
    this.buttonTwoPressed = this.buttonTwoPressed.bind(this);
  }

  nameOneChange(event) {
    const numberofgamesOne = 0;
    const namePlayerOne = event.target.value;
    this.setState({namePlayerOne,numberofgamesOne});
  }

  nameTwoChange(event) {
    const numberofgamesTwo = 0;
    const namePlayerTwo = event.target.value;
    this.setState({namePlayerTwo,numberofgamesTwo});
  }

  buttonOnePressed(event) {
    const numberofgamesOne = this.state.numberofgamesOne+1;
    this.setState({buttonOne:true,buttonTwo:false,numberofgamesOne});
  }

  buttonTwoPressed(event) {
    const numberofgamesTwo = this.state.numberofgamesTwo+1;
    this.setState({buttonOne:false,buttonTwo:true,numberofgamesTwo});
  }

render() {
    return (
    <div>
        <PlayerOne numberofgames={this.state.numberofgamesOne} name={this.state.namePlayerOne} pressed={this.state.buttonOne} whenclick={this.buttonOnePressed}/>
        <br/>
        <PlayerTwo numberofgames={this.state.numberofgamesTwo} name={this.state.namePlayerTwo} pressed={this.state.buttonTwo} whenclick={this.buttonTwoPressed}/>
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