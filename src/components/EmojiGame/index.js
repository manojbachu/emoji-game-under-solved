/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {topScore: 0, isGameInProgress: true, selectedEmojiIdList: []}

  onClickPlayAgain = () => {
    const {selectedEmojiIdList, topScore} = this.state
    console.log(topScore)
    const newTopScore =
      selectedEmojiIdList.length > topScore
        ? selectedEmojiIdList.length
        : topScore
    this.setState({
      topScore: newTopScore,
      isGameInProgress: true,
      selectedEmojiIdList: [],
    })
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    const newTopScore = currentScore > topScore ? currentScore : topScore

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  onClickEmoji = id => {
    const {selectedEmojiIdList} = this.state
    const {emojisList} = this.props

    if (selectedEmojiIdList.includes(id)) {
      this.finishGameAndSetTopScore(selectedEmojiIdList.length)
    } else {
      if (selectedEmojiIdList.length === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        selectedEmojiIdList: [...prevState.selectedEmojiIdList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isGameInProgress, selectedEmojiIdList, topScore} = this.state
    console.log(topScore)
    const {emojisList} = this.props
    const shuffledEmojisList = this.getShuffledEmojisList()
    const renderEmojiList = (
      <ul className="emoji-card-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiCardDetails={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
    return (
      <div className="emoji-game-container">
        <NavBar
          score={selectedEmojiIdList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />

        {isGameInProgress ? (
          renderEmojiList
        ) : (
          <WinOrLoseCard
            topScore={emojisList.length}
            score={selectedEmojiIdList.length}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
