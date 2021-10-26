import {Component} from 'react'
import './index.css'

import EmojiItem from '../EmojiItem'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => this.setState({isFeedback: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="main-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {resources.emojis.map(eachItem => (
            <EmojiItem
              key={eachItem.id}
              resources={eachItem}
              onClick={this.onClickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img
          src={loveEmojiUrl}
          className="thankyou-screen-image"
          alt="loveEmojiUrl"
        />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-card">
          {isFeedback
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
