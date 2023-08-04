// Write your code here.
// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <div className="nav-bar-container">
      <div className="navbar-logo-container">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score"> Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
