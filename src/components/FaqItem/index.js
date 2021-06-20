import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onChangeIcon = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderImage = () => {
    const {isActive} = this.state
    const imageItem = isActive ? minusImage : plusImage
    const altText = isActive ? 'Minus' : 'Plus'

    return (
      <button className="button" type="button" onClick={this.onChangeIcon}>
        <img src={imageItem} alt={altText} />
      </button>
    )
  }

  renderDescription = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="card-description-container">
        <div className="question-container">
          <h1 className="question-heading">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderDescription()}
      </li>
    )
  }
}

export default FaqItem
