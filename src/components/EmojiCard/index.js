// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails
  const clickEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card-item">
      <button onClick={clickEmoji} className="button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
