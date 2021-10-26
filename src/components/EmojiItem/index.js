import './index.css'

const EmojiItem = emojis => {
  const {id, name, imageUrl, onClickEmoji} = emojis

  const changeScreenOnClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button
        type="button"
        className="emoji-button"
        onClick={changeScreenOnClick}
      >
        <img src={imageUrl} className="emoji" alt={name} />
      </button>
      <br />
      <span className="emoji-name">{name}</span>
    </li>
  )
}
export default EmojiItem
