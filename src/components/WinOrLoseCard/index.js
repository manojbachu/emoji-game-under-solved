// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {topScore, score, onClickPlayAgain} = props

  const playAgain = () => {
    onClickPlayAgain()
  }

  const winGame = (
    <div className="win-or-lose-game-container">
      <img
        className="win-or-lose-game-image"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
      <div className="display-game-result-container">
        <h1 className="game-result">You Won</h1>
        <p className="score-type">Best Score</p>
        <p className="score">12/12</p>
        <button onClick={playAgain} type="button" className="play-again-btn">
          Play Again
        </button>
      </div>
    </div>
  )

  const loseGame = (
    <div className="win-or-lose-game-container">
      <img
        className="win-or-lose-game-image"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
      <div className="display-game-result-container">
        <h1 className="game-result">You Lose</h1>
        <p className="score-type">Score</p>
        <p className="game-score">{score}/12</p>
        <button onClick={playAgain} type="button" className="play-again-btn">
          Play Again
        </button>
      </div>
    </div>
  )

  const result = topScore === score ? winGame : loseGame
  return result
}

export default WinOrLoseCard
