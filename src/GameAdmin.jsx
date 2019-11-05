import React from 'react'
import PlayerOne from './PlayerOne.jsx'
import PlayerTwo from './PlayerTwo.jsx'

class GameAdmin extends React.Component {
  constructor(props) {
    super(props);
   
  }


render() {
    return (
    <div>
        <PlayerOne/>
        <PlayerTwo/>
        <label> Set Name of Player One:
         <input type="text" name="namePlayerOne" />
        </label>
        <br/><br/>
        <label> Set Name of Player Two:
         <input type="text" name="namePlayerOne" />
        </label>
    </div>
    );
}
}

export default GameAdmin