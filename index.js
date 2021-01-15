import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Test extends React.Component {

  constructor(props){

     super(props)

     this.state = {

      board: Array(9).fill(null),

      player: "X"

    }

  }
  
  checkWinner() {

    let winLines =

    [
      ["o", "1", '2'],

      ["3", "4", '5'],

      ["6", "7", '8'],

      ["0", "3", '6'],

      ["1", "4", '7'],

      ["2", "5", '8'],

      ["o", "4", '8'],

      ["2", "4", '6'],
      
    ]

   for (let index = 0; index < winLines.length; index++) {
     
    const [a, b, c] = winLines[index];
    
    if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a]
   
      === this.state.board[c]) {

      alert('Wow, you won!');
        

    }

    }
   

     }
   
  handleClick(index) {

    let numBoard = this.state.board

      if(this.state.board[index] === null) {

     numBoard[index] = this.state.player

      this.setState({

     board: numBoard,

     player: this.state.player === "X" ? "0" : "X"

})

}
  //console.log(index)
}

render() {

  const Box = this.state.board.map(

    (box, index) => 

      <div className="box" 

        key={index}

        onClick={() => this.handleClick(index)} >

        {box}

      </div>
      );
    
    return (
    <div className="container">
    
    <h1>My Tic Tac Toe App</h1>

    <div className="board">

     {Box}

    </div>

    </div>
  );

  }
}

//export default App;
ReactDOM.render(<Test />, document.getElementById('root'));