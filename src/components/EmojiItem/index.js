import './index.css'

const EmojiItem = props => {
  const {resources, onClickEmoji} = props
  const {id, name, imageUrl} = resources

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
