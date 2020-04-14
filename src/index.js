import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
  );
}

// class Square extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     handleClick(i){
//     }

//     render() {
//     //"this" refers to currentclass
//       return (
//         <button className="square" onClick={() => this.props.onClick()}
//            >
//           {this.props.value} 
//         </button>
//       );
//     }
//   }
  
  class Board extends React.Component {
    handleClick(i){
      const squares = this.state.squares.slice();//slice makes copy of array
      squares[i] = this.state.xIsNext ? 'X' : 'O';//turenary operator; if true return X, if false return O
      this.setState({
       squares: squares,//old squares array set to new squares array - changes state of whole board at once
       xIsNext: !this.state.xIsNext, //changes turn
      });
    }
    
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    renderSquare(i) {
      return (<Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />);
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  